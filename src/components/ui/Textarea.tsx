"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  maxLength?: number;
  showCount?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      hint,
      maxLength,
      showCount = true,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s/g, "-");
    const currentLength = String(value || "").length;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-white text-text",
            "placeholder:text-text-light/60",
            "transition-all duration-200 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
              : "border-border focus:ring-primary/20 focus:border-primary",
            props.disabled && "opacity-50 cursor-not-allowed bg-gray-50",
            className
          )}
          rows={4}
          {...props}
        />
        <div className="flex justify-between mt-1">
          {hint && !error && <p className="text-sm text-text-light">{hint}</p>}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {maxLength && showCount && (
            <p
              className={cn(
                "text-sm ml-auto",
                currentLength >= maxLength ? "text-red-500" : "text-text-light"
              )}
            >
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
