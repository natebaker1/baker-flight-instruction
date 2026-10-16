<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import { Button } from '#lib/components/ui/button/index.js';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<Seo
  title="Baker Flight Instruction"
  description="Personalized contract flight instruction with Nate Baker in Dallas-Fort Worth and North Texas. Explore training, instructor rates, and aviation resources."
/>

<header class="hero" id="home">
  <div class="hero-inner">
    <div class="hero-copy">
      <h1>Baker Flight Instruction</h1>
      <p class="role">Learn to Fly with Confidence.</p>
      <p class="intro">
        Flight Training is more than just learning how to fly an aircraft. It is about developing
        the skills, knowledge, and confidence to become a safe and capable pilot.
      </p>
      <div class="hero-actions">
        <Button href="/contact" class="btn-primary">
          Get in touch <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
        <Button variant="link" class="text-link" href="/services">
          Services &amp; pricing <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </div>
    <figure
      class="hero-photo motion-safe:animate-in motion-safe:fade-in-90 motion-safe:slide-in-from-bottom-1.5 motion-safe:duration-700 motion-safe:ease-out"
    >
      <img
        src="/images/aircraft-sunrise.webp"
        alt="Training aircraft at sunrise"
        width="1179"
        height="1319"
        fetchpriority="high"
      />
      <figcaption><span>North Texas</span><span>Dallas–Fort Worth</span></figcaption>
    </figure>
  </div>
</header>

<section class="home-details" aria-label="Flight training and next steps">
  <div class="home-prose">
    <p>
      Baker Flight Instruction provides professional and personalized contract flight instruction
      that is designed to help each student understand not just know what to do, but why they're
      doing it. From your first lesson through advanced training, the goal is to build strong
      fundamentals, sound decision-making, and a lasting passion for aviation.
    </p>
    <p>
      Whether you're taking your first flight or working toward your next certificate, let's take
      the next step together.
    </p>
  </div>
  <div class="home-paths">
    <h2>What I'm looking for</h2>
    <div class="teaser-links">
      <a href="/services" class="teaser-link">
        <p class="teaser-code">Services &amp; Pricing</p>
        <p class="teaser-desc">Instruction offered and what it costs.</p>
        <ArrowUpRight size={20} aria-hidden="true" />
      </a>
      <a href="/resources" class="teaser-link">
        <p class="teaser-code">Resources</p>
        <p class="teaser-desc">Study Guides, Checklists, and FAA Resources.</p>
        <ArrowUpRight size={20} aria-hidden="true" />
      </a>
      <a href="/contact" class="teaser-link">
        <p class="teaser-code">Contact</p>
        <p class="teaser-desc">Get in touch to schedule a lesson.</p>
        <ArrowUpRight size={20} aria-hidden="true" />
      </a>
    </div>
  </div>
</section>
