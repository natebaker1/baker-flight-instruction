<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import PageHeader from '#lib/components/PageHeader.svelte';
  import { Button } from '#lib/components/ui/button/index.js';
</script>

<Seo
  title="Support — Baker Flight Instruction"
  description="Learn how voluntary contributions support Nate Baker’s flight training loans and flight instruction resources."
/>

<PageHeader
  title="Support"
  description="For anyone who'd like to support - completely optional, never expected."
/>

<div class="content-column">
  <section class="panel">
    <div class="panel-heading"><h2>Support Your Instructor</h2></div>
    <p>
      Financial support goes straight toward paying down my flight training loans and to add
      resources to the training offered. If a lesson, a resource on this site, or just a
      conversation about flying helped you out, a tip is always appreciated but never expected.
    </p>
    <Button
      href="https://venmo.com/u/your-handle"
      target="_blank"
      rel="noopener"
      class="btn-primary donate-btn">Contribute</Button
    >
  </section>

  <section class="panel">
    <p class="donate-note">
      NOTE: These are personal, voluntary contributions that are used specifically for the purposes
      listed above.
    </p>
  </section>
</div>
