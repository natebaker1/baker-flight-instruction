<script lang="ts">
  import Plus from '@lucide/svelte/icons/plus';
  import type { Snippet } from 'svelte';
  import * as Accordion from '#lib/components/ui/accordion/index.js';
  import { Badge } from '#lib/components/ui/badge/index.js';

  let { code, name, children }: { code: string; name: string; children: Snippet } = $props();
  const serviceId = $props.id();
  const triggerId = `${serviceId}-trigger`;
  const contentId = `${serviceId}-content`;
</script>

<Accordion.Item value={code} class="service-item">
  <Accordion.Trigger id={triggerId} aria-controls={contentId} class="service-trigger" level={2}>
    <Badge variant="secondary" class="cert-code">{code}</Badge>
    <span class="service-name">{name}</span>
    {#snippet icon()}
      <Plus
        class="service-toggle motion-safe:transition-transform motion-safe:duration-200"
        size={18}
        aria-hidden="true"
      />
    {/snippet}
  </Accordion.Trigger>
  <Accordion.Content
    id={contentId}
    role="region"
    aria-labelledby={triggerId}
    hiddenUntilFound
    class="service-detail">{@render children()}</Accordion.Content
  >
</Accordion.Item>
