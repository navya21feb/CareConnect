// src/components/ui/avatar.jsx

import * as React from "react";
import { cva } from "class-variance-authority";

const avatarVariants = cva(
  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-16 w-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const Avatar = React.forwardRef(({ className, size, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`${avatarVariants({ size })} ${className || ""}`}
      {...props}
    />
  );
});
Avatar.displayName = "Avatar";

export const AvatarImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square h-full w-full object-cover"
    />
  );
};

export const AvatarFallback = ({ children }) => {
  return (
    <span className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium">
      {children}
    </span>
  );
};
