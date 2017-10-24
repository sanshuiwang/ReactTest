function toCls(fhh) {
  return (fhh - 32) * 5 / 9;
}

function toFhh(cls) {
  return (cls * 9 / 5) + 32;
}

export function tryConvert(tmpt, scale) {
  const input = parseFloat(tmpt);
  if (Number.isNaN(input)) {
    return '';
  }
  let output;
  if (scale === "f") {
    output = toCls(input);
  } else if (scale === "c") {
    output = toFhh(input);
  }
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
