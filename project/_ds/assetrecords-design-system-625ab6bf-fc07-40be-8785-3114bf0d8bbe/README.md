# AssetRecords — Design System

A design system for the **AssetRecords** marketing website and adjacent assets. AssetRecords is a property-management SaaS at **assetrecords.io** that helps landlords and portfolio operators track buildings, units, leases, maintenance, inspections, and cost recoveries — replacing the spreadsheet sprawl that usually does this job.

This folder is the brand source of truth for new marketing pages, decks, social cards, and one-off mocks that need to feel native to AssetRecords. Pair it with the SKILL.md file at the root to use it as a Claude Skill in Claude Code.

> **Sources**
> – Figma file: *"Asset Records Redesign 2025"* (mounted as a virtual filesystem for this project; principal source of truth — colors, type, components, copy)
> – Product domain: `app-dev.horizon.assetrecords.io`, marketing/product domain: `assetrecords.io`
> – No external codebase was attached; structure and components were reconstructed from the Figma `.fig` pseudocode.

---

## Product context

AssetRecords is a B2B property-management platform aimed at landlords, asset managers, property managers and their service providers. Surfaces visible in the Figma:

| Surface | What it does |
| --- | --- |
| **Portfolio Dashboard** | Cards & charts for occupancy, buildings, units, tenants, revenue |
| **Buildings / Parks / Rentable Spaces** | Hierarchical setup of physical assets |
| **Building Info** | Per-property dossier — documents, occupants, services |
| **Lease Management** | Lease lifecycle for landlords and tenants |
| **Document Setup** | Doc templates, request/upload flows |
| **Tasks & Checklists** | Inspections, work orders, recurring jobs |
| **Assets & Maintenance** | Asset register and work order management |
| **Recoveries** | Cost recovery requests (with a tenant mobile companion) |
| **Settings → Users / Properties / Templates** | Admin |
| **System → Emails / Notifications / Under Construction** | Transactional surfaces |
| **Login / Business Setup** | Onboarding (this is the public-edge of the app) |

A separate **Tenant** mobile companion exists (Recoveries / Phone-fixed-height frames) — small, blue-accented, navy nav.

The **marketing website** does not exist yet in the file — this design system is what's needed to build it. The closest reference is `/Exploration/Colour-Strategy → AssetRecords-Conceptual Landing`, which mixes nav + dashboard previews on a `#F8FAFF` surface.

---

## Index — what's in this folder

| Path | What it is |
| --- | --- |
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Claude Skill manifest. Drop this folder in `~/.claude/skills/` to use the system in Claude Code. |
| `colors_and_type.css` | The single source of truth for tokens. CSS variables for color, type, spacing, radii, shadows. Import this in every artifact. |
| `assets/` | Logos (full + mark, light + dark) and any other raw brand assets. |
| `preview/` | Cards that populate the Design System tab — color swatches, type specimens, components, brand. |
| `ui_kits/marketing/` | Marketing-site UI kit — landing page, pricing, features, footer, etc. Built from the system. |

---

## Content fundamentals

The product copy uses a **calm, practical, slightly aspirational** voice. Sentences are short and concrete. The reader is addressed directly as **you**; the company refers to itself by name (**AssetRecords**) or in the first-person plural (**we**) — never "us / our team" filler. Marketing-side copy leans into the spreadsheet-pain narrative.

### Tone in one sentence
> "Smarter Portfolio Management Starts Here. Track assets, log issues, and stay compliant without the chaos of spreadsheets."
> — login hero from `/Login-Flow/Login-Flow`

### Casing
- **Headings & section titles**: Title Case ("Portfolio Overview", "Equites Portfolio", "Account created successfully")
- **Eyebrows / chips / metadata**: ALL CAPS, tight tracking. Used very sparingly — usually inside the product nav.
- **Body & UI labels**: Sentence case ("Enter your email address", "Forgot your password? Reset Password").
- **Buttons**: Sentence case, no terminal punctuation ("Log In", "Cancel", "Create account").

### Voice tells (use these phrases)
- "**Smarter** portfolio management" — *smarter* is the brand adjective, not "better" or "powerful"
- "**Without the chaos of spreadsheets**" — the explicit foil
- "**Stay compliant**" — compliance is a recurring promise
- "**Track**, **log**, **manage**, **assign**, **schedule**" — verbs preferred over nouns
- "**Your portfolio**, **your team**, **your tenants**" — possessive, ownership-framed

### Don't
- ❌ Hype words: "revolutionary", "AI-powered", "next-gen", "magic"
- ❌ Hard-sell exclamation: "Sign up now!", "Don't miss out!"
- ❌ Acronym soup: spell things out ("Property Management Information System", not "PMIS") until convention is established
- ❌ Emoji as content — they appear only in the Mood/Mood2 icon set and never in product or marketing copy
- ❌ Em-dashes as ASCII (`--`). Use a real em-dash with thin spaces around it.

### Examples — do / don't

| ❌ Don't | ✅ Do |
| --- | --- |
| "Revolutionize your property management 🚀" | "Smarter portfolio management starts here." |
| "Powerful AI inspections" | "Run inspections in the field. Sync when you're back online." |
| "We're trusted by 1000s of teams!!" | "Built for landlords, asset managers and the service providers who keep buildings running." |
| "Click here to learn more" | "See how Lease Management works →" |

### A note on numbers
Number-led marketing tiles (in the conceptual landing) are quiet: "127 Buildings in this portfolio", "863 Units in this portfolio", "+15 this month". Use real-feeling values, not round vanity metrics ("10x faster!").

---

## Visual foundations

### Mood
**Quiet, structured, navy.** The brand's gravity comes from a single dark navy (`#0F2F53`) used at large scale, broken up by generous white-space and one accent color (a clean leaf-green `#5EC090`) that mostly lives in the logo mark plus a few success/positive moments. The product feels like enterprise software that respects you: lots of breathing room, real data tables, and zero illustrated mascots.

### Color
- **AR Navy `#0F2F53`** is the primary. It's the button fill, the nav fill on dark surfaces, and the color of every heading at marketing scale.
- **AR Navy Deep `#0C2138` / Ink `#040F43`** are reserved for the top app bar and full-bleed dark sections.
- **AR Green `#5EC090`** is the accent — used in the logo mark, in single-purpose moments (success states, "new" badges, the occasional underline). It's never a button fill on marketing pages; it's a *pointer*.
- A full **Mantine-derived palette** ships in `colors_and_type.css` (gray, dark, blue, red, orange, yellow, teal, indigo, plus the AR Primary scale). Use these for status, never for vibe.
- **Backgrounds** are either pure white or a near-white blue-tinted `#F8FAFF` (used as the conceptual landing surface). No gradients in body content. The one place a gradient appears is the **hero**: a vertical green → navy → deeper-navy blend (see `--ar-hero-gradient`) overlaid with a faint indigo wash — sampled directly from the login screen.

### Type
- **Display & body: Inter** (web fallback for SF Pro, which the product uses natively). Headings 700, body 400/500, eyebrows 600 uppercase with 0.08em tracking.
- **Accent: Manrope** — only for very large display moments (cover poster treatments, single-word hero lockups). The Figma cover uses Manrope 700 with 7px letter-spacing for the word "Redesign".
- **Mono:** system stack (`ui-monospace, SF Mono, Menlo`) — used in code chips, version numbers.
- Marketing scale runs larger than product scale: marketing `h1` is **56px**, product `h1` is **34px**. Both stacks ship as `--fz-h*` and `--fz-prod-h*`.
- Line-heights: 1.15 display, 1.30 headings, 1.55 body — directly from the product.
- ⚠️ **SF Pro is not free for the web** — Inter is used as the substitute. If you have an SF Pro license you can swap by changing `--font-sans` / `--font-display` in `colors_and_type.css`.

### Spacing & rhythm
4px base, t-shirt scale 2xs (4) → 5xl (128). Marketing sections breathe at 96–128px vertical; product cards at 16–24px internal padding. Cards use a **24px** internal pad and a **12px** corner radius almost universally.

### Borders & radii
- Subtle hairlines: `1px solid #E9ECEF` (`--border`).
- Strong dividers: `#CED4DA`.
- Radii ladder: 2 / 4 / 8 / 12 / 16 / 24 / pill. The **4px** small radius is the workhorse for buttons & inputs (per Figma `radius=small`); cards use 12px; modals and hero cards use 15–16px. No big "pill"-everywhere look.

### Cards
A card is **white surface, 12–16px radius, 1px `#F1F3F5` border OR no border + ultra-soft shadow, 24px padding**. The shadow is:
```
0 1px 1px 0 rgba(62,70,113,0.06),
1px 1px 8.4px 0 rgba(62,70,113,0.08)
```
This `rgba(62,70,113,…)` (navy-tinted) shadow is the most-used shadow in the Figma. It reads as a *blueprint blue* lift, not a generic gray drop. Pop-out shadows (menus, modals) layer in a wider `0 20px 25px -5px rgba(0,0,0,0.05)`.

### Buttons
- **Primary**: AR Navy fill, white text, 4px radius, 42px tall (medium) / 36px (small), 22px horizontal pad, font-size 16, weight 600. No icon by default; icon slots exist left & right.
- **Light**: pale blue fill `#F6F9FF`, navy text — the "Cancel" / secondary action.
- **Subtle**: transparent → `#EEF3FF` on hover.
- **Outline**: 1px navy border, navy text on white.
- Hover = `--accent-hover` (`#1B4762`). Press = `--accent-press` (`#0C2138`). No scale, no shadow shift — color only.

### Inputs
50px tall (`size=lg`), 4px radius, 1px `#CED4DA` border, 16px padding, placeholder `#868E96`. Label sits **above** the field at 18px navy. Focus ring is `--shadow-focus` (navy at 18% opacity, 3px ring) — never the browser default.

### Imagery
Product screenshots are the primary "imagery." The Figma uses real dashboard captures placed inside white cards. When generic imagery is needed it's **architectural / wide-angle building photography**, cool-toned, low-saturation — never warm sepia, never people-in-suits stock. If you don't have a real photo, use a neutral light-gray placeholder, not an AI-rendered illustration.

### Backgrounds
- Full-bleed white is the default for marketing.
- **`#F8FAFF`** (very pale blue) is the alternate band — used to separate sections without a hard divider.
- **AR Navy `#0F2F53`** is the dark band — used for footer, testimonial breakout, hero on darker variants.
- **Hero gradient** (`--ar-hero-gradient`) is reserved for the one true hero per page. It's a vertical green→navy fade, overlaid with a 20%-opacity indigo wash. Lifted from the login screen.

### Motion
The Figma is static — the product has no documented animation system. The convention to follow:
- **Hover**: 120ms color/opacity transitions. No transforms.
- **Press**: instant color shift, no scale.
- **Reveal**: 240ms ease-out, opacity + 8px upward translate. Stagger by 60ms inside a row.
- **No bounces, no spring physics, no shimmer skeletons.** AssetRecords is calm — animation is functional only.

### Transparency & blur
- Glass / blur surfaces are **not** used in the product. Stick to solid surfaces.
- Overlays use solid black at 40–60% opacity beneath modals.
- Notification dots use a small solid white halo over their badge.

### Layout rules
- Marketing max-width: **1280px** content, with 1440 max viewport hero.
- Side gutters: 24px mobile, 48px tablet, 96px desktop.
- 12-column grid with 24px gutters at desktop.
- The top nav is **fixed**, 64–72px tall, white with a `--shadow-nav` hairline, AR Navy text. On dark hero pages it becomes transparent with white text and gains the shadow on scroll.
- Footer is AR Navy full-bleed.

---

## Iconography

The product uses the **Tabler Icons** library — confirmed by the `/Tabler-Icons` page in the Figma (Buildings, Doors, Keys, Wallets, etc, organized into Tabler's exact category set). All icons are **stroke-style, 1.5px stroke, 24px viewBox** in their native form, scaled to:
- **size=12** — inline meta
- **size=14** — chip labels
- **size=16** — small UI
- **size=18** — default button icon
- **size=20** — list-item icon
- **size=26** — nav rail
- **size=32** — feature tile

Marketing pages should pull Tabler Icons from the **CDN** (no icon font in the project):

```html
<!-- Tabler Icons v3 — use the icon's <svg> directly or fetch one-off -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.39.0/dist/tabler-icons.min.css">
<!-- usage: <i class="ti ti-building"></i> -->
```

Or import inline SVGs from `https://api.iconify.design/tabler/<icon-name>.svg`.

**Color**: icons inherit `currentColor`. In nav and dark surfaces they're white; on light surfaces they're `--fg-strong` (navy) for emphasis or `--fg-muted` for inline meta. Brand-green icons are reserved for success / positive moments.

**Logos**: provided in `/assets`:
- `logo-full-dark.svg` — green mark + navy wordmark, for white backgrounds
- `logo-full-light.svg` — green mark + white wordmark, for navy backgrounds
- `logo-mark.svg` — icon only (green checkmark over navy ribbon)
- Plus the source pieces: `logo-mark-green.svg`, `logo-mark-white.svg`, `logo-wordmark.svg`

**Emoji & Unicode glyphs**: not used. The only Unicode in the product is `→` for "next" affordances ("Forgot your password? Reset Password →") and the em-dash `—` for clarifying clauses.

⚠️ **Substitution flag**: The product's native font is **SF Pro**, which can't be redistributed on the web. The system uses **Inter** as the substitute. Behaviour & spacing match closely. If you have SF Pro licensed (or are on Apple platforms), update the `--font-sans` and `--font-display` variables in `colors_and_type.css`.

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
<style>
  .hero {
    background: var(--ar-hero-gradient);
    color: var(--fg-on-dark);
    padding: var(--space-4xl) var(--space-3xl);
  }
  .btn-primary {
    background: var(--accent); color: var(--accent-fg);
    padding: 0 22px; height: 42px; border-radius: var(--radius-sm);
    font: 600 var(--fz-md)/40px var(--font-sans);
    border: none; cursor: pointer;
  }
  .btn-primary:hover { background: var(--accent-hover); }
</style>
```
