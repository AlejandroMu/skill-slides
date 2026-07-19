# LaTeX Presentation (Beamer) Skill & Template

Este repositorio contiene la definición de la habilidad global (`latex-presentation`) y el paquete de estilos premium de LaTeX Beamer para ser utilizado por cualquier miembro del equipo en sus instalaciones locales de **Antigravity**.

## Estructura del Repositorio
* `SKILL.md`: Instrucciones y metadatos de la habilidad que le indican al agente de IA cómo usar y estructurar las presentaciones.
* `resources/`:
  * `custombeamer.sty`: Paquete de estilos con los colores y diseños institucionales de la Universidad ICESI.
  * `example_presentation.tex`: Presentación de ejemplo lista para compilar.
  * Logos corporativos en formato SVG vectorial.

---

## Instrucciones de Instalación en Antigravity

Para que la inteligencia artificial de **Antigravity** reconozca y pueda usar automáticamente esta plantilla en cualquier conversación, sigue estos pasos:

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
     ... (logos SVG)
     ```

3. **Listo**:
   * Antigravity detectará la habilidad automáticamente en tu siguiente conversación. Podrás pedirle cosas como:
     *"Ayúdame a hacer una presentación de DevOps usando mi plantilla de LaTeX"*
     y la IA copiará la hoja de estilos y estructurará el documento usando las macros del templete de forma autónoma.

---

## Compilación del Documento
Para que las figuras geométricas y el logo oficial colocados mediante coordenadas absolutas (`remember picture, overlay` de TikZ) se posicionen correctamente, **debes compilar el archivo `.tex` dos veces consecutivas** usando `pdflatex`:

```bash
pdflatex -interaction=nonstopmode example_presentation.tex
pdflatex -interaction=nonstopmode example_presentation.tex
```
