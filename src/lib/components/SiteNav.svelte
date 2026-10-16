<script lang="ts">
  import { page } from '$app/state';
  import { legacyRoutes, primaryLinks } from '#lib/navigation.js';
  import * as NavigationMenu from '#lib/components/ui/navigation-menu/index.js';
  import { Button } from '#lib/components/ui/button/index.js';

  const currentPath = $derived(legacyRoutes[page.url.pathname] ?? page.url.pathname);
</script>

<header class="site-nav">
  <div class="nav-inner">
    <a class="site-brand" href="/" aria-label="Baker Flight Instruction home">
      <img src="/images/airplane-logo.webp" alt="" width="40" height="40" />
      <span class="brand-wordmark"
        ><span class="brand-name">Baker</span><span class="brand-subtitle">Flight Instruction</span
        ></span
      >
    </a>
    <NavigationMenu.Root class="site-navigation" viewport={false} aria-label="Main navigation">
      <NavigationMenu.List class="nav-links">
        {#each primaryLinks as link (link.href)}
          <NavigationMenu.Item>
            {#if link.href === '/contact'}
              <NavigationMenu.Link
                href={link.href}
                active={currentPath === link.href}
                aria-current={currentPath === link.href ? 'page' : undefined}
              >
                {#snippet child({ props })}
                  <Button
                    {...props}
                    class={currentPath === link.href ? 'nav-contact active' : 'nav-contact'}
                    >{link.label}</Button
                  >
                {/snippet}
              </NavigationMenu.Link>
            {:else}
              <NavigationMenu.Link
                href={link.href}
                active={currentPath === link.href}
                class={currentPath === link.href ? 'active' : undefined}
                aria-current={currentPath === link.href ? 'page' : undefined}
              >
                {link.label}
              </NavigationMenu.Link>
            {/if}
          </NavigationMenu.Item>
        {/each}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </div>
</header>
