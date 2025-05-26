export const localStorageKey = "selectedLibrary";

export function getSelectedLibrary(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(localStorageKey);
}

export function setSelectedLibrary(value: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(localStorageKey, value);
}

export function clearSelectedLibrary() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(localStorageKey);
}
