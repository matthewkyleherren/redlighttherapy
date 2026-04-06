# red. — About & Science Pages Proposal
### Component mapping, copy, and structure

---

# PART ONE: /about

## What page this replaces
The Sequel `/manifesto` page — same file structure, same GSAP char-by-char hero animation, same `manifestoSection` / `manifestoCta` component pattern. Zero structural rebuilding. The manifesto format is *exactly* what an About page for a luxury wellness brand should feel like: editorial, unhurried, confident.

## Existing components used as-is
- `ManifestoAnimations.tsx` — the GSAP SplitText hero reveal stays entirely. It's one of the most impressive things on the site.
- The `manifestoHero`, `manifestoSection`, `manifestoCta` CSS classes
- `Header` and `Footer`

## New components needed
- `InstagramGrid` — a lightweight version of `InstagramCollage`, reused from the stories page, for the bottom of About to pull in `@rbetter.at.red` posts. Already built, just needs the account URL updated.

---

## About Page: Full Copy & Structure

### Route: `/about`
### Page `<title>`: `About red. — Zurich's first red light therapy studio`

---

**Hero Section**

```
Badge:    "About red."

Headline: "We built the room
           we wished existed."

           [italic treatment on "wished"]
```

The GSAP char-by-char blur-in animation plays on the headline. Identical to the current manifesto hero. Devastating in the best way.

---

**Section 1: The Origin**
*`manifestoSectionTitle`*: The gap between the science and the salon.

*`manifestoSectionBody`*:

> Red light therapy has been peer-reviewed since the 1960s.
>
> NASA used it for wound healing in space. Olympic athletes have used it for recovery. Dermatologists have used it for collagen stimulation for decades.
>
> But finding somewhere in Zurich to actually do it — properly, with clinical-grade panels, in a space that didn't feel like a tanning salon or a hospital corridor — wasn't possible.
>
> So we built one.
>
> red. opened at Seefeldstrasse 152, 8008 Zurich, with one intention: to give this city somewhere to access serious light therapy in a space that respects both the science and the person receiving it.

---

**Section 2: The Philosophy**
*`manifestoSectionTitle`*: Technology is a tool. Ritual is the point.

*`manifestoSectionBody`*:

> There are faster ways to recover.
>
> There are cheaper ways to work on your skin.
>
> We are not interested in being the fastest or the cheapest. We are interested in building a practice — something people come back to not because they have to, but because they want to.
>
> Every session at red. includes a guided mindfulness element. Not because it improves ATP production (though stillness probably helps). Because the eleven minutes of silence inside the bed might be the most important eleven minutes of your week.
>
> Biohacking without introspection is just hardware maintenance.
>
> We do both.

---

**Section 3: The Space**
*`manifestoSectionTitle`*: Seefeldstrasse 152.

*`manifestoSectionBody`*:

> Seefeld is Zurich's most quietly confident neighbourhood.
>
> Not the loudest. Not the flashiest. But the one locals know.
>
> The studio was designed to subtract. Dark walls. Warm light. Nothing you don't need. You'll find the health bar by the door — a small, considered selection of drinks and supplements curated for what comes before and after a session. You'll find the treatment rooms beyond it.
>
> You will not find bright overhead lighting, generic wellness music, or anything that smells like a gym.
>
> You'll find the one thing that's hard to find in a city: somewhere to be completely still.

---

**Section 4: The Movement Practice**
*`manifestoSectionTitle`*: We also move.

*`manifestoSectionBody`*:

> The LED beds are the foundation. But red. is also a movement studio.
>
> Kundalini yoga. Ecstatic dance. Breathwork. Lymphatic drainage. Women's vitality flow.
>
> These are not ancillary — they're part of the same belief that the body needs both activation and restoration. Red light handles the cellular layer. Movement handles the rest.
>
> Classes are kept small. The teaching is serious.

---

**Section 5: Who We're For**
*`manifestoSectionTitle`*: Athletes. Insomniacs. Sceptics. Regulars.

*`manifestoSectionBody`*:

> Our members are not one type of person.
>
> Some are competitive athletes using red light for recovery. Some are professionals who haven't slept properly in months. Some are women navigating hormonal transitions who found that twice-weekly sessions changed the quality of their experience. Some came in curious and became regulars before they could explain why.
>
> What they have in common: they take their health seriously, they don't have time for things that don't work, and they'd rather have evidence than enthusiasm.
>
> We have both.

---

**Closing CTA (`manifestoCta`)**:

```
Headline:    "Eleven minutes.
              Twice a week.
              See what happens."
              [italic: "See"]

Description: From CHF 33. No commitment required for your first session.
             Seefeldstrasse 152, 8008 Zurich.

Button:      "Book your first session →"   [→ /book]
```

---

## Visual Assets for /about

Images available in `public/media-assets/` that work well for this page:

| Section | Recommended image |
|---|---|
| Hero (optional background) | `hero.webp` — the primary red light bed shot |
| The Space | `red_light_therapy_bed_1.jpg` |
| The Practice / people | `691d99a8a3d14ffa7b2a9b96_20240709_Ayun_1314.jpg` (person in goggles) |
| Science/ambient | `691c9715b503f65d6eacedcc_...Benefits-min.jpeg` |

The About page can be text-dominant (like the Sequel manifesto) and rely on the embedded Instagram grid at the bottom to carry the visual weight of the space and community.

---
---

# PART TWO: /science

## What page this replaces
Also `/manifesto` — but the Science page should feel meaningfully different from About. Same structural bones, different personality. Where About is warm and personal, Science is the one place on the site where we let the nerd flag fly — properly, rigorously, but with wit. Think: New Yorker science desk, not WebMD.

The key challenge here is to be genuinely technically accurate (because the target audience will google it) while not making people's eyes glaze over. Every section has a witty title and then earns it with substance.

## Existing components used as-is
- `ManifestoAnimations.tsx` — identical hero animation
- `manifestoHero`, `manifestoSection`, `manifestoCta` classes
- Consider adding a new `scienceWavelengthDiagram` component (see below) as one visual break in the text

## New component: `WavelengthDiagram`
A single SVG/CSS illustration showing three horizontal bars — 630nm (red), 660nm (deep red), 850nm (near-infrared) — with a simple human body silhouette cross-section showing penetration depth for each. Minimal, line-art style, warm colour palette. Replaces one of the `manifestoSection` blocks with a visual instead of text. Builds directly in the page file.

---

## Science Page: Full Copy & Structure

### Route: `/science`
### Page `<title>`: `The Science — red. Zurich`

---

**Hero Section**

```
Badge:    "The Science"

Headline: "Your mitochondria
           have been waiting
           for this."

           [italic treatment on "waiting"]
```

---

**Section 1: The mechanism**
*Title*: It starts with an enzyme you've never heard of.

*Body*:

> Deep inside every cell in your body, there is a protein complex called cytochrome c oxidase — CCO, if you want to sound like you work at CERN.
>
> CCO is the final step in your mitochondria's electron transport chain: the machine that converts oxygen into the cellular energy your body runs on, called ATP.
>
> Here is the interesting part.
>
> CCO has a direct optical response to specific wavelengths of red and near-infrared light. When those wavelengths land on it, the enzyme absorbs the photons and changes its electrochemical state. The result: the mitochondria produce more ATP, cells become more energetically active, and a cascade of secondary effects unfolds — reduced oxidative stress, increased nitric oxide, activation of tissue-repair pathways.
>
> This is not a theory. It has been replicated in peer-reviewed research for over fifty years.
>
> It is called photobiomodulation. We call it red light therapy. Your cells don't care what you call it.

---

**Section 2: The wavelengths** *(followed by the `WavelengthDiagram` component)*
*Title*: Why 630, 660, and 850nm. And why 700nm is useless.

*Body*:

> Not all red light is equal.
>
> The wavelengths that CCO responds to form two distinct windows in the electromagnetic spectrum. Visible red light between 620–700nm activates the superficial chromophores in skin tissue. Near-infrared light between 800–900nm passes through skin entirely, reaching muscle, joint, and even bone.
>
> The 700–770nm range? Research calls it the "gap zone" — photons in this range don't bind efficiently to any meaningful chromophore and produce underwhelming results. Most consumer devices are in this range. Most people don't know.
>
> At red., we use 630nm and 660nm for skin-level work — collagen stimulation, inflammation reduction, surface recovery — and 850nm for deep-tissue penetration up to 50mm below the skin surface: muscle repair, joint recovery, lymphatic activation.
>
> Both above and below your body simultaneously. That's the dual-layer bed. That's why eleven minutes is enough.

---

**[WavelengthDiagram component renders here]**
*Three labelled horizontal bands with body cross-section showing penetration depth for each wavelength. Clean SVG, line art, warm red/amber colour treatment.*

---

**Section 3: Skin and collagen**
*Title*: More collagen isn't a vanity project. It's structural engineering.

*Body*:

> Collagen is the scaffolding your skin, tendons, cartilage, and blood vessels are built from. Production peaks in your mid-twenties and declines by roughly 1–1.5% per year after that.
>
> Controlled clinical trials — blinded, peer-reviewed, published in dermatology journals — show that red and near-infrared light treatment increases intradermal collagen density, reduces fine lines, and improves skin surface quality. The mechanism is direct: photons activate fibroblast cells, which are the factories that produce collagen. More activated fibroblasts, more collagen. More collagen, measurably different skin.
>
> A 2014 study in *Photomedicine and Laser Surgery* showed statistically significant improvement in collagen density after twice-weekly sessions. Not after months — within weeks.
>
> The beauty industry will sell you a thousand products that sit on top of your skin.
>
> This changes what happens inside it.

---

**Section 4: Inflammation**
*Title*: Inflammation isn't your enemy. Chronic inflammation is.

*Body*:

> Acute inflammation is how your body heals. Chronic inflammation — the low-level, persistent kind — is how it breaks down.
>
> The anti-inflammatory mechanism of PBM operates at multiple levels simultaneously. Photons absorbed by CCO trigger a brief, controlled burst of reactive oxygen species — not damaging, but signalling. This activates NF-κB, a transcription factor that in healthy tissue promotes repair. In already-inflamed tissue, the same pathway paradoxically *reduces* the production of pro-inflammatory cytokines: TNF-α, interleukin-1β, prostaglandins.
>
> Translation: red light helps your body resolve inflammation it should have resolved already — inflammation from training, from injury, from the accumulated background noise of modern life.
>
> Elite athletes have used this for decades. They didn't wait for the wellness industry to catch up.

---

**Section 5: Brain, sleep, and mood**
*Title*: The part nobody leads with, but probably should.

*Body*:

> The same near-infrared wavelengths that penetrate muscle also cross the blood-brain barrier.
>
> In 2024, a randomised controlled trial published in PMC documented significant improvements in cognitive function and neuropsychiatric symptoms in post-stroke patients treated with 630nm red light. The mechanism: photobiomodulation activates enzymes involved in formaldehyde metabolism — formaldehyde being a metabolic byproduct that accumulates with cognitive stress and impairs neuronal function.
>
> Sleep research suggests that red-wavelength light in the evening supports melatonin production by minimising blue-spectrum disruption of circadian rhythms. Several small trials show improved sleep quality with consistent evening red light exposure.
>
> These are not the boldest claims in the literature. The boldest ones, frankly, need more research before we'd put them on this page. But the brain and sleep data is solid enough that we include it.
>
> We are in the business of telling you what the science actually says. Not what sells subscriptions.

---

**Section 6: How red. does it differently**
*Title*: The studio, not the device.

*Body*:

> Consumer red light panels — the ones you'd buy online and hang in your bathroom — output anywhere from 20–100mW/cm² at a single wavelength, typically held 15–30cm from one side of your body.
>
> The beds at red. are clinical-grade full-body panels, positioned above and below simultaneously. Both surfaces active. Both wavelengths delivered. Every session is calibrated to the optimal therapeutic window for the biphasic dose response — enough light to stimulate, not so much that it inhibits.
>
> The Mindfulness Menu runs concurrently: a guided audio sequence developed for the duration of your session. Not background noise. Not generic meditation app content. A specific protocol developed to use the stillness of the session productively.
>
> Eleven minutes of light.
> Eleven minutes of quiet.
> The biology and the practice, at the same time.

---

**Closing CTA**:

```
Headline:    "Fifty years of research.
              Eleven minutes to feel it."
              [italic: "feel"]

Description: Sessions from CHF 33. The science is real.
             The experience, however, you have to come in for.

Button:      "Book a session →"   [→ /book]

Secondary:   [link] "View the research →"   [→ external: Google Drive research folder, or future /research page]
```

---

## A Note on Tone for /science

The Science page is the one place on the site where we use the word "cytochrome" and mean it. But the writing should never feel like a product page trying to sound scientific. It should feel like someone genuinely fascinated by this subject explaining it to a smart friend.

Rules:
- Every section title is a little irreverent ("It starts with an enzyme you've never heard of")
- Every section body delivers on the title with actual substance
- Specific numbers beat vague claims every time (1–1.5% annual collagen decline beats "collagen declines with age")
- Admit what isn't proven yet. The audience respects honesty more than enthusiasm.
- Sentences can be short. Paragraphs can be two lines. Let it breathe.

The Science page will also be the site's strongest SEO asset — "red light therapy Zurich", "photobiomodulation Zurich", "630nm 660nm 850nm therapy" are all low-competition, high-intent terms. Dense, accurate copy on this page does double duty.

---

## Implementation Notes (Both Pages)

**Route files to create:**
- `src/app/about/page.tsx` — import `ManifestoAnimations`, build sections inline (as the current manifesto page does)
- `src/app/science/page.tsx` — same pattern, add `WavelengthDiagram` as an inline or extracted component

**CSS:** Both pages reuse all existing `.manifesto*` classes. No new CSS required unless the WavelengthDiagram needs its own rules.

**`ManifestoAnimations`** references `.manifestoHero`, `.manifestoSection`, `.manifestoCta` class names by string — both pages use the same classes, so the animation file works for both without any modification.

**Delete:** `src/app/manifesto/page.tsx` can be repurposed as `/about` or archived. The Sequel manifesto content is not needed.
