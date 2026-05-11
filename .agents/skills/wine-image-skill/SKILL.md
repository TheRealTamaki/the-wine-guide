---
name: wine-image-skill
description: Use when Codex needs to create original iPhone-style wine images for Wineology posts, prepare WebP assets for thumbnails or hero sections, or report image field values for post frontmatter and WineQuiz props without editing article files.
---

# Wine Image Skill

## Overview

Create one relevant Wineology post image that feels like Claire took it on her iPhone: useful, natural, slightly imperfect, and specific to the article. This skill only creates and optimizes image files. It does not edit MDX, Astro, frontmatter, props, copy, or page structure.

## Hard Limits

- Do not modify the post file. Read it only to understand topic, category, slug, existing image paths, and the likely hero context.
- Do not change `ogImage`, `heroImage`, `heroAlt`, imports, components, or article text.
- Do not create multiple visual concepts unless the user explicitly asks for variants.
- Do not use visible text, fake wine labels, fake brand marks, watermarks, or UI overlays in the image.
- Do not produce glossy stock photography, studio lighting, perfectly staged catalog shots, or hyper-polished AI imagery.

## Workflow

1. Identify the post slug and category from the requested file path or article frontmatter.
2. Read enough of the post to understand the occasion, wine style, food pairing, or buying scenario.
3. Generate a single horizontal image, defaulting to 1600 by 900 pixels.
4. Save the generated source asset outside the article file, then optimize it to WebP.
5. Place the finished `.webp` asset under `public/images/`, following existing category conventions:
   - Existing category folder in use, such as `public/images/gift-guides/`: use `public/images/<category>/<slug>.webp`.
   - Existing flat best-wines convention: use `public/images/<slug>.webp`.
   - If the post already has a clear image directory pattern, match it.
6. Report the final public path and the exact fields the caller should use:
   - `ogImage: /images/<path>.webp`
   - `heroImage="/images/<path>.webp"` when a `WineQuiz` hero image is present
   - `heroAlt="..."` as a concise literal description

## Image Direction

Use an amateur wineblogger photo style:

- Shot on an iPhone, natural window light or outdoor shade.
- Real table, kitchen counter, picnic blanket, grocery cart, cooler, dinner setup, or shelf depending on the article.
- Slightly casual composition: one edge cropped, imperfect glass placement, real reflections, normal home texture.
- Wine should be the clear subject, but the scene should explain the post topic.
- Keep depth of field realistic. Avoid fake bokeh blobs, surreal props, plastic shine, and over-saturated colors.
- Prefer a human-scale moment over a product lineup unless the article is explicitly about a lineup.

Prompt pattern:

```text
Amateur iPhone photo for a Wineology article about [topic]. [Specific scene tied to the post]. Natural light, real home setting, casual composition, slightly imperfect framing, high quality, realistic wine glasses and bottles, no readable labels, no text, no watermark, not stock photography, not studio lighting.
```

## Optimization

Run the bundled optimizer after generation:

```powershell
node .agents/skills/wine-image-skill/scripts/optimize-wine-image.mjs --input <source-image> --output public/images/<slug>.webp --width 1600 --height 900 --quality 82
```

Use `--width 1200 --height 675` only when the site pattern clearly favors smaller images. Keep quality between `78` and `86`; default to `82`.

The script requires `sharp`. If it is missing, install it in the project with `npm install -D sharp`, then rerun the optimizer. Do not commit dependency changes unless the user asked for that.

## Quality Check

Before reporting completion:

- Confirm the output file exists and is WebP.
- Confirm dimensions are 16:9 and at least 1200 pixels wide.
- Confirm the file is reasonably compressed. Aim for under 350 KB when possible without obvious artifacts.
- Visually inspect the image when tooling allows. Reject images with fake text, warped glasses, broken hands, impossible bottle shapes, or glossy stock-photo styling.
- Return only the asset path and suggested field values. Mention clearly that the post itself was not edited.
