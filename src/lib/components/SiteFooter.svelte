<script lang="ts">
  import { footerLinks } from '#lib/navigation.js';
</script>

<footer class="site-footer">
  <div class="footer-inner">
    <p>Nate Baker · Dallas-Fort Worth, TX</p>
    <nav aria-label="Footer navigation">
      <ul class="footer-links">
        {#each footerLinks as link (link.href)}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
</footer>
