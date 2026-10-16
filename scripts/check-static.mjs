import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { parse } from 'parse5';

const buildDirectory = resolve('build');
const expectedPages = new Map([
  ['/', 'Baker Flight Instruction'],
  ['/about', 'About Me'],
  ['/services', 'Services Offered'],
  ['/resources', 'Training Resources'],
  ['/contact', 'Contact'],
  ['/support', 'Support'],
  ['/privacy', 'Privacy Policy'],
  ['/terms', 'Terms of Service']
]);

function walk(node) {
  return [node, ...(node.childNodes ?? []).flatMap(walk)];
}

function attribute(node, name) {
  return node.attrs?.find((entry) => entry.name === name)?.value;
}

function text(node) {
  return node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
}

function localFile(pathname) {
  const file = resolve(buildDirectory, `.${decodeURIComponent(pathname)}`);
  assert(!relative(buildDirectory, file).startsWith('..'), `Path escapes build: ${pathname}`);
  if (pathname === '/') return resolve(buildDirectory, 'index.html');
  if (existsSync(file)) return file;
  return `${file}.html`;
}

assert(existsSync(buildDirectory), 'Run pnpm build before pnpm check:static.');

for (const [pathname, expectedHeading] of expectedPages) {
  const html = readFileSync(localFile(pathname), 'utf8');
  const nodes = walk(parse(html));
  const elements = (tag) => nodes.filter((node) => node.tagName === tag);
  const headings = elements('h1');
  assert.equal(headings.length, 1, `${pathname}: expected one H1 in static HTML`);
  assert.equal(text(headings[0]).trim(), expectedHeading, `${pathname}: missing page content`);
  assert.equal(elements('main').length, 1, `${pathname}: expected one main landmark`);
  assert.equal(elements('title').length, 1, `${pathname}: expected one title`);
  assert(text(elements('title')[0]).includes('Baker Flight Instruction'));
  assert(
    elements('meta').some(
      (node) => attribute(node, 'name') === 'description' && attribute(node, 'content')
    )
  );
  assert(
    !elements('meta').some(
      (node) =>
        attribute(node, 'name') === 'robots' && attribute(node, 'content')?.includes('noindex')
    )
  );
  assert(elements('script').length > 0, `${pathname}: hydration scripts are missing`);
  for (const node of nodes) {
    const link =
      node.tagName === 'a'
        ? attribute(node, 'href')
        : ['img', 'script'].includes(node.tagName)
          ? attribute(node, 'src')
          : node.tagName === 'link'
            ? attribute(node, 'href')
            : undefined;
    if (!link) continue;
    const url = new URL(link, `https://static-check.invalid${pathname}`);
    if (url.origin !== 'https://static-check.invalid') continue;
    assert(existsSync(localFile(url.pathname)), `${pathname}: missing local target ${link}`);
  }
  if (pathname === '/services') {
    const triggers = nodes.filter((node) => attribute(node, 'data-slot') === 'accordion-trigger');
    const panels = nodes.filter((node) => attribute(node, 'data-slot') === 'accordion-content');
    assert.equal(triggers.length, 5, 'Services must use five shadcn accordion triggers.');
    assert.equal(panels.length, 5, 'All service panels must exist in static HTML.');
    for (const [index, panel] of panels.entries()) {
      assert(
        text(panel).includes('Instructor Rate: $50/hr'),
        'Every service rate must exist in static HTML.'
      );
      assert(
        text(panel).trim().length > 70,
        'Every service description must exist in static HTML.'
      );
      assert.equal(attribute(panel, 'hidden'), 'until-found');
      assert.equal(attribute(triggers[index], 'aria-controls'), attribute(panel, 'id'));
      assert.equal(attribute(panel, 'aria-labelledby'), attribute(triggers[index], 'id'));
      assert.equal(attribute(triggers[index], 'aria-expanded'), 'false');
    }
  }
  if (pathname === '/contact') {
    const form = elements('form')[0];
    assert.equal(attribute(form, 'action'), 'https://formspree.io/f/mbgllpkv');
    assert.equal(attribute(form, 'method').toLowerCase(), 'post');
    const fields = nodes.filter((node) => ['input', 'select', 'textarea'].includes(node.tagName));
    assert.deepEqual(
      fields.map((node) => attribute(node, 'name')),
      ['name', 'email', 'phone', 'interest', 'message']
    );
    for (const node of fields) {
      if (attribute(node, 'aria-hidden') === 'true') continue;
      assert(elements('label').some((label) => attribute(label, 'for') === attribute(node, 'id')));
    }
    const interestField = fields.find((node) => attribute(node, 'name') === 'interest');
    assert.equal(attribute(interestField, 'aria-hidden'), 'true');
    assert.equal(attribute(interestField, 'tabindex'), '-1');
    assert.equal(attribute(interestField, 'value'), 'Discovery flight');
    const interestTrigger = elements('button').find((node) => attribute(node, 'id') === 'interest');
    assert.equal(attribute(interestTrigger, 'data-slot'), 'select-trigger');
    assert.equal(attribute(interestTrigger, 'aria-haspopup'), 'listbox');
    assert(elements('label').some((node) => attribute(node, 'for') === 'interest'));
    assert.equal(elements('select').length, 0, 'The interest control must use the custom Select.');
  }
}

console.log(
  'Checked 8 prerendered pages: content, metadata, hydration, links, assets, accordions, and form controls.'
);
