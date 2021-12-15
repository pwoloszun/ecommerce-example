export function random(max: number, roundDown = false): number {
  const result = Math.random() * max;
  if (roundDown) {
    return Math.floor(result);
  } else {
    return result;
  }
}

export function randomBetween(min: number, max: number, roundDown = false): number {
  return min + random(max - min, roundDown);
}
