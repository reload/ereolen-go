import NextLink from "next/link";
import { typographyVariants } from "@/components/typography";
import { cn } from "@/lib/utils";

interface AppLinkProps extends React.ComponentPropsWithoutRef<typeof NextLink> {
  className?: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...props }: AppLinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        typographyVariants({ variant: "small" }),
        "hover:underline",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
