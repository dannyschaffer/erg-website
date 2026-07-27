# Visual & Graphics System

Companion to the top-level [`DESIGN.md`](../DESIGN.md) (brand personality, anti-references, design principles). That doc governs tone and layout; this one governs the graphics/imagery layer specifically, since the site currently has almost none — every service page is text-only, which is why they read as interchangeable. This defines one consistent, generatable style so new graphics feel like a family instead of one-off stock art.

## Why graphics, not photography

The site's existing photo assets (`property-hero.jpg`, `property-band.jpg`, `dashboard-preview.jpg`) are real, licensed photography — fine where they're used, but AI-generated photorealistic people/offices would read exactly like the "boring stock-photo corporate site" anti-reference in the root DESIGN.md, and NanoBanana isn't reliable for photorealism anyway. Abstract line-art diagrams sidestep that entirely, avoid NanoBanana's text-hallucination problem (no text in any of these), and fit "evidence over adjectives" — every graphic is a literal diagram of something true about the page (a ledger, a timeline, a lifecycle), not decoration.

## Locked palette

Pull directly from `assets/site.css` — never introduce a new color:

| Token | Hex | Use in graphics |
|---|---|---|
| `--charcoal` | `#17191d` | Background |
| `--soft` / cream | `#f6f6f4` | Outline strokes |
| `--orange` | `#f04b16` | Single focal accent only |

No gradients, no glow, no drop shadows, no secondary colors. This mirrors the existing dark `.why-panel` treatment already on every service page, so the graphics read as part of the site rather than an AI-generated overlay.

## Construction rules (apply to every image)

1. Dark charcoal background, thin cream outline strokes (1–2px weight, technical-diagram precision — not sketchy or hand-drawn).
2. Exactly **one** element per image rendered solid in orange. Everything else stays outline-only. This is the single biggest lever for making 8 images feel related without being identical — same rule, different focal point each time.
3. No text, no people, no photographic elements, no icons pulled from a generic icon set. Every motif is a custom-built diagram of something literal on that page (see table below).
4. Generous negative space — these should feel closer to an architectural or financial schematic than a marketing illustration.
5. 16:9, no baked-in title or headline (titles are set in HTML, not the image).

## Where each motif comes from

The fix for "pages look the same" is that every motif is derived directly from that page's own content structure — not a generic stand-in graphic swapped page to page.

| Page / post | Motif | Why |
|---|---|---|
| Rental Debt Collection | Ledger outline (rectangle, 4–5 ruled lines) with one orange arrow looping from bottom line back to top | Balance recovered back into the ledger |
| Collection Agency for Landlords | Simple building silhouette with a shield outline at its base, shield stroke in orange | Protection framing, not aggression |
| Unpaid Rent Collection Agency | Clock face (tick marks only, no numerals) beside a stacked-coin shape, minute hand in orange | Aging, time-sensitive balance |
| Tenant Collection Agency | Four circular nodes in a horizontal line, connected by strokes; only the 4th node filled orange | Mirrors the page's own 4-stage tenant lifecycle |
| Best Collection Agency for Unpaid Rent | Vertical 4-item checklist, one checkbox filled orange | Mirrors the page's own evaluation-criteria framing |
| Property Management Collections | Four distinct building silhouettes side by side (tower / low block / house / flat commercial), one orange baseline connecting them | Mirrors the page's own 4-vertical breakdown (multifamily / student / single-family / commercial) |
| Blog: Should Landlords Hire a Collection Agency? | One line forking into two paths; only one path orange | The decision the post is answering |
| Blog: What Happens When Unpaid Rent Goes to Collections? | Horizontal timeline, 4 tick-mark nodes, only the final node filled orange | Mirrors the post's own Reg F process timeline |

Batch 1 pages are included on purpose — the "everything looks the same" problem is worst on the 3 oldest pages since they've had the longest to sit untouched. All 6 service pages plus both posts should ship together as one visual pass.

## Placement (once images exist)

Not implemented yet — this is the target markup so dropping in a finished image later is a one-line change, not a redesign:

```html
<div class="page-hero-graphic">
  <img src="./assets/graphics/[slug]-hero.webp" alt="" loading="lazy">
</div>
```

Sits directly under `.page-intro` on service pages, and under the byline (`.article-meta`) on blog posts, full-width within `.section-inner`, capped height (~320–380px), `object-fit: cover`. `alt=""` since these are decorative diagrams, not informational images — the page's actual content already carries the information.

## NanoBanana prompts

Shared style block, prepended to every prompt below:

> Abstract editorial line-art graphic, no text, no people, no photographic elements. Dark charcoal background (#17191d). Thin cream-white (#f6f6f4) outline strokes, 1–2px weight, precise like a technical diagram, not hand-drawn. Exactly one element rendered solid in burnt-orange (#f04b16) as the single focal accent — everything else stays cream outline only. Generous negative space, no gradients, no glow, no drop shadows, no clutter. Flat vector-diagram aesthetic, restrained and institutional, closer to an architectural or financial schematic than a startup illustration.

**1. Rental Debt Collection**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: a simple ledger outline — a rectangle containing 4-5 horizontal ruled lines suggesting line items — with one curved arrow looping from the bottom line back up to the top of the ledger, rendered solid in orange, suggesting recovered money returning to the balance sheet." \
  --size 16:9 --output assets/graphics/rental-debt-collection-hero --webp
```

**2. Collection Agency for Landlords**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: a minimal multi-story building silhouette with a simple shield outline overlapping its base; only the shield's outline stroke rendered in orange, the building in cream outline only. Suggests protection, not security-guard or aggressive imagery." \
  --size 16:9 --output assets/graphics/collection-agency-for-landlords-hero --webp
```

**3. Unpaid Rent Collection Agency**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: a simple circular clock face with tick marks only (no numerals, no readable text) and a single minute hand, positioned beside a small stack of 3-4 flat coin shapes. Only the clock's minute hand rendered solid in orange. Suggests an aging, time-sensitive balance." \
  --size 16:9 --output assets/graphics/unpaid-rent-collection-agency-hero --webp
```

**4. Tenant Collection Agency**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: four small circular nodes arranged in a single horizontal line, connected by thin straight cream strokes, suggesting a four-stage progression. Only the fourth (rightmost) node filled solid in orange; the first three are outline only." \
  --size 16:9 --output assets/graphics/tenant-collection-agency-hero --webp
```

**5. Best Collection Agency for Unpaid Rent**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: a vertical checklist of four short horizontal line-items, each preceded by a small square outline checkbox. Only one checkbox filled solid in orange with a simple check mark; the other three are empty outline squares. Suggests evaluation criteria." \
  --size 16:9 --output assets/graphics/best-collection-agency-for-unpaid-rent-hero --webp
```

**6. Property Management Collections**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: an abstract skyline made of four distinct simple building silhouettes side by side — a tall slim tower, a low wide block, a small single-story house, and a flat-roofed rectangular block — all in cream outline only, with one thin horizontal orange line running beneath all four like a baseline connecting them." \
  --size 16:9 --output assets/graphics/property-management-collections-hero --webp
```

**7. Blog — Should Landlords Hire a Collection Agency for Unpaid Rent?**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: a single straight line forking into two diverging paths from one origin point. Both paths in cream outline; only one of the two diverging paths rendered solid in orange, suggesting a decision point between two courses of action." \
  --size 16:9 --output assets/graphics/blog-should-landlords-hire-hero --webp
```

**8. Blog — What Happens When Unpaid Rent Goes to Collections?**
```
python SKILL_DIR/scripts/nanobanana_api.py generate \
  "[shared style block]. Motif: a simple horizontal timeline — one straight cream line with four small tick-mark nodes spaced evenly along it, suggesting sequential process steps. Only the final (rightmost) node filled solid in orange, suggesting progression toward resolution." \
  --size 16:9 --output assets/graphics/blog-what-happens-hero --webp
```

Replace `[shared style block]` with the full paragraph above when actually running these — kept as a placeholder here so the per-image motif is easy to scan.

## Open questions

- NanoBanana can drift on strict geometric consistency across separate calls (it's not a template engine) — first-pass outputs should be spot-checked against each other for palette/weight consistency before all 8 ship, not just individually approved.
- If any come back with garbled linework or an accidental second colored element, regenerate rather than edit — cheaper and cleaner than trying to patch via `edit` mode.
