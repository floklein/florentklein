---
name: florentklein.dev
description: Precise, modern, confident portfolio of a Lead Frontend engineer — restraint as mastery.
colors:
  ink: "oklch(0.145 0 0)"
  surface: "oklch(1 0 0)"
  primary: "oklch(0.205 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  secondary: "oklch(0.97 0 0)"
  border: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  cinema-accent: "oklch(0.505 0.213 27.5)"
  health-accent: "oklch(0.508 0.118 165.6)"
typography:
  display:
    fontFamily: "Inter, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.18em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
    height: "36px"
---

# Design System: florentklein.dev

## 1. Overview

**Creative North Star: "The Senior Engineer's Desk"**

This is the portfolio of a Lead Frontend engineer, and the surface itself is the strongest evidence on it. The system is built on near-monochrome restraint: a clean white page (dark-mode equivalent: near-black), one near-black ink for everything that matters, and color admitted only where it earns its keep. Nothing shouts. The hierarchy is carried by type weight, generous vertical rhythm, and disciplined spacing rather than by decoration. Where most portfolios reach for gradients and motion to seem impressive, this one trusts whitespace and precision to read as senior.

The content does the persuading — a truthful experience timeline, real project screenshots, honest tech stacks — so the chrome stays out of the way. Color appears in exactly two places by design: the per-project accent (cinema red, health green) that tags a featured project to its domain, and the focus ring. Both are functional, never decorative. The interface is fully bilingual-capable but ships in French, and works identically in light and dark themes.

This system explicitly rejects: over-designed/loud aesthetics (heavy animation, glassmorphism, gradient text), cluttered/dense layouts that crowd the reader, corporate-SaaS marketing clichés (hero-metric blocks, gradient accents, identical icon-card grids), and the generic shadcn/AI-default look it must consciously rise above.

**Key Characteristics:**
- Near-monochrome neutral base (chroma 0) with two functional domain accents.
- Identical light and dark themes; both must pass WCAG 2.1 AA.
- Hierarchy from type weight and spacing, not borders, shadows, or color.
- Flat-by-default surfaces; elevation is a whisper, never a statement.
- Restraint as the primary signal of seniority.

## 2. Colors

A near-monochrome neutral palette (all neutrals at chroma 0) with two reserved, functional domain accents.

### Primary
- **Ink** (`oklch(0.205 0 0)`, near-black): The primary color. Carries primary buttons, the active timeline node, and key emphasis. In dark mode it inverts to a near-white (`oklch(0.922 0 0)`).

### Secondary
- **Cinema Red** (`oklch(0.505 0.213 27.5)`, deep red): The domain accent for film/cinema featured projects (e.g. MacGuffin). Used on the kicker label and project tag chips only. Lightens to `oklch(0.808 0.114 19.6)` in dark mode for contrast.
- **Health Green** (`oklch(0.508 0.118 165.6)`, emerald): The domain accent for health/SaaS featured projects (e.g. Chef). Same restrained footprint as cinema red.

### Neutral
- **Surface** (`oklch(1 0 0)` light / `oklch(0.145 0 0)` dark): Page and card background. Cards share the page background in light mode and lift one tonal step in dark mode (`oklch(0.205 0 0)`).
- **Muted Foreground** (`oklch(0.556 0 0)`): Secondary/supporting text — descriptions, dates, captions. Verify it clears 4.5:1 on its background; nudge toward ink if borderline.
- **Border** (`oklch(0.922 0 0)` light / `oklch(1 0 0 / 10%)` dark): Hairline borders, dividers, timeline rails, scrollbar thumb. Always 1px.
- **Ring** (`oklch(0.708 0 0)`): Focus ring, rendered as a 3px ring at 50% opacity.

### Functional
- **Destructive** (`oklch(0.577 0.245 27.325)`): Reserved for error/destructive states only. Not a brand color.

### Named Rules
**The Earned-Color Rule.** Color is functional, never decorative. The only hues on the page are the two domain accents (each scoped to a single featured project's kicker + tags) and the focus ring. If a color isn't telling the reader *which domain a project belongs to* or *what has focus*, it doesn't belong.

**The Chroma-Zero Rule.** Every neutral is chroma 0 — true grayscale, no warm or cool tint. The "warmth" of this brand comes from copy and spacing, never from a tinted background.

## 3. Typography

**Display / Body Font:** Inter (with Geist and `system-ui` fallback)
**Mono Font:** Geist Mono (loaded via `next/font`, exposed as `--font-geist-mono`)

**Character:** One humanist-grotesque family doing all the work across weights — there is no separate display face. Contrast comes from weight (400 → 600) and size, not from pairing two faces. This is deliberate restraint: a single, confident voice.

### Hierarchy
- **Display** (semibold 600, `text-4xl`/`text-5xl` ~2.25–3rem, line-height 1): Featured project names. The largest type on the page; kept under a hard ceiling, never billboard-sized.
- **Headline** (medium 500, `text-4xl` ~2.25rem, line-height ~1.1): The page H1 (the positioning statement). Confident but not loud.
- **Title** (medium 500, `text-2xl` ~1.5rem): Section headings ("Expérience", "Projets") and card titles (semibold).
- **Body** (regular 400, `text-lg` ~1.125rem, line-height 1.75): Lead paragraphs and descriptions, in muted foreground. Cap measure at 65–75ch (the hero/section intros already sit in `max-w-lg`).
- **Label** (semibold 600, `0.68rem`, letter-spacing `0.18em`, uppercase): The per-project kicker ("App iOS", "SaaS"). The single sanctioned use of an uppercase tracked label — it is a typed category marker, not a section eyebrow.

### Named Rules
**The One-Family Rule.** Inter carries the entire interface. Do not introduce a second sans for "contrast"; if you need contrast, change weight or size. Geist Mono is reserved for code/technical fragments only.

**The Kicker-Is-Not-An-Eyebrow Rule.** The uppercase tracked label is permitted only as a featured project's domain kicker. Never scatter tracked all-caps eyebrows above every section — that is the AI-grammar tell this brand rejects.

## 4. Elevation

This system is flat by default and conveys depth through tonal layering and 1px hairlines, not shadows. The only shadows in play are near-imperceptible: `shadow-xs` on buttons and inputs (a hint of edge), `shadow-sm` on cards. In dark mode, cards separate from the page by lifting one lightness step (`0.145` → `0.205`) rather than by casting a shadow.

### Shadow Vocabulary
- **Edge hint** (`shadow-xs`): Buttons, inputs. Just enough to seat the control on the surface.
- **Card rest** (`shadow-sm`): Cards at rest. Subtle; reads as a sheet of paper, not a floating panel.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. Depth is tonal (a lighter/darker step) or a hairline border — never a heavy drop shadow. If a card looks like it's floating, the shadow is wrong. Audit test: if you can see the blur radius from across the room, delete it.

**The No-Ghost-Card Rule.** Never pair a 1px border with a soft wide drop shadow on the same element. Pick one: the hairline border (the default here) or a single defined shadow ≤8px — not both.

## 5. Components

### Buttons
- **Shape:** Gently rounded (8px, `rounded-md`). Default height 36px (`h-9`).
- **Primary:** Ink background, surface-colored text, `shadow-xs`; padding `8px 16px`. Hover dims to 90% opacity. Used for the single key CTA ("Me contacter", featured project CTAs).
- **Outline:** Transparent/surface background with a 1px border; hover fills with the subtle accent tint. The default for secondary links (LinkedIn, GitHub).
- **Ghost:** No border or fill at rest; hover gets the accent tint. Used for icon-only actions on project cards (GitHub, App Store, external link), sized `size-9`/`size-8`.
- **Focus:** 3px ring at `ring/50` plus a border shift to the ring color. Always visible — keyboard operability is non-negotiable.

### Chips (Badges)
- **Style:** Project tech tags. `secondary` variant by default — soft neutral fill, transparent border, 8px radius, `text-xs`/`text-[11px]`, height 20px (`h-5`). Rendered as links to each tool's site.
- **Featured override:** On featured cards, tags adopt a tinted version of the project's domain accent (red or emerald family), light/dark aware.

### Cards / Containers
- **Corner Style:** 14px (`rounded-xl`) — the most rounded surface in the system. Do not exceed this on cards.
- **Background:** Surface (= page bg in light; one tonal step up in dark).
- **Shadow Strategy:** `shadow-sm` at rest (see Elevation). Featured cards use `overflow-visible` so project artwork can bleed past the card edge.
- **Border:** 1px hairline (`border`).
- **Internal Padding:** 24px (`py-6` / `px-6`), with a 6-unit (`gap-6`) internal stack rhythm.

### Inputs / Fields
- **Style:** 1px input border, transparent background (`bg-input/30` in dark), 8px radius, `shadow-xs`, height 36px.
- **Focus:** Border shifts to ring color + 3px `ring/50` ring.
- **Error / Disabled:** `aria-invalid` drives a destructive border + ring; disabled drops to 50% opacity, pointer-events off.

### Experience Timeline (signature)
A vertical rail built from `Separator` segments with a small filled `bg-primary` dot marking each role, paired with a content card to its right. The rail is the only structural ornament in the system — quiet, functional, and a clean expression of chronology.

### AI Chat Assistant (signature)
The portfolio's signature feature: a conversational way to interrogate Florent's background, persistently available from the layout (not buried on a sub-page). It is held to the same restraint bar as everything else — useful, fast, on-brand — never a novelty widget. Its presence is a live demonstration of capability, so its craft (streaming, states, keyboard access, reduced-motion) matters as much as the static surface.

## 6. Do's and Don'ts

### Do:
- **Do** keep the page near-monochrome; admit color only as a domain accent (cinema red / health green) or the focus ring.
- **Do** build hierarchy with Inter's weights (400/500/600) and spacing, not with borders or color.
- **Do** keep neutrals at chroma 0 — true grayscale, no warm/cool tint.
- **Do** verify body and muted text clear 4.5:1 (large text 3:1) in *both* light and dark themes.
- **Do** keep card radius ≤14px and shadows imperceptible (`shadow-xs`/`shadow-sm`).
- **Do** ship a `prefers-reduced-motion` alternative for every animation (the `ai1`/`ai2` chat shimmer included).
- **Do** treat the AI assistant as a first-class, prominent feature.

### Don't:
- **Don't** go over-designed or loud: no heavy animation pile-ups, no glassmorphism, no gradient text, no `background-clip: text`.
- **Don't** clutter: no walls of text, no dense competing layouts. Breathing room is part of the message.
- **Don't** reach for corporate-SaaS clichés: no hero-metric blocks, no gradient accents, no endless identical icon-card grids.
- **Don't** let the surface read as a generic shadcn/AI-default starter — that's the baseline to rise above, not settle at.
- **Don't** scatter uppercase tracked eyebrows above sections; the tracked label is reserved for featured-project kickers only.
- **Don't** pair a 1px border with a wide soft drop shadow on the same element (ghost-card tell).
- **Don't** round cards past 14px or introduce a second sans-serif family.
- **Don't** use color decoratively — if it isn't signaling domain or focus, remove it.
