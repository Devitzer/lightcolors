type ColorMode = "none" | "basic" | "256" | "truecolor";

function detectColorMode(): ColorMode {
  if (!process.stdout.isTTY) return 'none';

  const depth = process.stdout.getColorDepth();
  if (depth >= 24) return 'truecolor';
  if (depth >= 8) return '256';
  if (depth >= 4) return 'basic';
  return 'none';
}

const colorMode = detectColorMode();

// Function to add colors
function color(text: string, code: string, required: ColorMode): string {
  const levels: ColorMode[] = ['none', 'basic', '256', 'truecolor'];

  if (levels.indexOf(colorMode) < levels.indexOf(required)) {
    return text; // terminal cant display the color
  }

  return `${code}${text}\x1b[0m`;
}

// BASIC COLORS

export function black(text: string): string {
    return color(text, "\x1b[30m", "basic");
}

export function red(text: string): string {
    return color(text, "\x1b[31m", "basic");
}

export function green(text: string): string {
    return color(text, "\x1b[32m", "basic");
}

export function yellow(text: string): string {
    return color(text, "\x1b[33m", "basic");
}

export function blue(text: string): string {
    return color(text, "\x1b[34m", "basic");
}

export function magenta(text: string): string {
    return color(text, "\x1b[35m", "basic");
}

export function cyan(text: string): string {
    return color(text, "\x1b[36m", "basic");
}

export function white(text: string): string {
    return color(text, "\x1b[37m", "basic");
}

// UNCOMMENT LINES BELOW FOR BASIC COLORS TEST
// console.log("Basic Colors");
// console.log(red("Red"), green("Green"), yellow("Yellow"), blue("Blue"), magenta("Magenta"), cyan("Cyan"), white("White"));

