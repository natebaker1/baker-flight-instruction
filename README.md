# Baker Flight Instruction

SvelteKit 2, Svelte 5, TypeScript, Tailwind CSS 4, and shadcn-svelte. Every page is prerendered with `@sveltejs/adapter-static`. Hydration stays enabled for interactive components.

## Local development

Use Node 22.12 or later and pnpm 10.24.0. With nvm, run `nvm use` first.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite. The default is `http://127.0.0.1:5173`.

## Checks and static preview

```sh
pnpm check
pnpm format:check
pnpm build
pnpm check:static
pnpm preview
```

The production build writes HTML, CSS, JavaScript, and images to `build/`. `pnpm preview` serves that output locally at `http://127.0.0.1:4173`. These commands do not publish the site.

`check:static` reads the generated HTML without executing JavaScript. It checks all eight pages, metadata, internal links, assets, hydration scripts, service details, and contact form fields. It never submits the contact form.

## Project structure

- `src/routes`: Home, About, Services, Resources, Contact, Support, Privacy, and Terms.
- `src/lib/components`: Shared navigation, footer, metadata, and service accordion.
- `src/lib/components/ui`: shadcn-svelte components added through its CLI.
- `src/app.css`: Tailwind configuration and semantic UI tokens.
- `src/lib/styles/site.css`: Site appearance, responsive layouts, and CSS motion.
- `static/images`: Original site images.

The routes use clean URLs such as `/about`. Existing `.html` URLs also resolve through `src/hooks.ts`. The static build includes `about.html`, `services.html`, and the other original page filenames. A static host must support extensionless HTML requests to serve the clean URLs. Vite's local preview supports both formats.

The contact form continues to POST directly to the existing Formspree endpoint. No backend or credentials are required to run this project locally.

## Production deployment

Cloudflare Workers Builds deploys the `main` branch to `https://bakerflightinstruction.com`. The Worker name is `baker-flight-instruction`.

`wrangler.json` runs `pnpm build && pnpm check:static` before deployment and publishes only `build/`. Cloudflare serves clean URLs and redirects legacy `.html` URLs to those clean URLs. The deployment contains prerendered HTML and static assets; it does not require a server runtime.

To check the Cloudflare deployment configuration locally without publishing:

```sh
pnpm exec wrangler deploy --dry-run
```

Buttons, navigation, service accordions, badges, form fields, inputs, labels, textarea, and the custom Select use shadcn-svelte components. Ordinary content links and page layout use semantic HTML. The local component source and site tokens preserve the brand appearance. The custom Select uses a named hidden input to include the chosen interest in the Formspree POST. Its menu requires hydration.

Accordion motion uses shadcn-svelte's accordion animation utilities. Photo entrance motion uses `tw-animate-css`. Both respect reduced-motion preferences. Closed service panels use Bits UI's `hiddenUntilFound` option, so their full text remains in prerendered HTML and browser search can reveal a matching panel. Accordion interaction requires hydration.

## Paseo worktrees

`paseo.json` installs dependencies with `pnpm install --frozen-lockfile` when Paseo creates a worktree. Its `setup`, `dev`, `check`, `build`, and `preview` scripts also appear in the workspace's script list.

The `dev` and `preview` services use `$PASEO_PORT`, so worktrees can run at the same time. Both bind to `127.0.0.1`. Paseo provides a local proxy URL for each service.

```sh
paseo script start dev
paseo script start check
paseo script start preview
paseo script stop dev
```

Paseo reads worktree setup from the committed base branch. New worktrees receive this configuration after it is included in that branch. No teardown command is needed; this project creates no external resources.

## Add a UI component

```sh
pnpm dlx shadcn-svelte@latest add dialog
```

`components.json` records the component paths and theme. Customize the local component source and shared tokens to keep the site's visual style.
