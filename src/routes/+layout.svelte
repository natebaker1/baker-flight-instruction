<script lang="ts">
  import '../app.css';
  import SiteNav from '#lib/components/SiteNav.svelte';
  import SiteFooter from '#lib/components/SiteFooter.svelte';

  let { children } = $props();
</script>

<a class="skip-link" href="#main-content">Skip to content</a>
<SiteNav />
<main id="main-content" class="site-main" tabindex="-1">
  {@render children()}
</main>
<SiteFooter />
