<script lang="ts">
  import { footerLinks, primaryLinks } from '#lib/navigation.js';
  import HeadingTape from '#lib/components/HeadingTape.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="footer-tape"><HeadingTape tone="dark" /></div>
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="site-brand" href="/" aria-label="Baker Flight Instruction home">
        <img src="/images/airplane-logo.webp" alt="" width="40" height="40" />
        <span class="brand-wordmark"
          ><span class="brand-name">Baker</span><span class="brand-subtitle"
            >Flight Instruction</span
          ></span
        >
      </a>
      <p>Personalized contract flight instruction across Dallas–Fort Worth and North Texas.</p>
    </div>
    <nav class="footer-column" aria-label="Footer navigation">
      <p class="data-label">Site</p>
      <ul class="footer-links">
        {#each primaryLinks as link (link.href)}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>
    </nav>
    <nav class="footer-column" aria-label="Policies and support">
      <p class="data-label">Information</p>
      <ul class="footer-links">
        {#each footerLinks as link (link.href)}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>
    </nav>
    <div class="footer-column">
      <p class="data-label">Connect</p>
      <ul class="footer-links">
        <li>
          <a href="https://www.linkedin.com/in/nate-baker-cfii" target="_blank" rel="noopener"
            >LinkedIn</a
          >
        </li>
        <li><a href="/contact">Send a message</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-inner footer-base">
    <p>© {currentYear} Baker Flight Instruction</p>
    <p>Nate Baker, CFI · CFII · Dallas–Fort Worth, TX</p>
  </div>
</footer>
