"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUrlCapture } from "./UrlCaptureProvider";

interface UrlCaptureBarProps {
  variant?: "hero" | "cta" | "modal";
  autoFocus?: boolean;
  className?: string;
  onSubmitted?: (normalizedUrl: string) => void;
  showHelperText?: boolean;
}

// Validation function using regex
function isValidUrl(value: string): boolean {
  const domainPart = "(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,24}";
  const full = new RegExp(`^(?:https?:\\/\\/)?${domainPart}(?:\\/[^\\s]*)?$`, "i");
  return full.test(value.trim());
}

// Normalization function
function normalizeUrl(value: string): string {
  let trimmed = value.trim();
  
  // Add protocol if missing
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = `https://${trimmed}`;
  }
  
  // Parse URL to lower case host part
  try {
    const url = new URL(trimmed);
    const host = url.host.toLowerCase();
    const pathname = url.pathname === "/" ? "" : url.pathname;
    const search = url.search;
    const hash = url.hash;
    
    // Reconstruct with lower case host and no trailing slashes
    const cleanPath = pathname.replace(/\/+$/, "");
    return `${url.protocol}//${host}${cleanPath}${search}${hash}`;
  } catch {
    return trimmed.replace(/\/+$/, "");
  }
}

export const UrlCaptureBar = ({
  variant = "hero",
  autoFocus = false,
  className,
  onSubmitted,
  showHelperText = true,
}: UrlCaptureBarProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit: providerSubmit } = useUrlCapture();

  const buttonLabels = {
    hero: "Get Discovered ↗",
    cta: "Continue ↗",
    modal: "Continue ↗",
  };

  const maxWidths = {
    hero: "max-w-[960px]",
    cta: "max-w-[760px]",
    modal: "w-full",
  };

  const handleBlur = () => {
    if (value.trim()) {
      const valid = isValidUrl(value);
      setIsValid(valid);
      if (!valid) {
        setError("Enter a valid URL (e.g., https://example.com)");
      } else {
        setError("");
      }
    } else {
      setIsValid(true);
      setError("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!value.trim()) {
      setError("Enter a valid URL (e.g., https://example.com)");
      setIsValid(false);
      return;
    }

    const valid = isValidUrl(value);
    setIsValid(valid);
    
    if (!valid) {
      setError("Enter a valid URL (e.g., https://example.com)");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const normalized = normalizeUrl(value);
      await providerSubmit(normalized);
      
      if (onSubmitted) {
        onSubmitted(normalized);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsValid(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (autoFocus) {
      const input = document.getElementById("url-input") as HTMLInputElement;
      input?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={cn("w-full mx-auto", maxWidths[variant], className)}>
      <div className="flex flex-col gap-2">
        {/* Input Group */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative flex-1">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              id="url-input"
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) {
                  setError("");
                  setIsValid(true);
                }
              }}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder="Enter website URL"
              className={cn(
                "w-full pl-10 pr-4 py-3 bg-background border border-input",
                "focus:outline-none focus:ring-2 focus:ring-ring",
                "text-sm md:text-base",
                !isValid && "border-destructive",
                "min-h-[44px]"
              )}
              aria-invalid={!isValid}
              aria-describedby={!isValid ? "url-error" : undefined}
            />
            <label htmlFor="url-input" className="sr-only">
              Website URL
            </label>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isValid || isSubmitting}
            className={cn(
              "bg-primary text-primary-foreground px-5 py-3",
              "hover:opacity-80 transition-opacity",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "min-h-11",
              "text-sm md:text-base font-medium",
              (!isValid || isSubmitting) && "opacity-50 cursor-not-allowed"
            )}
          >
            {buttonLabels[variant]}
          </button>
        </div>

        {/* Helper/Error Text */}
        {showHelperText && (
          <div className="min-h-[20px]">
            {!isValid ? (
              <p
                id="url-error"
                className="text-destructive text-sm"
                aria-live="polite"
              >
                {error}
              </p>
            ) : (
              <p className="text-muted-foreground text-sm">
                We'll scan your site to personalize SEO + GEO insights.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};