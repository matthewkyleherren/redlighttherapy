# red. Landing Page — Adaptation Proposal
### Mapping the Sequel codebase to betteratred.com

---

## The Short Version

The Sequel site structure is a near-perfect match for red. Every section has a direct equivalent. The black-first palette, the Bradford serif + Visuelt Pro sans pairing, the glass morphism elements, the Mux video infrastructure, the animated counters, the marquee — all of it stays. What changes is the content, the accent colour, a handful of copy lines, and the images/video. Structurally this is a reskin, not a rebuild.

---

## Design Token Changes (globals.css)

These are the only CSS variable changes needed to transform the site from Sequel → red.:

```css
:root {
  --color-bg: #0D0D0D;          /* was #000000 — slightly warmer black */
  --color-text: #F0EBE6;        /* was #ffffff — warm off-white, not pure white */
  --color-text-muted: #9A9087cc; /* was #ffffffb0 — warm muted */
  --color-surface: #1C1918;     /* was #1a1a1a — warm charcoal undertone */
  --color-surface-light: #2A2420; /* was #2a2a2a — warm */
  --color-accent: #C8392B;      /* NEW — the red. brand red */
  --color-accent-glow: #E84B3A; /* NEW — hover/glow variant */
  --color-amber: #D4824A;       /* NEW — warmth accent for mindfulness sections */
}
```

The fonts stay exactly as they are. Bradford italic already looks extraordinary as the emphasis voice. Visuelt Pro is cleaner than anything I'd have introduced. No font changes.

---

## Section-by-Section Mapping

### SECTION 1 → Hero (Keep structure, swap content)

**What stays:** Full-viewport Mux video background, glass video controls, the two-column header layout (title left, description + CTAs right), the gradient overlay, all animation hooks.

**What changes:**

```
CURRENT headline:   "Your legacy, made."
NEW headline:       "Enter the red."

CURRENT description: "A digital family office for athletes, artists, and
                      entrepreneurs backing companies that advance humanity."
NEW description:    "Zurich's first red light therapy studio. Cellular
                     recovery, collagen, clarity — in eleven minutes."

CURRENT CTA 1 (glass): "Watch the film"
NEW CTA 1 (glass):     "Book a session →"  [links to /book]

CURRENT CTA 2 (solid): "Build the future"
NEW CTA 2 (solid):     "Join the membership →"  [links to /membership]
```

**Video:** New Mux video needed — atmospheric interior shot of the studio, LEDs warming up from darkness to warm red glow. The existing player infrastructure (`mux-video`, preload, controls, play/pause) requires zero code changes.

**Headline italic word:** Change `legacy,` → `red.` styled in Bradford italic. The sentence reads: `Enter the` *red.* — with the period as part of the brand mark.

---

### SECTION 2 → The Sessions (Keep structure, swap cards)

**What stays:** The two-card layout (`homeCard`, `homeCardImage`, `homeCardOverlay`, `homeCardContent`), the badge component, the card button pattern.

**What changes:** The `CARDS` array in Section2.tsx becomes:

```typescript
const CARDS = [
  {
    image: '/images/session-individual.jpg',   // dramatic LED bed shot
    alt: 'Individual red light session',
    badge: 'Individual Sessions',
    title: 'The eleven-minute ritual.',
    about: 'Full-body immersion in 630nm, 660nm, and 850nm light. Guided mindfulness included. From CHF 33.',
    buttonText: 'View sessions',
    href: '/sessions',
  },
  {
    image: '/images/membership.jpg',   // lifestyle/ambient shot
    alt: 'red. unlimited membership',
    badge: 'Membership',
    title: 'Unlimited. CHF 222.',
    about: 'No credits. No booking friction. Just show up whenever your body asks — and it will.',
    buttonText: 'Join now',
    href: '/membership',
  },
];
```

**Section subtitle (the `section2Subtitle`):**
```
CURRENT: "The digital family office investing in founders shaping the future of humanity."
NEW:     "Science-backed recovery, ritual, and renewal — in the heart of Zurich."
```

The italic word changes from `future` → `renewal` (same Bradford italic class applies, no structural change).

---

### SECTION 3 → The Science (Keep structure, swap beliefs)

**What stays:** Full-screen background Mux video, the belief list structure (`section3TextItems`), the glass CTA button, `section3BeliefsTitle`.

**What changes:**

```
CURRENT title:   "We believe in"
NEW title:       "Science reveals"
```

The `section3TextItems` become:

```tsx
<p className="section3TextItem">
  Light that penetrates <span className="section3TextItemItalic">50mm</span> beneath your skin.
</p>
<p className="section3TextItem">
  Mitochondria producing <span className="section3TextItemItalic">more ATP energy.</span>
</p>
<p className="section3TextItem">
  Recovery that happens <span className="section3TextItemItalic">while you rest.</span>
</p>
<p className="section3TextItem">
  Collagen that <span className="section3TextItemItalic">rebuilds itself.</span>
</p>
<p className="section3TextItem">
  A mind that thinks <span className="section3TextItemItalic">more clearly.</span>
</p>
```

```
CURRENT CTA:   "Read our manifesto"  → /manifesto
NEW CTA:       "Explore the science"  → /science
```

**Video:** New Mux video — extreme close-up of LEDs, warm red light washing across skin texture, or a slow abstract shot of light diffusing. The existing autoplay/loop/muted infrastructure is unchanged.

---

### SECTION 4 → Testimonials (Keep structure, swap content)

**What stays:** The two-column `foundersColumn` layout, the `VideoTile` component pattern, the `quoteTile` component with glass badge.

**If video testimonials exist:**
Keep `VideoTile` exactly as-is, just replace the Mux playback IDs and names.

**If video testimonials don't exist yet** (likely for a new salon):
Replace both `VideoTile` instances with a new `GuestTile` component — a still image card with name, treatment type, and a quote overlay. Same dimensions and layout. The `quoteTile` components alongside them remain exactly as-is.

**Quote tile content:**
```
Quote 1: "I've tried everything — cryotherapy, IV drips, the works.
          Red light is the one I actually feel."
Badge: "Membership"
Attribution: "Zurich, regular member"

Quote 2: "The guided meditation during the session is the part
          nobody tells you about. It's twenty minutes for your body,
          and twenty minutes for your head."
Badge: "22-min Session"
Attribution: "Zurich, weekly guest"
```

**Section header (section4Subtitle):**
```
CURRENT: "We bring value to founders beyond capital."
NEW:     "Guests arrive sceptical. They come back."
```
Italic word: `sceptical` → keeps the same `titleItalic` treatment.

**Section description:**
```
CURRENT: "We accelerate the world's best founders with storytelling..."
NEW:     "Real results from real people in Zurich. Not a wellness trend.
          A weekly practice."
```

**Section4 button:**
```
CURRENT: "Learn more" → /founders
NEW:     "Read their stories" → /stories   (or /about, depending on what page exists)
```

---

### SECTION 5 → Science Stats + Press Marquee (Keep structure, swap data)

**What stays:** The stats grid, animated counter mechanism (`data-target`, `statValue`), the `statBadge` glass component, the `LeagueMarquee` component structure.

**The `STATS` array changes to:**

```typescript
const STATS = [
  {
    id: 'stat1',
    badge: 'Research',
    prefix: '',
    target: 57,
    suffix: '+',
    subtitle: 'Peer-reviewed studies'
  },
  {
    id: 'stat2',
    badge: 'Wavelengths',
    prefix: '',
    target: 3,
    suffix: '',
    subtitle: 'Targeted light frequencies'
  },
  {
    id: 'stat3',
    badge: 'Session',
    prefix: '',
    target: 11,
    suffix: 'min',
    subtitle: 'To start feeling the difference'
  },
  {
    id: 'stat4',
    badge: 'Penetration',
    prefix: '',
    target: 50,
    suffix: 'mm',
    subtitle: 'Deep into muscle and tissue'
  },
];
```

**Section header:**
```
CURRENT: "From early momentum to global awareness."
NEW:     "The numbers behind the ritual."
```
Italic word: `ritual` → Bradford italic, same class.

**Section description:**
```
CURRENT: "Our network of investors spans world-class athletes..."
NEW:     "Photobiomodulation is among the most studied non-invasive
          therapies in modern medicine. These are some of the reasons why."
```

**LeagueMarquee → BenefitsMarquee:**
Replace the league logos (ATP, BAFTAs, UEFA, etc.) with:
- Benefit labels as text chips or icons: *Collagen · Recovery · Sleep · Inflammation · Energy · Hormones · Cognition · Skin · Performance · Mood*
- OR press logos if red. has any: local Zurich press, wellness publications
- The marquee component structure (CSS animation, scroll direction) stays completely intact — just swap the content rendered inside it

---

### SECTION 6 → Closing Booking CTA (Keep structure, swap copy)

**What stays:** The centred header layout, the description, the CTA button.

**What changes:**

```
CURRENT headline:  "Build what endures, with long-term partners."
NEW headline:      "Your first session is eleven minutes."
```
Italic word: `eleven` → Bradford italic.

```
CURRENT description: "We partner early and stay close..."
NEW description:    "Your biology will feel it for days. Seefeldstrasse 152,
                     Zurich. Walk in, glow out."
```

```
CURRENT button:  "Learn more" → /founders
NEW button:      "Book your session" → /book
```

---

## Header / Navigation Changes

```
CURRENT logo:    SequelLogo component (SVG)
NEW logo:        red. wordmark — simple text or SVG, Bradford italic, in the accent red

CURRENT nav:     Founders · Membership · Stories
NEW nav:         Sessions · Science · About

CURRENT desktop CTA:  "Build the future" → /founders/submit
NEW desktop CTA:      "Book Now →" → /book  (opens booking modal)
```

Mobile menu: Same clip-path circle animation, just swap link targets and logo.

---

## Footer Changes

```
CURRENT tagline:    "Your legacy, made"
NEW tagline:        "Enter the red."

CURRENT nav cols:   Home / Founders / Stories / Membership | Manifesto / Careers / Advisor access / Privacy
NEW nav cols:       Home / Sessions / Science / About | FAQ / Gift Cards / Privacy policy

CURRENT offices:    San Francisco · Miami · London
NEW location:       Seefeldstrasse 152, 8008 Zurich

CURRENT contact:    members@sequel.co
NEW contact:        hello@betteratred.com

CURRENT social:     Instagram / TikTok / YouTube / X / LinkedIn
NEW social:         Instagram only (@rbetter.at.red) — with option to add others later
```

---

## What Needs to Be Built New

Only two components need building from scratch. Everything else is an adaptation:

### 1. `BookingModal` component
A `<dialog>` or shadcn `Sheet` that opens on any "Book Now" button click across the site, embedding the Cowlendar booking iframe. The modal state should be driven by a global context or URL hash (`?book=true`) so any CTA across any page can trigger it. This replaces the current pattern of all CTAs linking to `/founders/submit`.

### 2. `BenefitsMarquee` (or repurpose `LeagueMarquee`)
The `LeagueMarquee` component loops images. The replacement loops text chips or small icon+label pairs for wellness benefits. If the design direction favours press logos, it stays as-is with new image assets. If it goes text-only, a small refactor of the inner content is needed — the CSS scroll animation itself stays untouched.

---

## Pages to Keep / Adapt / Replace

| Sequel Page | Action | red. Equivalent |
|---|---|---|
| `/` (homepage) | Adapt sections 1–6 as above | `/` |
| `/membership` | Adapt — pricing, perks, membership card components | `/membership` |
| `/founders` | Replace entirely | `/sessions` — full session/pricing page |
| `/stories` | Adapt | `/about` or `/stories` (guest stories) |
| `/manifesto` | Replace | `/science` — the photobiomodulation deep dive |
| `/founders/submit` | Replace | `/book` — booking page (or just modal) |
| `/careers` | Remove | — |
| `/news` | Keep structure | `/journal` or remove for now |
| `/privacy` | Keep | `/privacy` |

---

## What to Shoot / Source

The one thing that can't be coded: photography and video. The site lives or dies on it.

**Priority shoot list:**
1. **Hero video** (2–3 min raw, edited to 20-30 sec loop): Studio interior, LEDs warming up from darkness, one person lying in the bed in silhouette
2. **LED close-up video** (for Section 3 background): Extreme macro of the panel surface, warm red light diffusing
3. **Session still**: The LED bed from a dramatic angle, covers, clinical but warm
4. **Lifestyle/membership still**: A person post-session — calm face, warm light on skin
5. **Space stills**: The health bar, the entrance, Seefeldstrasse exterior at dusk

In the absence of custom photography: Unsplash/Pexels have some usable red light / warm LED shots as placeholders. Avoid anything that looks like a tanning bed.

---

## Implementation Order

1. **Design tokens** — update `globals.css` CSS variables (20 min)
2. **Header** — swap logo, nav links, CTA text (30 min)
3. **Section 1** — new headline copy + new video Mux ID when available (30 min)
4. **Section 2** — update `CARDS` array (20 min)
5. **Section 3** — update beliefs list + CTA (20 min)
6. **Section 5** — update `STATS` array + marquee content (30 min)
7. **Section 6** — update headline + description + CTA (15 min)
8. **Section 4** — update testimonials / decide on video vs still tiles (1–2 hrs)
9. **Footer** — update all copy + social links (30 min)
10. **BookingModal** — build new (2–3 hrs)
11. **Photography/video** — source placeholders, commission shoot

**Total estimated dev time (excluding shoot):** ~1 day of focused work for the adaptation layer, + 1 day for the BookingModal and any new subpages.
