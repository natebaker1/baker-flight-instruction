<script lang="ts">
  import { Badge } from '#lib/components/ui/badge/index.js';
  import Seo from '#lib/components/Seo.svelte';
  import PageHeader from '#lib/components/PageHeader.svelte';
  import ServiceItem from '#lib/components/ServiceItem.svelte';
  import * as Accordion from '#lib/components/ui/accordion/index.js';
</script>

<Seo
  title="Services & Pricing — Baker Flight Instruction"
  description="Explore flight instruction, ground instruction, discovery flights, flight reviews, and instrument proficiency checks. Contract instructor rate: $50 per hour."
/>

<PageHeader
  title="Services Offered"
  description="Tap a service to see what's included and the rate. Contract instructor rates are listed. Aircraft rentals will vary based on aircraft and location."
/>

<div class="content-column">
  <section class="panel">
    <Accordion.Root type="multiple" class="service-list">
      <ServiceItem code="FLT" name="Flight Instruction">
        <p>In-airplane training to build real world skills, confidence, and safety.</p>
        <ul class="sub-cert-list">
          <li>
            <Badge variant="secondary" class="cert-code">PPL</Badge>
            <span class="sub-cert-name">Private Pilot License</span>
          </li>
          <li>
            <Badge variant="secondary" class="cert-code">IR</Badge>
            <span class="sub-cert-name">Instrument Rating</span>
          </li>
          <li>
            <Badge variant="secondary" class="cert-code">CPL</Badge>
            <span class="sub-cert-name">Commercial Pilot License</span>
          </li>
          <li>
            <Badge variant="secondary" class="cert-code">CFI</Badge>
            <span class="sub-cert-name">Flight Instructor</span>
          </li>
        </ul>
        <p class="service-price">Instructor Rate: $50/hr</p>
      </ServiceItem>

      <ServiceItem code="GRD" name="Ground Instruction">
        <p>
          Written test prep, regulations, and systems knowledge. All on the ground, no aircraft
          required.
        </p>
        <ul class="sub-cert-list">
          <li>
            <Badge variant="secondary" class="cert-code">WRT</Badge>
            <span class="sub-cert-name">Written Test Prep</span>
          </li>
          <li>
            <Badge variant="secondary" class="cert-code">RTG</Badge>
            <span class="sub-cert-name">Rating Specific Ground Training</span>
          </li>
          <li>
            <Badge variant="secondary" class="cert-code">ONL</Badge>
            <span class="sub-cert-name">Online Ground Instruction</span>
          </li>
          <li>
            <Badge variant="secondary" class="cert-code">FOI</Badge>
            <span class="sub-cert-name">Fundamentals of Instruction</span>
          </li>
        </ul>
        <p class="service-price">Instructor Rate: $50/hr</p>
      </ServiceItem>

      <ServiceItem code="DSC" name="Discovery Flights">
        <p>
          A first flight lesson for new students - get a feel for the controls and see if flying is
          for you.
        </p>
        <p class="service-price">Instructor Rate: $50/hr</p>
      </ServiceItem>

      <ServiceItem code="FR" name="Flight Review">
        <p>Biennial flight review to keep your certificate current.</p>
        <p class="service-price">Instructor Rate: $50/hr</p>
      </ServiceItem>

      <ServiceItem code="IPC" name="Instrument Proficiency Check">
        <p>Instrument proficiency check to keep your IFR currency up to date.</p>
        <p class="service-price">Instructor Rate: $50/hr</p>
      </ServiceItem>
    </Accordion.Root>
  </section>

  <section class="panel">
    <div class="panel-heading"><h2>Lesson Policies</h2></div>
    <div class="location-body">
      <p>
        See <i>Terms of Service</i> for more details.
      </p>
      <ul class="cert-list">
        <li>
          <Badge variant="secondary" class="cert-code">CXL</Badge>
          <div>
            <p class="cert-name">Cancellation Policy</p>
            <p class="cert-meta">Cancel at least 24 hours ahead to avoid a fee.</p>
          </div>
        </li>
        <li>
          <Badge variant="secondary" class="cert-code">WX</Badge>
          <div>
            <p class="cert-name">Weather Policy</p>
            <p class="cert-meta">Lessons cancelled due to weather are rescheduled at no charge.</p>
          </div>
        </li>
        <li>
          <Badge variant="secondary" class="cert-code">PAY</Badge>
          <div>
            <p class="cert-name">Payment Policy</p>
            <p class="cert-meta">Payment is due at the end of each lesson.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
