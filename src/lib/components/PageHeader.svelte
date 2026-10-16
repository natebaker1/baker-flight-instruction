<script lang="ts">
  let { title, description }: { title: string; description?: string } = $props();
</script>

<header class="page-header">
  <h1 class="page-title">{title}</h1>
  {#if description}
    <p class="page-lede">{description}</p>
  {/if}
</header>
