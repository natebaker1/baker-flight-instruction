<script lang="ts">
  let { heading = 360, tone = 'light' }: { heading?: number; tone?: 'light' | 'dark' } = $props();

  const PIXELS_PER_DEGREE = 4;
  const TICK_STEP = 5;
  const LABEL_STEP = 30;
  const FIRST_DEGREE = -540;
  const LAST_DEGREE = 900;
  const TAPE_HEIGHT = 40;
  const CARDINALS: Record<number, string> = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' };
  const MAX_POINTER_DRIFT = 48;
  const POINTER_FOLLOW_TIME_CONSTANT_MS = 600;
  const SETTLED_DISTANCE = 0.05;
  const POINTER_DRIFT_QUERY = '(hover: hover) and (prefers-reduced-motion: no-preference)';

  let pointerDrift = $state(0);

  $effect(() => {
    const pointerDriftAllowed = window.matchMedia(POINTER_DRIFT_QUERY);
    let targetDrift = 0;
    let followFrame: number | null = null;
    let previousFrameTime: number | null = null;

    function followTarget(frameTime: number) {
      const elapsed = frameTime - (previousFrameTime ?? frameTime);
      previousFrameTime = frameTime;
      const remaining = targetDrift - pointerDrift;
      if (Math.abs(remaining) < SETTLED_DISTANCE) {
        pointerDrift = targetDrift;
        followFrame = null;
        previousFrameTime = null;
        return;
      }
      const followFraction = 1 - Math.exp(-elapsed / POINTER_FOLLOW_TIME_CONSTANT_MS);
      pointerDrift += remaining * followFraction;
      followFrame = requestAnimationFrame(followTarget);
    }

    function setTarget(drift: number) {
      targetDrift = drift;
      followFrame ??= requestAnimationFrame(followTarget);
    }

    function driftAgainstPointer(event: PointerEvent) {
      if (!pointerDriftAllowed.matches) return;
      const pointerFromCenter = event.clientX / window.innerWidth - 0.5;
      setTarget(-pointerFromCenter * 2 * MAX_POINTER_DRIFT);
    }

    function recenter() {
      setTarget(0);
    }

    window.addEventListener('pointermove', driftAgainstPointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', recenter);
    return () => {
      window.removeEventListener('pointermove', driftAgainstPointer);
      document.documentElement.removeEventListener('pointerleave', recenter);
      if (followFrame !== null) cancelAnimationFrame(followFrame);
    };
  });

  const tapeWidth = (LAST_DEGREE - FIRST_DEGREE) * PIXELS_PER_DEGREE;
  const centerOffset = $derived((heading - FIRST_DEGREE) * PIXELS_PER_DEGREE);

  function normalize(degree: number) {
    return ((degree % 360) + 360) % 360;
  }

  function labelFor(degree: number) {
    const bearing = normalize(degree);
    return CARDINALS[bearing] ?? String(bearing / 10);
  }

  const ticks = Array.from({ length: (LAST_DEGREE - FIRST_DEGREE) / TICK_STEP + 1 }, (_, index) => {
    const degree = FIRST_DEGREE + index * TICK_STEP;
    const isLabel = degree % LABEL_STEP === 0;
    const isMajor = degree % 10 === 0;
    return {
      degree,
      x: (degree - FIRST_DEGREE) * PIXELS_PER_DEGREE,
      length: isLabel ? 12 : isMajor ? 8 : 5,
      label: isLabel ? labelFor(degree) : null,
      isCardinal: normalize(degree) in CARDINALS && isLabel
    };
  });
</script>

<div class="heading-tape" data-tone={tone} aria-hidden="true">
  <div class="heading-tape-track" style:--tape-drift="{pointerDrift}px">
    <svg
      class="heading-tape-scale"
      width={tapeWidth}
      height={TAPE_HEIGHT}
      viewBox="0 0 {tapeWidth} {TAPE_HEIGHT}"
      style:--tape-offset="{centerOffset}px"
    >
      {#each ticks as tick (tick.degree)}
        <line x1={tick.x} x2={tick.x} y1="0" y2={tick.length} class:major={tick.label} />
        {#if tick.label}
          <text x={tick.x} y="30" class:cardinal={tick.isCardinal}>{tick.label}</text>
        {/if}
      {/each}
    </svg>
  </div>
  <span class="heading-tape-lubber"></span>
</div>
