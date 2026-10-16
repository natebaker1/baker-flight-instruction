<script lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
  import type { Snippet } from 'svelte';
  import { cn, type WithoutChild } from '#lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    level = 3,
    children,
    icon,
    ...restProps
  }: WithoutChild<AccordionPrimitive.TriggerProps> & {
    level?: AccordionPrimitive.HeaderProps['level'];
    icon?: Snippet;
  } = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
  <AccordionPrimitive.Trigger
    data-slot="accordion-trigger"
    bind:ref
    class={cn(
      'focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-md py-4 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...restProps}
  >
    {@render children?.()}
    {#if icon}
      {@render icon()}
    {:else}
      <ChevronDownIcon
        data-slot="accordion-trigger-icon"
        class="pointer-events-none shrink-0 motion-safe:transition-transform motion-safe:duration-200 group-aria-expanded/accordion-trigger:rotate-180"
      />
    {/if}
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
