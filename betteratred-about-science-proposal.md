# red. — About & Science Pages — Revised Proposal
### Using Careers page architecture + 21st.dev bento patterns

---

> **Why careers, not manifesto:** The manifesto page is a wall of long-form text with a single animation. The careers page has genuine structural variety: a clean centered hero, a scrolling image carousel, navigable value cards with glass badges, dual-direction benefit marquees, and a positioned-list section. Almost all of that code maps directly onto what both the About and Science pages need — with almost nothing new to build.

---

# PART ONE: /about

## Section-by-Section Structure

```
Hero (CareersSection1)
  ↓
Origin Story — two-column: image | text  [new layout, simple]
  ↓
The Space — image carousel (CareersSection3 carousel, new images)
  ↓
Philosophy Pillars — navigable cards (CareersSection3 values, reskinned)
  ↓
Movement Classes — glass row list (CareersSection5 positions pattern)
  ↓
Instagram — InstagramCollage from StoriesSection
```

---

### HERO — adapt `CareersSection1`

**Zero structural changes.** Swap the text only.

```tsx
// CareersSection1 adapted:
<h1 className="title header1Title">
  We built the room we{' '}
  <span className="titleItalic header1TitleItalic">wished</span>{' '}
  existed.
</h1>
<p className="description header1Description">
  Zurich's first red light therapy studio. Science-backed,
  ritual-grounded, located at Seefeldstrasse 152.
</p>
<a href="#origin" className="link">Our story ↓</a>
```

The `CareersAnimations.tsx` GSAP sequence (char-by-char title reveal, description fade, link fade) runs identically. No animation changes.

---

### THE ORIGIN — new two-column section (simple)

**New layout** but minimal code — a single `<section>` with a CSS grid. Two columns: a portrait image left, text right. On mobile it stacks. No new dependencies.

```
┌─────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌────────────────────────┐   │
│  │              │  │  [label] Origin        │   │
│  │  [portrait   │  │                        │   │
│  │   photo of   │  │  The gap between the   │   │
│  │   the space] │  │  science and the       │   │
│  │              │  │  salon.                │   │
│  │              │  │                        │   │
│  │              │  │  [3–4 paragraphs]      │   │
│  └──────────────┘  └────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

**Image:** `hero-candidates/1_pod-portrait.jpg` — the pod interior portrait shot, already in `/public/media-assets/`.

**Copy:**

> Red light therapy has been peer-reviewed since the 1960s. NASA used it for wound healing in space. Olympic athletes have used it for recovery. Dermatologists have used it for collagen stimulation for decades.
>
> But finding somewhere in Zurich to actually do it — with clinical-grade panels, in a space that didn't feel like a tanning salon or a hospital corridor — wasn't possible.
>
> So we built one.
>
> red. opened at Seefeldstrasse 152, 8008 Zurich, with one intention: to give this city access to serious light therapy in a space that respects both the science and the person receiving it.

---

### THE SPACE — adapt `CareersSection3` image carousel

The `imagesCarousel` with its `carouselContent` / `carouselItem` structure and its auto-scrolling speed logic is already built and production-tested. **Swap the image array only.**

```tsx
// Was: CAROUSEL_IMAGES pointing to /images/careers/1.png etc.
// Becomes:
const CAROUSEL_IMAGES = [
  { src: '/media-assets/hero.webp',                       width: 1920, height: 1080 },
  { src: '/media-assets/hero-candidates/1_pod-portrait.jpg', width: 800, height: 1200 },
  { src: '/media-assets/red_light_therapy_bed_1.jpg',     width: 1920, height: 1080 },
  { src: '/media-assets/hero-candidates/3_light-on-face.jpg', width: 800, height: 1200 },
  { src: '/media-assets/691d99a8a3d14ffa7b2a9b96_20240709_Ayun_1314.jpg', width: 1200, height: 800 },
  { src: '/media-assets/hero-candidates/4_led-treatment.jpg', width: 800, height: 1200 },
  { src: '/media-assets/199-6_red-light-therapy-mito-light-5.jpg', width: 1200, height: 800 },
  { src: '/media-assets/hero-candidates/5_led-panel-beam.jpg', width: 800, height: 1200 },
];
```

The scroll speed, clone-for-seamless-loop logic, ResizeObserver recalculation — all untouched. Just images.

**Section header above carousel:**

```tsx
<p className="label">Seefeldstrasse 152 · Seefeld · Zurich</p>
<h2 className="title">
  The <span className="titleItalic">space.</span>
</h2>
```

---

### PHILOSOPHY PILLARS — adapt `CareersSection3` values cards

The `values` / `valuesWrapper` / `valuesNavigation` pattern (glass badge + body paragraphs + left/right arrow navigation) is a perfect container for red.'s brand pillars. **Swap the `VALUES` data array, keep every line of rendering and navigation code.**

```tsx
const VALUES = [
  {
    title: 'Technology is a tool. Ritual is the point.',
    descriptions: [
      'There are faster ways to recover. There are cheaper ways to work on your skin.',
      'We are not interested in being the fastest or cheapest. We are interested in building a practice — something you come back to not because you have to, but because you want to.',
      'Every session includes a guided mindfulness element. Not because it improves ATP production (though stillness probably helps). Because those eleven minutes of quiet might be the most important eleven minutes of your week.',
      'Biohacking without introspection is just hardware maintenance. We do both.',
    ],
  },
  {
    title: 'We tell you what the science actually says.',
    descriptions: [
      'The wellness industry is full of overclaiming. We are not interested in that.',
      'Red light therapy has fifty years of peer-reviewed research behind it. We will cite those studies. We will also tell you which applications still need more evidence.',
      'Our target audience can spot pseudoscience. We trust that, and we respect it.',
      'The science is strong enough on its own. It doesn\'t need embellishment.',
    ],
  },
  {
    title: 'The body needs both activation and restoration.',
    descriptions: [
      'The LED beds are the foundation. But red. is also a movement studio.',
      'Kundalini yoga. Ecstatic dance. Breathwork. Lymphatic drainage. Women\'s vitality flow.',
      'These are not ancillary — they\'re part of the same belief that recovery and activation are two sides of the same commitment.',
      'Red light handles the cellular layer. Movement handles the rest.',
    ],
  },
  {
    title: 'The person matters as much as the protocol.',
    descriptions: [
      'Our members are not one type of person.',
      'Some are competitive athletes managing recovery loads. Some are professionals who haven\'t slept properly in months. Some are women navigating hormonal transitions. Some came in curious and became regulars before they could explain why.',
      'What they share: they take their health seriously, they don\'t have time for things that don\'t work, and they\'d rather have evidence than enthusiasm.',
      'We have both.',
    ],
  },
];
```

The left/right arrow navigation, glass badge rendering, and the `data-card-index` attribute pattern — all kept exactly as-is.

---

### MOVEMENT CLASSES — adapt `CareersSection5` positions list

The `positionsItem` / `positionsLink` / `glass positionRow` pattern from CareersSection5 is a clean, minimal row list. **Rename it to class rows, keep the glass tile and arrow pattern.**

```tsx
const CLASSES = [
  { name: 'Kundalini Yoga',        schedule: 'Mon / Thu',  spots: 'Small group' },
  { name: 'Breathwork',            schedule: 'Wed',         spots: 'Small group' },
  { name: 'Ecstatic Dance',        schedule: 'Fri',         spots: 'Open floor'  },
  { name: 'Lymphatic Drainage',    schedule: 'Tue / Sat',   spots: 'Small group' },
  { name: "Women's Vitality Flow", schedule: 'Sun',         spots: 'Small group' },
];
```

Each renders as a `glass positionRow` with three spans (name / schedule / spots) + the arrow. Clicking links to `/sessions#classes` or a booking modal.

**Section headline:**
```tsx
<h2 className="subtitle">
  We also <span className="subtitleItalic">move.</span>
</h2>
<p className="description">
  Classes are kept small. The teaching is serious.
  Book any class with a session credit or as a standalone.
</p>
```

---

### INSTAGRAM — reuse `InstagramCollage`

Import the `InstagramCollage` component from `StoriesSection`. It's already built. Update the account handle to `@rbetter.at.red` and drop it at the bottom of the page with a label:

```tsx
<p className="label">@rbetter.at.red</p>
<h2 className="subtitle">
  Follow the <span className="subtitleItalic">glow.</span>
</h2>
<InstagramCollage />
```

---
---

# PART TWO: /science

## The Right Reference: Careers Section 4

The science page's centrepiece should be the **CareersSection4 dual benefit marquee pattern** — but for science topics, not perks. And its deep sections should use the **CareersSection3 values card navigation** for the evidence blocks. Plus one new thing: a bento grid for the wavelengths.

```
Hero (CareersSection1 style)
  ↓
The Mechanism — two-column: text | animated SVG diagram  [new, small]
  ↓
The Wavelengths — 3-cell Bento Grid  [new component from 21st.dev pattern]
  ↓
Benefits Marquee — dual direction (CareersSection4 marquee, science topics)
  ↓
The Evidence — navigable cards (CareersSection3 values pattern)
  ↓
How red. Does It Differently — full-width text + feature split
  ↓
Closing CTA
```

---

### HERO — adapt `CareersSection1`

```tsx
<h1 className="title">
  Your mitochondria have been{' '}
  <span className="titleItalic">waiting</span>{' '}
  for this.
</h1>
<p className="description">
  Photobiomodulation. Fifty years of peer-reviewed research.
  Eleven minutes of light. This is what happens inside your cells.
</p>
<a href="#mechanism" className="link">The science ↓</a>
```

---

### THE MECHANISM — new two-column section

Same two-column layout pattern as About's Origin section. **Text left, diagram right.**

**Text:**

> **It starts with an enzyme you've never heard of.**
>
> Deep inside every cell in your body, there is a protein complex called cytochrome c oxidase — CCO, if you want to sound like you work at CERN.
>
> CCO is the final step in your mitochondria's electron transport chain: the machine that converts oxygen into the cellular energy your body runs on, called ATP.
>
> Here is the interesting part: CCO has a direct optical response to specific wavelengths of red and near-infrared light. When those wavelengths land on it, the enzyme absorbs the photons and changes its electrochemical state. The result: mitochondria produce more ATP, cells become more energetically active, and a cascade of secondary effects unfolds — reduced oxidative stress, increased nitric oxide, activation of tissue-repair pathways.
>
> This is not a theory. It has been replicated in peer-reviewed research for over fifty years.

**Right side — `ATPDiagram` SVG component:**

A minimal animated SVG illustration. Four labelled nodes connected by arrows, animating sequentially on scroll-enter:

```
  [Photon] → [CCO absorbs] → [ATP produced] → [Repair cascade]
    630–850nm    electron          mitochondria    collagen / recovery /
                 transport         energised       inflammation resolution
```

Drawn in warm off-white lines with the accent red used for the photon node. SVG path `stroke-dashoffset` animation triggered by IntersectionObserver (same pattern as existing `intersection-observer.ts` in the lib). No new animation library needed.

---

### THE WAVELENGTHS — Bento Grid (new, ~60 lines of TSX)

Three cells. Spans: `col-span-2 / col-span-2 / col-span-2` on desktop (equal thirds), full-width stacked on mobile. Pattern from the **Aceternity bento grid** on 21st.dev — icon + title + description + depth indicator — adapted to the dark theme and red accent colours.

```
┌──────────────┬──────────────┬──────────────┐
│  630nm       │  660nm       │  850nm       │
│  ━━━━━━━━━   │  ━━━━━━━━━   │  ━━━━━━━━━   │
│  [red bar]   │  [deep red]  │  [near-IR]   │
│              │              │              │
│  Visible red │  Deep red    │  Near-        │
│  light.      │  light.      │  infrared.   │
│              │              │              │
│  Works at    │  Reaches the │  Passes      │
│  the skin    │  dermis and  │  through     │
│  surface:    │  upper       │  skin        │
│  fibroblast  │  muscle      │  entirely:   │
│  activation, │  layers.     │  50mm into   │
│  collagen,   │  Anti-       │  muscle and  │
│  tone.       │  inflammatory│  joint.      │
│              │  signalling. │              │
│  [depth: 2mm]│  [depth:10mm]│ [depth: 50mm]│
└──────────────┴──────────────┴──────────────┘
```

Each cell has:
- Wavelength label in Bradford italic, large, the brand red colour
- A thin horizontal bar coloured to match the wavelength (visible red → near-IR)
- Descriptive name
- Body text
- Depth indicator as a glass badge at the bottom: `2mm depth`, `10mm depth`, `50mm depth`
- Hover: subtle radial glow from bottom-center, `box-shadow: 0 0 40px rgba(200,57,43,0.15)`

```tsx
const WAVELENGTHS = [
  {
    nm: '630nm',
    name: 'Visible Red',
    color: '#E84B3A',
    depth: '~2mm',
    body: 'Activates fibroblasts at the skin surface. Stimulates collagen synthesis, improves tone, and reduces superficial inflammation.',
  },
  {
    nm: '660nm',
    name: 'Deep Red',
    color: '#C8392B',
    depth: '~10mm',
    body: 'Reaches the upper dermis and muscle layer. Drives the core anti-inflammatory signalling cascade. The workhorse wavelength.',
  },
  {
    nm: '850nm',
    name: 'Near-Infrared',
    color: '#8B1A10',
    depth: '~50mm',
    body: 'Invisible to the eye. Passes through tissue entirely — reaching deep muscle, joint, lymph, and nerve. The recovery wavelength.',
  },
];
```

**Note on the "gap zone":** A small footnote below the bento:

```tsx
<p className="description" style={{ maxWidth: 520, textAlign: 'center', margin: '2rem auto 0' }}>
  The 700–770nm range? Research calls it the "gap zone" — photons here don't bind efficiently to any meaningful chromophore. Most consumer panels are in this range. Most people don't know that.
</p>
```

---

### BENEFITS MARQUEE — adapt `CareersSection4`

The dual-direction `benefitsMarquee1` / `benefitsMarquee2` marquee with `benefitContainer` / `glass benefit` tiles is **exactly right for science benefits**. Keep every line of the marquee animation logic. Swap the `BENEFITS` data:

```tsx
const BENEFITS = [
  { title: 'Collagen production',     icon: <SkinIcon /> },
  { title: 'Muscle recovery',         icon: <MuscleIcon /> },
  { title: 'Sleep quality',           icon: <MoonIcon /> },
  { title: 'Inflammation reduction',  icon: <FlameIcon /> },
  { title: 'ATP energy output',       icon: <BoltIcon /> },
  { title: 'Hormonal balance',        icon: <CycleIcon /> },
  { title: 'Cognitive clarity',       icon: <BrainIcon /> },
  { title: 'Skin tone & texture',     icon: <GlowIcon /> },
  { title: 'Joint mobility',          icon: <JointIcon /> },
  { title: 'Lymphatic drainage',      icon: <FlowIcon /> },
  { title: 'Mood regulation',         icon: <SunIcon /> },
  { title: 'Performance recovery',    icon: <SprintIcon /> },
];
```

All SVG icons are inline (same pattern as CareersSection4's existing SVG icons — no icon library import needed). Marquee 1 scrolls right, Marquee 2 scrolls left — exactly as built.

**Section headline:**
```tsx
<h2 className="subtitle">
  What light does{' '}
  <span className="subtitleItalic">to your body.</span>
</h2>
<p className="description">
  One session. Twelve concurrent biological effects.
  Here are the ones with the strongest evidence.
</p>
```

---

### THE EVIDENCE — adapt `CareersSection3` values cards

The navigable cards with glass badge + body paragraphs are ideal for per-topic evidence summaries. One card per evidence area. Left/right arrow navigation — same code, same CSS.

```tsx
const EVIDENCE = [
  {
    title: 'Skin & Collagen',
    descriptions: [
      'Controlled clinical trials show that red and near-infrared light treatment increases intradermal collagen density and reduces fine lines. The mechanism is direct: photons activate fibroblast cells — the factories that produce collagen.',
      'A 2014 blinded trial in Photomedicine and Laser Surgery showed statistically significant improvement in collagen density after twice-weekly sessions. Not after months — within weeks.',
      'Most clinical studies use 10–12 minutes per session, twice a week, across 4–12 weeks. Our 11-minute protocol is exactly in this window.',
      'This is the most robustly evidenced application of photobiomodulation. Stanford Medicine, dermatology journals, and independent researchers all converge here.',
    ],
  },
  {
    title: 'Inflammation & Recovery',
    descriptions: [
      'PBM operates on inflammation at multiple levels simultaneously. Photons absorbed by CCO trigger a brief, controlled burst of reactive oxygen species — not damaging, but signalling.',
      'This activates NF-κB — a transcription factor that in healthy tissue promotes repair. In already-inflamed tissue, the same pathway paradoxically reduces pro-inflammatory cytokines: TNF-α, interleukin-1β, prostaglandins.',
      'Animal studies document reduced inflammatory markers (TNF-α, IL-1β) and decreased M1 macrophage markers. Human trials show clinical improvements in arthritis, muscle recovery, and autoimmune thyroiditis.',
      'Elite athletes have used this for decades. They didn\'t wait for the wellness industry to catch up.',
    ],
  },
  {
    title: 'Brain & Cognition',
    descriptions: [
      'Near-infrared wavelengths cross the blood-brain barrier. This is not a claim — it is documented physics. The skull attenuates but does not block 850nm light.',
      'A 2024 randomised controlled trial (PMC12689328) documented significant improvements in cognitive function and neuropsychiatric symptoms in post-stroke patients treated with 630nm red light.',
      'The mechanism: PBM activates enzymes involved in formaldehyde metabolism. Formaldehyde is a metabolic byproduct that accumulates with cognitive stress and impairs neuronal function.',
      'Sleep research suggests red-wavelength light in the evening supports melatonin production by minimising blue-spectrum disruption of circadian rhythms.',
    ],
  },
  {
    title: 'Hormonal Support',
    descriptions: [
      'The hormonal applications of PBM are among the more intriguing and less-publicised areas of research.',
      'Several studies have examined effects on testosterone and thyroid function. The mechanism appears to involve mitochondrial activation in endocrine tissue — the same CCO pathway, different organ.',
      'A study on autoimmune thyroiditis showed reduced inflammatory antibody levels after PBM treatment — a meaningful result for a condition where options are limited.',
      'We include this category with appropriate honesty: the evidence is promising, not definitive. More studies are in progress. We\'ll update this page as the literature develops.',
    ],
  },
];
```

---

### HOW red. DOES IT DIFFERENTLY — full-width section

A simpler section: full-width, centred headline, then a two-column feature split below.

**Headline:**
```tsx
<h2 className="subtitle">
  The studio, not{' '}
  <span className="subtitleItalic">the device.</span>
</h2>
<p className="description">
  Consumer red light panels output 20–100mW/cm² at a single wavelength,
  positioned 15–30cm from one side of your body. That is not what we do.
</p>
```

**Below: two feature tiles** (simple `glass` cards, two per row on desktop):

```
┌────────────────────────┬────────────────────────┐
│  Above + Below         │  Calibrated dose        │
│                        │                         │
│  Both surfaces active  │  Enough light to        │
│  simultaneously.       │  stimulate. Not so      │
│  630, 660, and 850nm   │  much that it           │
│  delivered to your     │  inhibits. The          │
│  full body — front,    │  biphasic dose          │
│  back, simultaneously. │  response, respected.   │
└────────────────────────┴────────────────────────┘
┌────────────────────────┬────────────────────────┐
│  Clinical-grade output │  Mindfulness Menu       │
│                        │                         │
│  Not a consumer panel. │  A guided audio         │
│  Not a tanning bed.    │  sequence developed     │
│  Full-body clinical    │  specifically for the   │
│  LED panels with the   │  duration of your       │
│  therapeutic fluence   │  session. Eleven        │
│  range of published    │  minutes of light.      │
│  studies.              │  Eleven of quiet.       │
└────────────────────────┴────────────────────────┘
```

Each tile is a `<div className="glass">` with a label badge, title, and body. Simple grid. No new component pattern needed.

---

### CLOSING CTA — adapt `CareersSection5` footer

The section5Footer pattern (italic headline + description + contact link) is perfect as a closing CTA:

```tsx
<h3 className="subtitle">
  <span className="titleItalic">Fifty years</span>{' '}
  of research. Eleven minutes to feel it.
</h3>
<p className="description">
  Sessions from CHF 33. The science is real. The experience,
  however, you have to come in for.
</p>
<Link href="/book" className="btn-component btn-default button-md">
  <span className="btn-title">Book a session</span>
  ...arrow...
</Link>
<a href="#" className="link" style={{ marginTop: '1rem' }}>
  View the research →
</a>
```

---

## New Components to Build: Count & Scope

| Component | Lines of code | Based on |
|---|---|---|
| `ATPDiagram.tsx` | ~80 lines | Inline SVG + IntersectionObserver (lib already exists) |
| `WavelengthBento.tsx` | ~60 lines | Aceternity bento pattern from 21st.dev |
| `AboutOriginSection.tsx` | ~30 lines | CSS grid two-column, no dependencies |

Everything else adapts existing careers/stories components with data swaps. **Total new TSX: ~170 lines.**

---

## Implementation Order

### /about (start here — simpler)
1. `src/app/about/page.tsx` — scaffold the page, import adapted careers sections
2. `AboutSection1.tsx` — hero copy (5 min)
3. `AboutOriginSection.tsx` — new two-column image+text (30 min)
4. `AboutSpaceCarousel.tsx` — CareersSection3 carousel, new image array (20 min)
5. `AboutPhilosophyCards.tsx` — CareersSection3 values, new VALUES data (20 min)
6. `AboutClassesList.tsx` — CareersSection5 pattern, new CLASSES data (20 min)
7. `AboutInstagram.tsx` — InstagramCollage import + label (10 min)

### /science (second — needs the two new components)
1. `src/app/science/page.tsx` — scaffold
2. `ScienceSection1.tsx` — hero copy (5 min)
3. `ScienceMechanism.tsx` — two-column text + ATPDiagram (1.5 hrs incl. SVG)
4. `WavelengthBento.tsx` — bento grid, new component (1 hr)
5. `ScienceBenefitsMarquee.tsx` — CareersSection4 marquee, new BENEFITS data (30 min)
6. `ScienceEvidenceCards.tsx` — CareersSection3 values, new EVIDENCE data (20 min)
7. `ScienceDifferently.tsx` — full-width section + four glass tiles (30 min)
8. `ScienceClosingCTA.tsx` — CareersSection5 footer pattern (15 min)

**Total estimated time: ~1 day for both pages, including the two genuinely new components.**
