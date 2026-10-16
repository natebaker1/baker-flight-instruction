<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import HeadingTape from '#lib/components/HeadingTape.svelte';
  import { Badge } from '#lib/components/ui/badge/index.js';
  import { Button } from '#lib/components/ui/button/index.js';
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import ArrowRight from '@lucide/svelte/icons/arrow-right';

  const trainingOptions = [
    {
      code: 'FLT',
      name: 'Flight instruction',
      detail: 'Private, Instrument, Commercial, and CFI training in the airplane.'
    },
    {
      code: 'GRD',
      name: 'Ground instruction',
      detail: 'Written test prep, rating-specific ground, and online sessions.'
    },
    {
      code: 'DSC',
      name: 'Discovery flight',
      detail: 'Your first lesson. Take the controls and see if flying is for you.'
    },
    { code: 'FR', name: 'Flight review', detail: 'Biennial flight review to stay current.' },
    {
      code: 'IPC',
      name: 'Instrument proficiency check',
      detail: 'Keep your IFR currency up to date.'
    }
  ];

  const instructorCertificates = ['CPL', 'IR', 'CFI', 'CFII', 'RPC'];
</script>

<Seo
  title="Baker Flight Instruction"
  description="Personalized contract flight instruction with Nate Baker in Dallas-Fort Worth and North Texas. Explore training, instructor rates, and aviation resources."
/>

<section class="hero" id="home">
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>Baker Flight Instruction</h1>
      <p class="hero-tagline">Learn to fly with confidence.</p>
      <p class="hero-intro">
        Personalized contract flight instruction across Dallas–Fort Worth, from your first lesson
        through advanced ratings.
      </p>
      <div class="hero-actions">
        <Button href="/contact" class="btn-primary">
          Schedule a lesson <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
        <Button variant="link" class="text-link" href="/services">
          Services &amp; pricing <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
      <dl class="hero-facts">
        <div>
          <dt class="data-label">Instructor rate</dt>
          <dd>$50/hr</dd>
        </div>
        <div>
          <dt class="data-label">Nearest fields</dt>
          <dd>KDTO · KFTW</dd>
        </div>
        <div>
          <dt class="data-label">Instructor</dt>
          <dd>CFI · CFII</dd>
        </div>
      </dl>
    </div>
    <figure class="hero-photo">
      <img
        src="/images/aircraft-sunrise.webp"
        alt="Training aircraft on the ramp at sunrise"
        width="1179"
        height="1319"
        fetchpriority="high"
      />
      <figcaption>
        <span class="data-label">North Texas</span>
        <span class="data-label">Dallas–Fort Worth</span>
      </figcaption>
    </figure>
  </div>
  <div class="hero-tape"><HeadingTape /></div>
</section>

<section class="home-section" aria-labelledby="philosophy-heading">
  <div class="shell split">
    <h2 id="philosophy-heading">Training philosophy</h2>
    <div>
      <p class="statement-lede">
        Flight training is more than learning to fly an aircraft. It is about becoming a <em
          >safe and capable pilot.</em
        >
      </p>
      <p class="statement-body">
        Every lesson is built to help you understand not just what to do, but why you are doing it.
        From your first lesson through advanced training, the goal is strong fundamentals, sound
        decision-making, and a lasting passion for aviation.
      </p>
    </div>
  </div>
</section>

<section class="home-section training-band" aria-labelledby="training-heading">
  <div class="shell split">
    <div>
      <h2 id="training-heading">Training</h2>
      <p class="section-intro">
        One straightforward instructor rate. Aircraft rental varies by aircraft and location.
      </p>
      <Button variant="link" class="text-link" href="/services">
        Full service details <ArrowRight size={16} aria-hidden="true" />
      </Button>
    </div>
    <div>
      <ul class="rate-card">
        {#each trainingOptions as option (option.code)}
          <li>
            <Badge variant="secondary" class="cert-code">{option.code}</Badge>
            <span class="rate-name">{option.name}</span>
            <span class="rate-value">$50/hr</span>
            <span class="rate-desc">{option.detail}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<section class="home-section" aria-labelledby="instructor-heading">
  <div class="shell split">
    <figure class="instructor-photo">
      <img
        src="/images/nate-aircraft.webp"
        alt="Nate Baker standing beside a Piper training aircraft"
        width="1200"
        height="1600"
        loading="lazy"
      />
      <figcaption>
        <span class="data-label">Nate Baker</span>
        <span class="data-label">CFI · CFII</span>
      </figcaption>
    </figure>
    <div class="instructor-copy">
      <h2 id="instructor-heading">Your instructor</h2>
      <p class="instructor-quote">
        Great instruction goes beyond controlling the aircraft. It builds judgment, confidence, and
        an understanding of the why behind every decision.
      </p>
      <p>
        Nate trained through a Part 141 program, earning his Private, Instrument, Commercial,
        Multi-Engine, CFI, and CFII certificates and ratings. He now teaches students across North
        Texas to operate safely and independently.
      </p>
      <ul class="tag-row" aria-label="Certificates and ratings">
        {#each instructorCertificates as certificate (certificate)}
          <li><Badge variant="secondary" class="cert-code">{certificate}</Badge></li>
        {/each}
      </ul>
      <Button variant="link" class="text-link" href="/about">
        More about Nate <ArrowRight size={16} aria-hidden="true" />
      </Button>
    </div>
  </div>
</section>

<section class="home-section closing" aria-labelledby="closing-heading">
  <div class="shell closing-inner">
    <h2 id="closing-heading">Let's take the next step together.</h2>
    <div>
      <p>
        Whether you are taking your first flight or working toward your next certificate, reach out
        and we will plan your training.
      </p>
      <div class="hero-actions">
        <Button href="/contact" class="btn-primary">
          Get in touch <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
        <Button variant="link" class="text-link" href="/resources">
          Training resources <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </div>
  </div>
</section>
