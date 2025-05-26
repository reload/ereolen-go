import { useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch (err) {
      console.warn(`Error reading localStorage key “${key}”:`, err);
    }
  }, [key]);

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.warn(`Error setting localStorage key “${key}”:`, err);
    }
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
