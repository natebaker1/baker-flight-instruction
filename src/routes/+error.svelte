<script lang="ts">
  import { page } from '$app/state';
  import { Button } from '#lib/components/ui/button/index.js';
  import Seo from '#lib/components/Seo.svelte';
</script>

<Seo
  title="Page unavailable — Baker Flight Instruction"
  description="This page is unavailable. Return to Baker Flight Instruction."
/>
<header class="page-header">
  <h1 class="page-title">{page.status === 404 ? 'Page not found' : 'Page unavailable'}</h1>
  <p class="page-lede">{page.error?.message ?? 'Please try again.'}</p>
</header>
<div class="content-column">
  <section class="panel">
    <Button href="/" class="btn-primary">Return home</Button>
  </section>
</div>
