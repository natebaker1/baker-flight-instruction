<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import PageHeader from '#lib/components/PageHeader.svelte';
  import { Button } from '#lib/components/ui/button/index.js';
  import { Input } from '#lib/components/ui/input/index.js';
  import { Textarea } from '#lib/components/ui/textarea/index.js';
  import { Label } from '#lib/components/ui/label/index.js';
  import * as Select from '#lib/components/ui/select/index.js';
  import { Field } from '#lib/components/ui/field/index.js';

  const interests = [
    'Discovery flight',
    'Private Pilot training',
    'Instrument Rating',
    'Commercial Pilot training',
    'Flight review / IPC',
    'Other'
  ].map((value) => ({ value, label: value }));
  let interest = $state(interests[0].value);
</script>

<Seo
  title="Contact — Baker Flight Instruction"
  description="Contact Baker Flight Instruction to discuss flight training, discovery flights, flight reviews, and your aviation goals."
/>

<PageHeader
  title="Contact"
  description="Need a flight instructor? Tell me where you are in your training and what you want to work toward."
/>

<div class="content-column">
  <section class="panel">
    <div class="panel-heading">
      <h2>Send a message</h2>
      <p>Share your goals and your availability, and I will reply by email.</p>
      <ul class="contact-list">
        <li>
          <span class="data-label">Based in</span>
          <span>Dallas–Fort Worth, TX</span>
        </li>
        <li>
          <span class="data-label">LinkedIn</span>
          <a href="https://www.linkedin.com/in/nate-baker-cfii" target="_blank" rel="noopener"
            >nate-baker-cfii</a
          >
        </li>
      </ul>
    </div>
    <form class="contact-form" action="https://formspree.io/f/mbgllpkv" method="POST">
      <Field class="form-row">
        <Label for="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </Field>
      <Field class="form-row">
        <Label for="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </Field>
      <Field class="form-row">
        <Label for="phone">Phone (optional)</Label>
        <Input type="tel" id="phone" name="phone" />
      </Field>
      <Field class="form-row">
        <Label for="interest">What are you interested in?</Label>
        <Select.Root type="single" name="interest" items={interests} bind:value={interest}>
          <Select.Trigger id="interest">
            <Select.Value />
          </Select.Trigger>
          <Select.Content class="interest-select-content">
            {#each interests as option (option.value)}
              <Select.Item value={option.value} label={option.label}>{option.label}</Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      </Field>
      <Field class="form-row">
        <Label for="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </Field>
      <Button type="submit" class="btn-primary">Send message</Button>
    </form>
  </section>
</div>
