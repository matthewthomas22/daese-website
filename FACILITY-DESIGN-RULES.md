# Facility page design rules

A reference for the template implemented in `src/pages/FacilityPage.tsx`. Font imports and brand colors are defined in `src/App.css`. This guide documents the facility page; it does not change other pages.

All pixel equivalents assume a 16px root font size and the project's default Tailwind spacing scale. Responsive utilities apply from their breakpoint upward, until overridden.

## 1. Design direction

- Use large, condensed Oswald headings with readable Montserrat body text.
- Keep headings short, with deliberate line breaks for the main statements.
- Use red for section labels, statistics, and small numbering accents.
- Alternate white and warm off-white sections to distinguish content groups.
- Separate content with fine borders and generous whitespace rather than shadows or rounded cards.
- Align sections to the same centered container.

## 2. Fonts and typography

The fonts are loaded through Google Fonts with `display=swap`.

| Font | Tailwind utility | Usage |
| --- | --- | --- |
| Oswald | `font-oswald` | Hero title, section headings, machinery titles, large numbers |
| Montserrat | `font-montserrat` | Page default: paragraphs, labels, building names, captions, links |

Weights: `font-normal` = 400, `font-medium` = 500, `font-semibold` = 600. Regular body text inherits the site's 400 weight.

### Type hierarchy

| Role | Font / weight | Base size | At sm (640px+) | At lg (1024px+) | Line height / tracking |
| --- | --- | --- | --- | --- | --- |
| Hero h1 | Oswald / 500 | 60px (`text-6xl`) | 72px (`text-7xl`) | 96px (`text-8xl`) | 1.04 / -0.025em |
| Section h2 | Oswald / 500 | 36px (`text-4xl`) | 48px (`text-5xl`) | 60px (`text-6xl`) | 1.12 / -0.025em |
| Machinery h3 | Oswald / 500 | 24px (`text-2xl`) | 30px (`text-3xl`) | Same | Tailwind default: 32px, then 36px / -0.025em |
| Building name | Montserrat / 600 | 16px (`text-base`) | 18px (`text-lg`) | Same | 24px / -0.025em |
| Statistic value | Oswald / 400 | 48px (`text-5xl`) | Same | 60px (`text-6xl`) | 1 / -0.025em |
| Statistic unit | Oswald / inherited 400 | 20px (`text-xl`) | Same | Same | 28px |
| Building count | Oswald / 400 | 30px (`text-3xl`) | Same | Same | 36px |
| Section eyebrow / machinery number | Montserrat / 600 | 11px | Same | Same | Inherited line height / 0.22em; uppercase |
| Intro paragraph | Montserrat / 400 | 14px (`text-sm`) | 16px (`text-base`) | Same | 28px, then 32px |
| Hero paragraph | Montserrat / 400 | 14px | 16px | Same | 28px throughout |
| Regular description | Montserrat / 400 | 14px | Same | Same | 28px; building descriptions use 24px |
| Machinery brand list | Montserrat / 600 | 11px | Same | Same | 24px / 0.08em; uppercase |
| Statistic label | Montserrat / 500 | 12px (`text-xs`) | Same | Same | 16px / 0.025em |
| Hero explore link | Montserrat / 600 | 12px | Same | Same | 16px / 0.16em; uppercase |
| Gallery title | Montserrat / 600 | 14px | 16px | Same | Tailwind default: 20px, then 24px |
| Gallery caption | Montserrat / 400 | 12px | Same | Same | 20px |

Use tight tracking for large headings and wider tracking for small uppercase labels. Avoid uppercase long paragraphs.

### Text width limits

| Utility | Maximum width | Used for |
| --- | --- | --- |
| `max-w-xs` | 320px | Gallery introduction |
| `max-w-sm` | 384px | Building section introduction |
| `max-w-md` | 448px | Hero description, machinery descriptions and brands |
| `max-w-lg` | 512px | Overview and machinery introductions |
| `max-w-3xl` | 768px | Hero title |

These are maximums: text still shrinks to fit its container.

## 3. Container and responsive behavior

```tsx
const container = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16";
```

- Center with `mx-auto` and use the available width with `w-full`.
- Maximum outer container width: 1280px (`max-w-7xl`), including padding under border-box sizing.
- Horizontal padding: 24px per side on base screens, 40px at sm, 64px at lg.
- Full-width section backgrounds wrap this inner container.

| Breakpoint | Minimum viewport width | Layout changes |
| --- | --- | --- |
| Base | Below 640px | Single-column content; smaller type and section spacing |
| `sm` | 640px | Larger type; three statistic columns; gallery heading and introduction sit side by side |
| `md` | 768px | Two-column machinery grid and photo gallery |
| `lg` | 1024px | Two-column section introductions; split building directory; largest heading sizes |

There are no additional xl or 2xl overrides in this page.

## 4. Padding, margins, and gaps

`p` is padding, `m` is margin, `x` is horizontal, `y` is vertical, `t` is top, and `b` is bottom. `gap` spaces grid or flex children. For example, `py-16` means 64px at both the top and bottom, not 64px total.

### Main spacing rules

| Element | Tailwind utilities | Size / behavior |
| --- | --- | --- |
| Standard section padding | `py-16 sm:py-24` | 64px top/bottom; 96px at sm+ |
| Hero top padding | `pt-40` | 160px, providing room for the fixed navigation |
| Hero bottom padding | `pb-16 sm:pb-20` | 64px; 80px at sm+ |
| Hero label to title | `mb-6` | 24px |
| Hero title to description | `mt-7` | 28px |
| Hero description to link | `mt-8` | 32px |
| Hero link text to arrow | `gap-6` | 24px |
| Hero link underline spacing | `pb-2` | 8px |
| Section label to heading | `mb-5` | 20px |
| Overview intro column gap | `gap-8 lg:gap-20` | 32px; 80px at lg+ |
| Machinery intro column gap | `gap-6 lg:gap-20` | 24px; 80px at lg+ |
| Building directory column gap | `gap-10 lg:gap-20` | 40px; 80px at lg+ |
| Overview paragraph separation | `mt-4` | 16px |
| Heading to building introduction | `mt-6` | 24px |
| Intro to statistics / machinery grid | `mt-12 sm:mt-16` | 48px; 64px at sm+ |
| Statistic cell vertical padding | `py-8` | 32px top/bottom |
| Statistic cell horizontal padding | `sm:px-8 sm:first:pl-0` | 32px per side at sm+; first cell has no left padding |
| Statistic value to unit | `gap-2` | 8px |
| Statistic value to label | `mt-3` | 12px |
| Building row padding | `py-6` | 24px top/bottom |
| Building number to text | `gap-4` | 16px |
| Building name to description | `mt-2` | 8px |
| Machinery column gap | `gap-x-12` | 48px |
| Machinery item padding | `py-8 sm:py-10` | 32px top/bottom; 40px at sm+ |
| Machinery title to description | `mt-4` | 16px |
| Machinery description to brands | `mt-6` | 24px |
| Gallery heading group to photos | `mb-10` | 40px |
| Gallery heading to introduction | `gap-6` | 24px |
| Photo grid gaps | `gap-8` | 32px |
| Photo caption padding | `py-5` | 20px top/bottom |
| Caption number to text | `gap-4` | 16px |
| Caption number top adjustment | `pt-1` | 4px |
| Caption title to description | `mt-1` | 4px |
| Overview anchor scroll offset | `scroll-mt-32` | 128px scroll margin for the fixed navbar |

### Spacing scale used

| Token | rem | px |
| --- | --- | --- |
| 1 | 0.25 | 4 |
| 2 | 0.5 | 8 |
| 3 | 0.75 | 12 |
| 4 | 1 | 16 |
| 5 | 1.25 | 20 |
| 6 | 1.5 | 24 |
| 7 | 1.75 | 28 |
| 8 | 2 | 32 |
| 10 | 2.5 | 40 |
| 12 | 3 | 48 |
| 16 | 4 | 64 |
| 20 | 5 | 80 |
| 24 | 6 | 96 |
| 32 | 8 | 128 |
| 40 | 10 | 160 |

## 5. Colors and surfaces

| Role | Value / utility |
| --- | --- |
| Brand accent | `#d93e45` / `text-merahDaese` |
| Main surface | `#ffffff` / `bg-white` |
| Alternate section surface | `#f5f4f1` / `bg-[#f5f4f1]` |
| Main text | `text-neutral-900` |
| Secondary copy | `text-neutral-600` |
| Statistic units | `text-neutral-500` |
| Machinery brands | `text-neutral-800` |
| Borders on white | `border-neutral-200` |
| Borders on off-white | `border-neutral-300` |
| Hero heading | `text-white` |
| Hero label / description | `text-white/80` / `text-white/85` |
| Hero overlay | Left-to-right black gradient: 80%, 55%, 20% opacity |
| Hero link border | White at 50% opacity; solid white on hover |

Neutral colors use the project's Tailwind palette. Divider utilities use 1px borders. Gallery images use a neutral-200 placeholder background.

## 6. Section composition

### Hero

- Minimum height: 560px on base screens; 620px at sm+.
- Content aligns to the bottom of the hero with `items-end`.
- Full-bleed photo uses `object-cover` and an absolute position.
- A darker left side of the overlay supports left-aligned white text.
- Keep the eyebrow, title, description, and anchor link in that order.
- The hero image is eager by default and has `fetchPriority="high"`.

### Overview and statistics

- Overview introduction becomes two equal columns at lg+.
- Supporting text aligns to the bottom with `self-end`.
- Statistics stack on base screens and become three equal columns at sm+.
- Use top/bottom rules around the statistics strip, horizontal separators on mobile, and vertical separators at sm+.

### Building directory

- Use a warm off-white background.
- At lg+, use `0.85fr 1.15fr` columns, giving the directory more space than the heading.
- Within each row, reserve 48px for the number, increasing to 64px at sm+.
- Use a red count, a semibold building name, and one short supporting sentence.

### Machinery

- Use a white background and two equal introduction columns at lg+.
- Equipment articles become two columns at md+.
- Each article starts with a thin top rule and small red number.
- Follow with an Oswald heading, a description, and a small uppercase brand list.

### Gallery

- Use a warm off-white background and a two-column grid at md+.
- The first photo spans both columns at md+.
- First image aspect ratio: 4:3 on base screens, 2:1 at sm+.
- Remaining images: 4:3 at all sizes.
- Images use `object-cover`, lazy loading, and asynchronous decoding.
- Captions use a small red index beside a title and secondary description.

## 7. Reusable class recipes

```tsx
const container = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.22em]";
const heading = "font-oswald text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl";
```

Example section using the same rules:

```tsx
<section className="bg-[#f5f4f1] py-16 sm:py-24">
  <div className={container}>
    <p className={`${eyebrow} mb-5 text-merahDaese`}>
      01 / Section label
    </p>
    <h2 className={heading}>A short, clear heading.</h2>
    <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
      Supporting copy with a comfortable line length and generous leading.
    </p>
  </div>
</section>
```

Use these recipes inside a wrapper with `bg-white font-montserrat text-neutral-900`, with the existing project font and Tailwind setup loaded.

## 8. Rules for extending the template

- Preserve the typography hierarchy: one h1, section h2s, and item h3s.
- Keep the 64px/96px section rhythm and shared container alignment.
- Use short uppercase labels only for navigation cues, numbering, and brands.
- Keep paragraphs within the documented maximum widths.
- Stack content on narrow screens; introduce columns at the documented breakpoints.
- Preserve image aspect ratios to reserve space during loading.
- Provide meaningful image alt text and visible keyboard focus on links.
- This template uses no entrance animation; content is visible immediately.
