import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "text-6xl md:text-7xl font-bold leading-tight",
      h1: "text-4xl md:text-5xl font-bold leading-tight",
      h2: "text-3xl md:text-4xl font-semibold leading-snug",
      h3: "text-2xl md:text-3xl font-semibold leading-snug",
      h4: "text-xl md:text-2xl font-semibold leading-snug",
      p: "text-lg md:text-xl leading-relaxed",
      small: "text-sm md:text-base leading-relaxed",
    },
  },

  defaultVariants: {
    variant: "p",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  asChild?: boolean;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as: Tag = "p", asChild, variant, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag;

    return (
      <Comp
        className={cn(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Typography.displayName = "Typo";

export { typographyVariants };
