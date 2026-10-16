<script lang="ts">
  import { Badge } from '#lib/components/ui/badge/index.js';
  import Seo from '#lib/components/Seo.svelte';
  import PageHeader from '#lib/components/PageHeader.svelte';
</script>

<Seo
  title="About Me — Baker Flight Instruction"
  description="Meet Nate Baker, a flight instructor based in North Texas. Learn about his aviation background, certificates, ratings, and nearby airports."
/>

<PageHeader
  title="About Me"
  description="A North Texas flight instructor who loves to fly, and loves to teach."
/>

<section class="about-story" aria-label="About Nate Baker">
  <div class="shell about-story-grid">
    <figure class="about-portrait">
      <img
        src="/images/nate-aircraft.webp"
        alt="Nate Baker standing beside a Piper training aircraft"
        class="about-photo"
        width="1200"
        height="1600"
        loading="lazy"
      />
      <figcaption>
        <span class="data-label">Nate Baker</span>
        <span class="data-label">CFI · CFII</span>
      </figcaption>
    </figure>

    <div class="about-copy">
      <p class="about-opening">I am passionate about aviation and love to fly!</p>

      <p>
        I have always been interested in flying. I grew up hearing stories from family, with a
        passion for adventure. In 2023 I decided to pursue a professional career as a pilot.
      </p>

      <p>
        I began my aviation journey through a Part 141 flight school program, earning my Private,
        Instrument, Commercial, Multi-Engine, CFI, and CFII certificates and ratings. My training
        taught me the importance of preparation, discipline, sound decision-making, and a high
        standard of safety on every flight.
      </p>

      <p>
        Today, I have the privilege of sharing what I’ve learned with others. I believe great flight
        instruction goes beyond teaching someone how to control the aircraft. It is about developing
        good judgment, building confidence, and understanding the why behind each decision. I
        prepare students to operate safely and independently.
      </p>
    </div>
  </div>
</section>

<div class="content-column">
  <section class="panel" id="qualifications">
    <div class="panel-heading"><h2>Certificates and Ratings</h2></div>
    <ul class="cert-list">
      <li>
        <Badge variant="secondary" class="cert-code">CPL</Badge>
        <div>
          <p class="cert-name">Commercial Pilot</p>
          <p class="cert-meta">Airplane Single Engine Land / Airplane Multi-Engine Land</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">IR</Badge>
        <div>
          <p class="cert-name">Instrument Rating</p>
          <p class="cert-meta">Airplane Single Engine Land / Airplane Multi-Engine Land</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">CFI</Badge>
        <div>
          <p class="cert-name">Certified Flight Instructor</p>
          <p class="cert-meta">Airplane Single Engine Land</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">CFII</Badge>
        <div>
          <p class="cert-name">Certified Flight Instructor — Instrument</p>
          <p class="cert-meta">Airplane Single Engine Land</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">RPC</Badge>
        <div>
          <p class="cert-name">Remote Pilot Certificate (Part 107)</p>
        </div>
      </li>
    </ul>
  </section>

  <section class="panel panel-split" id="location">
    <div class="panel-heading"><h2>Based in North Texas</h2></div>
    <div class="location-body">
      <p>
        Within easy reach of most airports in North Texas. I will travel to an airport near you for
        your lessons.
      </p>
      <div class="coord-strip">
        <div>
          <p class="data-label">Base</p>
          <p class="coord-value">Dallas-Fort Worth, TX</p>
        </div>
        <div>
          <p class="data-label">Nearest fields</p>
          <p class="coord-value">KDTO / KFTW</p>
        </div>
        <div>
          <p class="data-label">LinkedIn</p>
          <p class="coord-value">
            <a href="https://www.linkedin.com/in/nate-baker-cfii" target="_blank" rel="noopener"
              >nate-baker-cfii</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
