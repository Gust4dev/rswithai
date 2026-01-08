"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl",
      "transition-all duration-300 cursor-pointer",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
    );

    const variants = {
      primary: cn(
        "text-white bg-gradient-to-r from-primary to-purple-500",
        "shadow-md hover:shadow-xl hover:shadow-primary/25",
        "hover:-translate-y-0.5 hover:scale-[1.02]",
        "active:translate-y-0 active:scale-[0.98]"
      ),
      secondary: cn(
        "text-primary bg-white border-2 border-primary/20",
        "hover:bg-primary/5 hover:border-primary/40",
        "hover:-translate-y-0.5"
      ),
      ghost: cn(
        "text-text-light bg-transparent",
        "hover:text-primary hover:bg-primary/5"
      ),
      outline: cn(
        "text-text bg-transparent border-2 border-border",
        "hover:border-primary hover:text-primary"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
