# LaTeX Presentation (Beamer) Skill & Template

Este repositorio contiene la definición de la habilidad global (`latex-presentation`) y el paquete de estilos premium de LaTeX Beamer para ser utilizado por cualquier miembro del equipo en sus instalaciones locales de **Antigravity**.

## Estructura del Repositorio
* `SKILL.md`: Instrucciones y metadatos de la habilidad que le indican al agente de IA cómo usar y estructurar las presentaciones, incluyendo las reglas de espaciado y prevención de solapamientos.
* `resources/`:
  * `custombeamer.sty`: Hoja de estilos con los colores y diseños institucionales de la Universidad ICESI.
  * `example_presentation.tex`: Presentación de ejemplo lista para compilar.
  * Logos corporativos en formato SVG vectorial.
* `scripts/`:
  * `verify_presentation.js`: Script de verificación automatizada que compila las diapositivas y escanea los archivos de registro (`.log`) para detectar advertencias de desbordamiento de contenido (`Overfull \\vbox`).

---

## Instrucciones de Instalación en Antigravity

Para que la inteligencia artificial de **Antigravity** reconozca y pueda usar automáticamente esta plantilla y sus scripts de validación, sigue estos pasos:

1. **Localiza tu carpeta de configuración global de Antigravity**:
   * En Windows, la ruta por defecto es:
     `%USERPROFILE%\.gemini\config`
   * Si no existe la subcarpeta `skills/`, créala.

2. **Instala la Skill**:
   * Copia la carpeta de este repositorio (o clónalo directamente) dentro de la carpeta `skills` y llámala `latex-presentation`.
   * La estructura final debe lucir exactamente así:
     ```text
     %USERPROFILE%\.gemini\config\skills\latex-presentation\SKILL.md
     %USERPROFILE%\.gemini\config\skills\latex-presentation\resources\custombeamer.sty
     %USERPROFILE%\.gemini\config\skills\latex-presentation\resources\example_presentation.tex
     %USERPROFILE%\.gemini\config\skills\latex-presentation\scripts\verify_presentation.js
     ... (logos SVG)
     ```

3. **Listo**:
   * Antigravity detectará la habilidad automáticamente en tu siguiente conversación. Podrás pedirle cosas como:
     *"Ayúdame a hacer una presentación de DevOps usando mi plantilla de LaTeX"*
     y la IA estructurará el documento usando las macros y los parámetros de espaciado correcto de manera autónoma.

---

## Verificación Automatizada de Layout y Spacing

Para evitar textos solapados o desbordados, la skill incluye un script de análisis automático en la subcarpeta `scripts/`. Cuando la IA genere o edite tus diapositivas, le puedes pedir que ejecute la verificación ejecutando:

```bash
node "%USERPROFILE%\.gemini\config\skills\latex-presentation\scripts\verify_presentation.js" archivo.tex
```

### ¿Qué hace este script?
1. Compila la presentación dos veces consecutivas en segundo plano (para resolver todas las coordenadas relativas de TikZ).
2. Lee el archivo `.log` generado por LaTeX.
3. Busca advertencias de tipo `Overfull \vbox` (que indican que el texto de un slide es demasiado alto y se saldrá de la pantalla).
4. Informa exactamente qué slide tiene problemas de espacio para que la IA proceda a dividirlo en dos o ajustar los márgenes de forma inmediata.

---

## Compilación Manual
Si deseas compilar la presentación manualmente, recuerda hacerlo siempre dos veces seguidas para que el logo y los marcos se ubiquen de forma absoluta en sus coordenadas reales:

```bash
pdflatex -interaction=nonstopmode example_presentation.tex
pdflatex -interaction=nonstopmode example_presentation.tex
```
