const multiplier = 1024 ** 6;

export default function deriveId(): number {
  return Math.random() * multiplier;
}
