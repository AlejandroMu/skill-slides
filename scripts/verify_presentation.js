const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const texFile = process.argv[2];
if (!texFile) {
    console.error("Usage: node verify_presentation.js <filename.tex>");
    process.exit(1);
}

const texPath = path.resolve(texFile);
if (!fs.existsSync(texPath)) {
    console.error(`File not found: ${texFile}`);
    process.exit(1);
}

const dir = path.dirname(texPath);
const base = path.basename(texPath, ".tex");
const logPath = path.join(dir, `${base}.log`);

console.log(`Compiling ${base}.tex in ${dir}...`);
try {
    execSync(`pdflatex -interaction=nonstopmode "${base}.tex"`, { cwd: dir, stdio: 'ignore' });
    execSync(`pdflatex -interaction=nonstopmode "${base}.tex"`, { cwd: dir, stdio: 'ignore' });
} catch (e) {
    console.warn("pdflatex command exited with warning/error. Analyzing log file...");
}

if (!fs.existsSync(logPath)) {
    console.error(`Log file not found: ${logPath}`);
    process.exit(1);
}

const logContent = fs.readFileSync(logPath, "utf8");

const lines = logContent.split(/\r?\n/);
const warnings = [];
let currentPage = 1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track pages. LaTeX output prints page numbers in square brackets when writing a page, e.g. [1] or [2]
    const pageMatch = line.match(/\[(\d+)\]/);
    if (pageMatch) {
        currentPage = parseInt(pageMatch[1], 10);
    }
    
    if (line.includes("Overfull \\vbox")) {
        // Extract size
        const sizeMatch = line.match(/Overfull \\vbox \(([^)]+) too high\)/);
        const excess = sizeMatch ? sizeMatch[1] : "unknown";
        
        let page = currentPage;
        for (let j = i; j < Math.min(i + 15, lines.length); j++) {
            const pageBracketMatch = lines[j].match(/\[(\d+)\]/);
            if (pageBracketMatch) {
                page = parseInt(pageBracketMatch[1], 10);
                break;
            }
        }
        
        warnings.push({
            type: "vbox",
            excess,
            page,
            line: i + 1,
            content: line
        });
    }
}

if (warnings.length > 0) {
    console.log("\n[WARNING] Found visual overflow issues in compiled slides:");
    warnings.forEach(w => {
        console.log(`  - Slide ${w.page}: Content overflows vertically by ${w.excess}.`);
    });
    console.log("\nAction required: Please split the overflowing slides into multiple pages or reduce the content size.");
    process.exit(2);
} else {
    console.log("\n[SUCCESS] Presentation compiled successfully with no vertical overflows!");
    process.exit(0);
}
