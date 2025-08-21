"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { libraries } from "@/data/libraries";
import useLocalStorage from "@/hooks/useSelectedLibrary";
import { buildRedirectUrl, cn } from "@/lib/utils";

type Library = {
  value: string;
  label: string;
  domain: string;
  secondaryDomains: string[];
  customPath?: string;
};

export function LibrarySelect() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [storedValue, setStoredValue] = useLocalStorage<string>(
    "selectedLibrary",
    "",
  );

  const selectedLibrary = libraries.find((lib) => lib.value === storedValue);

  const filteredLibraries = libraries.filter((lib) =>
    lib.label.toLowerCase().includes(input.toLowerCase()),
  );

  const sortedLibraries = filteredLibraries.sort((a, b) =>
    a.label.localeCompare(b.label),
  );

  const handleSelectValue = (lib: Library) => {
    setStoredValue(lib.value);
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!selectedLibrary) return;

    const searchParams = new URLSearchParams(window.location.search);
    const originalPath = searchParams.get("from") || "/";

    const fullUrl = buildRedirectUrl({
      originalPath,
      libraryDomain: selectedLibrary.domain,
      customPath: selectedLibrary.customPath,
    });

    return (window.location.href = fullUrl);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div className="max-w-select max-w-select grid w-full grid-cols-[1fr_min-content] gap-2">
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-between text-lg"
              aria-expanded={open}
              size={"xl"}
            >
              {selectedLibrary ? selectedLibrary.label : "Vælg dit bibliotek"}
              <ChevronsUpDown className="ml-2 opacity-50" />
            </Button>
          </PopoverTrigger>
          <Button
            className="ml-auto text-2xl font-semibold"
            size={"xl"}
            onClick={handleSubmit}
          >
            OK
          </Button>
        </div>
      </PopoverAnchor>
      <PopoverContent
        className="popoverContent mt-2 p-0"
        align="start"
        side="bottom"
      >
        <Command className="w-full">
          <CommandInput
            placeholder="Søg efter dit bibliotek"
            className="h-9 w-full"
            value={input}
            onValueChange={setInput}
          />
          <CommandList>
            <CommandEmpty>Ingen resultater</CommandEmpty>
            <CommandGroup>
              {sortedLibraries.map((lib) => (
                <CommandItem
                  key={lib.value}
                  value={lib.label}
                  onSelect={() => handleSelectValue(lib)}
                  className={cn(
                    "flex items-center justify-between gap-3",
                    storedValue === lib.value
                      ? "border-secondary bg-accent/20 border-2 border-solid"
                      : "",
                  )}
                >
                  {lib.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      storedValue === lib.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
