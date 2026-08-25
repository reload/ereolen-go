"use client";

import { Check, ChevronDown } from "lucide-react";
import React, { useId, useRef, useState } from "react";

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
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { libraries, Library } from "@/data/libraries";
import useLocalStorage from "@/hooks/useSelectedLibrary";
import { buildRedirectUrl, cn } from "@/lib/utils";
import { Typography } from "./typography";

export function LibrarySelect({
  hoverHelpText,
  className,
  customPath,
}: {
  hoverHelpText?: string;
  className?: string;
  customPath?: string;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const listTitleId = useId();
  const searchInputRef = useRef<HTMLInputElement>(null);
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
      customPath: customPath || selectedLibrary.customPath,
    });

    return (window.location.href = fullUrl);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div
          className={cn(
            "max-w-select grid w-full min-w-0 grid-cols-1 justify-items-stretch gap-3 xs:grid-cols-[minmax(0,1fr)_auto] xs:items-stretch",
            className,
          )}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="w-full min-w-0">
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="btn-white h-12 min-w-0 w-full justify-between rounded-lg border-input px-3 text-left text-base font-normal shadow-none hover:text-foreground sm:px-4 md:h-14 md:text-lg"
                    aria-label={
                      selectedLibrary
                        ? `Valgt kommune: ${selectedLibrary.label}`
                        : "Vælg kommune"
                    }
                  >
                    <span className={`min-w-0 truncate ${selectedLibrary ? "text-foreground" : "text-muted-foreground"}`}>
                      {selectedLibrary
                        ? selectedLibrary.label
                        : "Vælg kommune"}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-2 flex h-8 shrink-0 items-center border-l border-input pl-2 sm:ml-3 sm:pl-3 absolute right-[15px] top-0 h-[45px] md:h-[55px] bg-white"
                    >
                      <ChevronDown className="size-5 opacity-50" />
                    </span>
                  </Button>
                </PopoverTrigger>
              </div>
            </HoverCardTrigger>
            {hoverHelpText && (
              <HoverCardContent className="w-80">
                <Typography variant={"p"} as={"p"}>
                  {hoverHelpText}
                </Typography>
              </HoverCardContent>
            )}
          </HoverCard>
          <Button
            className="btn-white shadow-button hover:shadow-button-hover border-foreground text-foreground mx-auto inline-flex h-12 w-[88px] shrink-0 items-center justify-center rounded-full border px-4 text-base font-medium whitespace-nowrap transition hover:translate-x-px hover:translate-y-px active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:mx-0 md:h-14"
            variant="outline-custom"
            onClick={handleSubmit}
          >
            Ok
          </Button>
        </div>
      </PopoverAnchor>
      <PopoverContent
        className="popoverContent mt-2 p-0"
        align="start"
        side="bottom"
        aria-labelledby={listTitleId}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          searchInputRef.current?.focus();
        }}
      >
        <h2 id={listTitleId} className="sr-only">
          Liste af kommuner
        </h2>
        <Command label="Søg efter kommune" className="w-full">
          <CommandInput
            ref={searchInputRef}
            placeholder="Søg efter kommune"
            className="h-9 w-full"
            value={input}
            onValueChange={setInput}
          />
          <CommandList label="Kommuner">
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
                      ? "bg-brand-soft border-2 border-solid border-foreground data-[selected=true]:bg-brand-soft"
                      : "",
                  )}
                >
                  {lib.label}
                  <Check
                    aria-hidden="true"
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
