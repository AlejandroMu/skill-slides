---
name: latex-presentation
description: Generates LaTeX presentation (Beamer) files using custom premium styles and vibrant color palettes.
---

# LaTeX Presentation Generation Skill

Use this skill when the user asks you to create a LaTeX presentation or edit existing slides. This skill provides a premium Beamer template system (`custombeamer.sty`) featuring modern designs and a vibrant color scheme (#5454e9, #e4eb60, #865cf0, #4cb978, #f0681a).

## Getting Started

1. **Locate the Package**: The style package and resources are stored in the `resources/` directory located in the same parent directory as this `SKILL.md` file (refer to the `<skills>` section in your system prompt for the absolute path to this skill folder).
2. **Setup the Project**: When writing a presentation for the user, you **must copy** `custombeamer.sty` from its location in the skill's `resources/` folder to the user's workspace directory (the same folder as the `.tex` file being compiled).
3. **Load the Package**: Include `\usepackage{custombeamer}` in the preamble of the presentation file.
4. **Beamer Setup**: Use `\documentclass[aspectratio=169]{beamer}` for a modern widescreen presentation.

---

## Macro Reference & Styles

Use the following custom commands to construct slides. This ensures a clean, premium, and structured look.

### 1. Title Slides (Portadas)

- `\titleSlideMinimalist{Title}{Subtitle}{Author}{Date}`
  * *Style*: Clean, vibrant blue background with background shapes, with title and author boxes in white and lime.
- `\titleSlideSplit{Title}{Subtitle}{Author}{Date}`
  * *Style*: Vertically split. Left 45% is a solid vibrant blue background containing the title; right 55% contains the author and date on a light background.
- `\titleSlideDarkMode{Title}{Subtitle}{Author}{Date}`
  * *Style*: High-impact dark mode background (dark blue mixed with black) with a neon lime accent line.

### 2. Agenda / Table of Contents

- `\agendaSlideNumbered{Title}{Item 1}{Item 2}{Item 3}{Item 4}`
  * *Style*: Clean vertical list where each item is numbered inside a distinct colored circle.
- `\agendaSlideCards{Title}{Item 1}{Item 2}{Item 3}{Item 4}`
  * *Style*: 2x2 grid layout of rounded-corner colored cards.
- `\agendaSlideProgress{Title}{ActiveIndex (1-4)}{Item 1}{Item 2}{Item 3}{Item 4}`
  * *Style*: Highlights the current active section (using an orange badge) and dims the other items in grey. Use this as a recurring transition slide throughout the deck.

### 3. Section Dividers (Transiciones de Sección)

- `\sectionSlideSolid{SectionNum}{Title}{Subtitle}`
  * *Style*: Full-bleed vibrant blue background with lime section number and white title.
- `\sectionSlideStripe{SectionNum}{Title}{Subtitle}`
  * *Style*: Clean white background with a thick orange stripe on the left and a giant light-grey number overlay on the right.
- `\sectionSlideDark{SectionNum}{Title}{Subtitle}`
  * *Style*: Sleek dark background with purple section number and a neon lime horizontal rule.

### 4. Content Slides

- `\contentSlideBulletCard{SlideTitle}{BulletListContent}{CardTitle}{CardBodyContent}`
  * *Style*: Two-column layout. Left column (58%) contains standard bullets. Right column (38%) contains a styled purple callout card. Floating title at the top-right, aligned with the top-left logo.
- `\contentSlideTwoCols{SlideTitle}{Col1Header}{Col1Body}{Col2Header}{Col2Body}`
  * *Style*: 50/50 vertical split with bold colored column headers (blue and purple) for comparisons. Floating title at the top-right.
- `\contentSlideQuoteStat{SlideTitle}{HugeStatOrKeyword}{LabelBelowStat}{ItalicQuoteOrTakeaway}`
  * *Style*: Centered, high-impact key takeaway slide. Shows a huge orange statistic/phrase, a label, and a large italic quote with a background quotation mark. Floating title at the top-right.

---

## Code Example

Here is a quick template structure for your slides:

```latex
\documentclass[aspectratio=169]{beamer}
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}
\usepackage{custombeamer}

\begin{document}

% Portada
\titleSlideSplit{Título de la Presentación}{Subtítulo del tema}{Autor}{Institución y Fecha}

% Agenda
\agendaSlideCards{Temas a Tratar}{Primer Tema}{Segundo Tema}{Tercer Tema}{Cuarto Tema}

% Sección 1
\sectionSlideStripe{01}{Primer Tema}{Breve descripción}

% Diapositiva con Takeaway
\contentSlideBulletCard{Título de Diapositiva}
  {
    \begin{itemize}
      \item Punto importante uno.
      \item Punto importante dos.
    \end{itemize}
  }
  {Importante}
  {Este es un recuadro destacado al lado de las viñetas.}

\end{document}
```
