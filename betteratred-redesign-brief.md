# red. — Website Redesign Brief
### betteratred.com · Zurich · April 2026

---

## 1. Current Site Audit

The existing betteratred.com is a missed opportunity for a brand that genuinely has strong bones. The business is positioning itself at the intersection of two of the most culturally relevant wellness trends right now — scientific biohacking and mindful ritual — yet the site fails to communicate either convincingly. Content is disorganised, the visual language is generic, and the booking experience is buried. The brand name itself is barely legible as a concept; "Better at Red" needs to land harder and faster.

**What they actually have that's worth keeping (as brand truths, not design):**
- Switzerland's first elite red light therapy studio — a genuine "first mover" claim
- Dual-layer LED beds (above and below) with 630nm, 660nm, 850nm wavelengths — a real differentiator
- A mindfulness integration layer ("Mindfulness Menu") that makes this more than a gadget salon
- A health bar component — reinforces the holistic positioning
- Movement classes (Kundalini, breathwork, ecstatic dance) — unexpected depth
- CHF 222/month unlimited membership — a beautifully considered price point
- Social/group option ("Besties Glowing") — smart, Instagram-shareable moment

**What's broken:**
- No clear visual hierarchy — the eye has nowhere to land
- Science and spirituality are competing rather than complementing
- Pricing is scattered and confusing
- The booking CTA is not prominent
- Photography appears either generic stock or absent
- German/English switching feels unresolved
- The brand mark itself lacks presence

---

## 2. Design Inspiration Analysis

### Reference Sites Studied

**HUM2N (hum2n.com) — London Longevity Clinic**
The closest tonal reference for what red. should aspire to. HUM2N uses soft off-whites and warm grays as the canvas, with teal/cyan as the only accent. Typography is bold and authoritative (Montserrat) alongside a technical monospace (Inconsolata) that signals science. Their tagline "Become the hum2n you want to be" is grammatically odd in the best way — it creates curiosity. The site feels like a premium medical consultation rather than a transaction. Whitespace does the heavy lifting.

**The Longevity Suite (thelongevitysuite.com)**
Deep neutrals, near-black backgrounds, minimal teal-green accent. The hero opens on a cryotherapy pod shot — a bold choice that communicates "this is serious technology." Headline: "Live more today, live more tomorrow." Press logos (Cosmopolitan, Vanity Fair) appear above the fold. Services are modular cards, not lists. Copy is brief and aspirational, then goes deep in subpages.

**The Now Massage**
A masterclass in soothing motion design. Slow hero zoom animations, rotating promotional headline bar. Uses a cream/nude palette — warmth without looking dated. Typography is elegant without being stuffy.

**Glowbar (glowbar.com)**
Bold editorial headline fonts, vibrant color (unexpected in this space), extremely clear "here's how it works" process explanation. Converts education into desire very efficiently.

**Aman Spa / Four Seasons / Mandarin Oriental**
Dark luxury editorial. Photography is the entire argument. Text is sparse, refined, almost hushed. These sites communicate that the experience itself is beyond description — you simply must go.

**Rela Spa (Awwwards Honorable Mention)**
12-column responsive grid, charcoal and white with warm accent, Inter Tight variable font. Modular card components. Sticky navigation with smooth interactions. Confirmed: the industry's top-rated spa sites use restraint, not decoration.

### What the Best Sites Have in Common

1. **One dominant visual mood** — either dark editorial luxury or warm clinical minimalism. Never both, never neither.
2. **Taglines that make a philosophical claim**, not a service description.
3. **Process explained simply** — three or four steps, visually sequenced.
4. **Social proof above the fold** — press logos or a single powerful testimonial.
5. **Booking is always one click away**, regardless of which page you're on.
6. **Photography is non-negotiable** — custom, atmospheric, lit dramatically.
7. **Movement** — subtle scroll-linked animations, parallax, slow reveals.
8. **Mobile-first thinking** — most visitors will arrive via Instagram.

---

## 3. Recommended Visual Direction

### The Concept: "Charged Darkness"

red. should own the dark. Red light therapy is, by nature, a warm glow in a dark space — a ritual moment of stillness and warmth. The website should feel like stepping into that room before the session starts: dark, calm, expectant. Then warmth creeps in.

This contrasts beautifully with the sea of beige-and-sage wellness sites. It signals that red. is a *different kind* of wellness — not soft and passive, but active, scientific, transformative. The biohacker audience will read it immediately.

### Color Palette

```
Background (primary):    #0D0D0D  — Near black, not full black. Warmer.
Background (secondary):  #141414  — Cards, modals, elevated surfaces.
Background (tertiary):   #1C1918  — Warm charcoal with red undertone.

Red (brand):             #C8392B  — Deep, rich, not garish. Sophisticated red.
Red (glow):              #E84B3A  — Used for hover states, subtle glows, CTAs.
Amber (warmth):          #D4824A  — A warm accent. Health bar, mindfulness sections.

Text (primary):          #F0EBE6  — Warm off-white. Never pure white.
Text (secondary):        #9A9087  — Muted warm gray for captions, labels.
Text (accent):           #C8392B  — Sparingly. Quotes, key stats, links.

Border/Line:             #2A2420  — Barely visible. Structure without weight.
```

### Typography

Two fonts. No more.

**Display / Headlines:** `Cormorant Garamond` or `Playfair Display` in Regular and Light weights. Elegant, slightly literary, unexpected in the tech-wellness space. Gives the brand a European salon sensibility — think Zurich, not Silicon Valley. Headlines should be *large*. Occupying space. Confident.

**Body / UI:** `Geist` (or `Inter`) in Regular 400 and Medium 500 only. Modern, clean, readable at all sizes. Used for everything that isn't a headline: body copy, navigation, labels, pricing.

The contrast between the serif display and the sans-serif body is the typographic heartbeat of the brand.

### Imagery Direction

All imagery should be:
- **Dramatically lit** — warm red/amber light sources, deep shadows
- **Intimate** — close crops, skin texture, the glow of LEDs on the body
- **Not stock** — commission a local Zurich photographer for a half-day shoot
- Subjects are **calm but not sleepy** — this is performance, not passivity
- Include the actual space at Seefeldstrasse — the location is an asset

Secondary imagery for the science sections should use **macro/technical photography** — close-up of LEDs, wavelength diagrams rendered as minimal line art, not medical clip art.

### Motion

- **Hero section**: Full-screen video loop — the interior of the studio, LEDs warming up, a figure lying in the bed. Sound off, atmosphere on.
- **Scroll animations**: Content fades up with a warm glow effect (red-tinged) as it enters the viewport.
- **Service cards**: Subtle radial glow on hover — as if the card itself is emitting light.
- **Section transitions**: Cross-fade dissolves, not hard cuts.

---

## 4. Proposed Site Structure

The current site sprawls without logic. The redesign should have maximum six items in the main navigation.

### Navigation (sticky, always visible)

```
red.    [logo/wordmark]        About   Science   Sessions   Membership   Book Now →
```

"Book Now" is always a button, never a link. It persists on scroll. On mobile it becomes a fixed bottom bar.

---

### Page Architecture

**/ — Homepage**
The full story, compressed. Should answer four questions in order:
1. *What is this?* — Hero with tagline and video
2. *Why should I care?* — The science, made human
3. *What do I get?* — Sessions overview
4. *How do I start?* — Booking CTA + membership offer

**Homepage Sections:**

1. **Hero** — Full-viewport. Dark background. Video loop. Large serif headline. One-line descriptor. One CTA.
2. **The Promise** — 3–4 word statements in oversized type, fading in sequentially. e.g. "Cellular. Deliberate. Red."
3. **What is Red Light Therapy?** — A brief, confident explanation (3 paragraphs max). Not defensive or over-explained. Links to `/science`.
4. **The Sessions** — Three cards: 11-min, 22-min, Group. Image, name, duration, price, CTA.
5. **The Space** — Two-column: atmospheric image left, short copy about the studio right. Location. Address. A sense of place.
6. **The Movement Practice** — Grid of classes (Kundalini, Breathwork, etc.) with dates/times.
7. **Press & Trust** — Logo strip: any press mentions. One or two pull quotes from guests.
8. **The Membership** — Dark card with gold/amber treatment. CHF 222/month hero. Benefits list. CTA.
9. **Health Bar** — Brief section. What's offered. The drinks, the ritual.
10. **Booking CTA** — Full-width. Red background section. Bold headline. Single booking button.
11. **Footer** — Address, Instagram, email, language toggle (DE/EN), legal links.

---

**/ sessions — Sessions & Pricing**
Clean, unambiguous. All sessions on one page.

Sections:
1. **Hero** — Page title + one-line description
2. **Individual Sessions** — 11-min and 22-min, side by side. Pricing clear. What's included.
3. **Group Experience (Besties Glowing)** — Its own featured block. Social, gift-able.
4. **Membership** — Full breakdown. Monthly vs. annual. CHF 222 vs. CHF 2,222. Benefits compared.
5. **Credits Bundle** — 15 credits, 6 months. Positioned as the smart middle option.
6. **FAQ** — Accordion, short answers. Questions ordered by conversion importance.
7. **Book CTA** — persistent

---

**/ science — The Science**
This is where red. earns trust with the skeptical audience. It should feel like a sophisticated editorial — not a product page, not an academic paper.

Sections:
1. **Hero** — Headline: "Light is information for your cells." Subhead about photobiomodulation.
2. **The Mechanism** — How it works, with a minimal animated diagram (wavelengths as glowing lines). 4 stages: light absorbed → mitochondria activated → ATP produced → cellular repair.
3. **What it treats** — Icon grid: Skin & Collagen, Inflammation, Muscle Recovery, Sleep & Mood, Hormonal Support, Cognitive Function. Each links to an expanded accordion below.
4. **The Wavelengths** — Visual: 630nm (red), 660nm (deep red), 850nm (near-infrared). Illustrated. What each does.
5. **Research** — Linked studies. Not dumped as a Google Drive link — curated, named, dated. "57 peer-reviewed studies" as a trust number.
6. **What red. specifically does differently** — The dual-layer (above + below) setup. The guided mindfulness integration. Why this matters.

---

**/ about — About**
Short. Personal. Confident.

Sections:
1. **The Origin** — Why was red. started? One founding story, told in the first person if possible.
2. **The Space** — A love letter to the studio. Seefeldstrasse 152. The neighbourhood. Why Zurich.
3. **The Philosophy** — The intersection of technology and ritual. Not just biohacking, but *conscious* biohacking.
4. **The Team** — If there are faces to put to the brand, this is where they live. Even one founder image is better than none.
5. **The Health Bar** — Brief section with imagery.
6. **Instagram Feed** — Pull in @rbetter.at.red posts as a grid.

---

**/ book — Booking** (or modal, not full page)
Direct integration with the booking system (Cowlendar). Clean, minimal chrome around it. The booking interface should appear inside a modal triggered from any "Book Now" button across the site, rather than navigating away.

---

### Pages to Remove / Consolidate
- Any sub-pages that are just text blocks should be collapsed into accordions on main pages
- The Google Drive research link should be replaced by an on-site `/science` page
- Multiple language versions should use a simple in-page toggle, not separate URL paths (unless SEO requires it)

---

## 5. Copywriting Direction

### Voice & Tone

The current copy is gentle and slightly earnest. The redesign should be **calm but authoritative** — like a very knowledgeable friend who happens to also be a doctor. Never clinical. Never sales-y. Never breathlessly enthusiastic.

**Three words to write toward:** *deliberate, warm, precise.*

**Avoid:** "amazing," "incredible," "transform your life," "feel your best self," passive constructions, medical disclaimers in the running copy (put them in the footer), bulleted lists on emotional sections.

**Use:** present tense, active voice, short sentences that breathe, specific numbers, the word "your" a lot.

### Hero Headline Options (to test)

```
"Light, by design."
"Enter the red."
"Your cells know what to do. Give them light."
"Eleven minutes. Your biology thanks you."
"Zurich's original red light ritual."
"The science of glow."
```

### Section Copy Samples

**What is red light therapy?**
> Red light isn't a trend. It's photobiomodulation — a process your mitochondria have responded to since the first humans stood in sunlight. At the wavelengths we use (630, 660, and 850nm), light penetrates up to 50mm beneath the skin and tells your cells to produce more energy. Less inflammation. More collagen. Faster recovery. Clearer thinking. Eleven minutes, twice a week.

**The Membership**
> Unlimited red. For CHF 222 a month. No credits to count. No bookings to juggle. Just show up whenever your body asks for it — and it will.

**The Space**
> We're at Seefeldstrasse 152 in Seefeld — Zurich's quietest corner. The studio was designed to remove distraction: dark, warm, intentional. You'll find the health bar by the door, your bed in the chamber, and nothing else you don't need.

---

## 6. Technical & UX Recommendations

### The Next.js repo (sequel-next)

The existing Next.js foundation is a strong starting point. Key structural recommendations:

- **Routing**: Use the App Router. Each main section (`/`, `/sessions`, `/science`, `/about`) as its own route. The booking UI as a modal component triggered via URL hash or global state, so any "Book Now" button across any page can open it without navigation.
- **Dark mode**: This site is dark-only. No light mode. Set `prefers-color-scheme: dark` globally and don't offer a toggle.
- **Fonts**: Load Cormorant Garamond from Google Fonts (or a local woff2 file for performance) + Geist from the Vercel fonts package (it's already in the Next.js ecosystem).
- **Video**: Hero video should be `<video autoplay muted loop playsinline>` with a WebM + MP4 fallback. Serve it from a CDN. Target under 5MB for the loop.
- **Animation**: Use `framer-motion` for scroll-linked entrance animations and the card hover glow. It's the cleanest integration with React/Next.js.
- **i18n**: Use Next.js's built-in `i18n` routing (`/de/...` and `/en/...`) with a simple language toggle in the nav.
- **Booking**: Cowlendar or an equivalent can be embedded in a Dialog/Sheet component (e.g. shadcn/ui Dialog) that opens as an overlay.
- **SEO**: Strong structured data for LocalBusiness schema (address, hours, services). German-language copy is the primary SEO target for Zurich searches.

### Components to Build / Reuse

| Component | Notes |
|---|---|
| `HeroVideo` | Full-viewport, video background, headline + CTA |
| `SessionCard` | Duration, price, includes, CTA. Used on homepage and /sessions |
| `ScienceAccordion` | Expandable treatment areas with citations |
| `WavelengthDiagram` | Animated SVG/canvas — the visual heart of /science |
| `MembershipCTA` | Dark card variant, amber accent, full-width option |
| `PressStrip` | Scrolling logo strip, auto-animated |
| `BookingModal` | Dialog wrapper around booking embed |
| `HealthBarBlock` | Image + copy, used on About |
| `MovementGrid` | Class cards with date/time, links to booking |

---

## 7. Priority Order for Build

1. Global design tokens (colors, type scale, spacing) in `tailwind.config`
2. Navigation + BookingModal (since Book Now is on every page)
3. Homepage (this is the pitch deck — get this right first)
4. /sessions (second most important for conversion)
5. /science (trust-builder, SEO value)
6. /about
7. i18n layer (DE copy)
8. Photography shoot and video production (brief a Zurich photographer early)

---

## 8. Summary

red. has everything a great brand needs: a real "first" claim, genuine science, a beautiful location, and services that span solo ritual to social experience. What it lacks is design confidence. The site needs to stop apologising for being science-forward and stop hedging its luxury positioning.

The redesign direction: **dark, warm, deliberate**. Own the red. Own the dark. Make the science feel like wisdom, not defensiveness. Make the booking feel inevitable, not earned.

The audience — Zurich's health-conscious, design-literate, disposable-income-having 28–48 year olds — will respond to this immediately. They've seen the beige. Give them something that glows.

---

*Research conducted April 2026. Inspiration references: HUM2N (London), The Longevity Suite (Europe), The Now Massage (US), Glowbar (US), Aman/Four Seasons/Mandarin Oriental spa sites, Rela Spa (Awwwards Honorable Mention), Joovv, Eight Sleep. Design pattern sources: Awwwards.com, MaxiBestOf.one, Behance, HubSpot Spa Design roundup.*
