import { modes, benefits } from "../data/templates.js";
import { tones } from "../data/templates.js";

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillTemplate(template, data) {
  return template
    .replace("{product}", data.product)
    .replace("{target}", data.target)
    .replace("{benefit}", random(benefits));
}

export function generateCopy(data) {
  const selectedMode = modes[data.mode];
  const tone = tones[data.tone];

  const hook = random(selectedMode.hook);
  const body = fillTemplate(random(selectedMode.body), data);
  const cta = random(selectedMode.cta);

  return `${tone.prefix} ${hook}

  ${body}

  ${cta}

  ${tone.suffix}`;
}