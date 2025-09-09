// Utility: className combiner similar to clsx with basic object/array support
// No external deps; safe for both RSC and client components.

export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | { [key: string]: any };

function toVal(mix: ClassValue): string[] {
  const out: string[] = [];
  if (!mix && mix !== 0) return out;

  if (typeof mix === "string" || typeof mix === "number") {
    out.push(String(mix));
  } else if (Array.isArray(mix)) {
    for (const v of mix) out.push(...toVal(v));
  } else if (typeof mix === "object") {
    for (const k in mix as Record<string, any>) {
      // include key if value is truthy
      if ((mix as Record<string, any>)[k]) out.push(k);
    }
  }
  return out;
}

export function cn(...inputs: ClassValue[]): string {
  // join, collapse whitespace
  return inputs
    .flatMap(toVal)
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}