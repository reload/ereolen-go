import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "text-6xl md:text-7xl leading-tight",
      h1: "text-typo-heading-1",
      h2: "text-typo-heading-2",
      h3: "text-typo-heading-3",
      h4: "text-typo-heading-4",
      p: "text-typo-body-lg",
      small: "text-typo-body-sm",
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
