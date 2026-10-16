<script lang="ts">
  import { Badge } from '#lib/components/ui/badge/index.js';
  import Seo from '#lib/components/Seo.svelte';
  import PageHeader from '#lib/components/PageHeader.svelte';
</script>

<Seo
  title="Resources — Baker Flight Instruction"
  description="Find flight training resources, FAA publications, aviation weather tools, and sectional charts recommended by Baker Flight Instruction."
/>

<PageHeader
  title="Training Resources"
  description="Recommended references, tools, and study material for every stage of training."
/>

<div class="content-column">
  <section class="panel">
    <div class="panel-heading"><h2>Study &amp; Test Prep</h2></div>
    <ul class="cert-list">
      <li>
        <Badge variant="secondary" class="cert-code">FAA</Badge>
        <div>
          <p class="cert-name">
            <a href="https://www.faraim.org" target="_blank" rel="noopener">FARAIM.org</a>
          </p>
          <p class="cert-meta">Regulations, advisory circulars, and official guidance</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">AIM</Badge>
        <div>
          <p class="cert-name">
            <a
              href="https://www.faa.gov/air_traffic/publications/atpubs/aim_html"
              target="_blank"
              rel="noopener">Aeronautical Information Manual</a
            >
          </p>
          <p class="cert-meta">Procedures and airspace reference</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">AOPA</Badge>
        <div>
          <p class="cert-name">
            <a href="https://www.aopa.org/training-and-safety" target="_blank" rel="noopener"
              >AOPA Flight Training</a
            >
          </p>
          <p class="cert-meta">Articles, quizzes, and safety courses for students</p>
        </div>
      </li>
    </ul>
  </section>

  <section class="panel">
    <div class="panel-heading"><h2>Tools and References</h2></div>
    <ul class="cert-list">
      <li>
        <Badge variant="secondary" class="cert-code">WX</Badge>
        <div>
          <p class="cert-name">
            <a href="https://www.aviationweather.gov" target="_blank" rel="noopener"
              >Aviation Weather Center</a
            >
          </p>
          <p class="cert-meta">METARs, TAFs, and weather briefing tools</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">PHAK</Badge>
        <div>
          <p class="cert-name">
            <a
              href="https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak"
              target="_blank"
              rel="noopener">Pilot's Handbook of Aeronautical Knowledge</a
            >
          </p>
          <p class="cert-meta">The FAA’s core textbook for aeronautical knowledge</p>
        </div>
      </li>
      <li>
        <Badge variant="secondary" class="cert-code">SKY</Badge>
        <div>
          <p class="cert-name">
            <a href="https://skyvector.com" target="_blank" rel="noopener">SkyVector</a>
          </p>
          <p class="cert-meta">Free online sectional charts and flight planning</p>
        </div>
      </li>
    </ul>
  </section>
</div>
