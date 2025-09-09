"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { UrlCaptureBar } from "./UrlCaptureBar";

interface UrlCaptureContextValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleSubmit: (normalizedUrl: string) => Promise<void>;
}

const UrlCaptureContext = createContext<UrlCaptureContextValue | undefined>(undefined);

export const useUrlCapture = () => {
  const ctx = useContext(UrlCaptureContext);
  if (!ctx) throw new Error("useUrlCapture must be used within UrlCaptureProvider");
  return ctx;
};

export const UrlCaptureProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const closeModal = useCallback(() => setOpen(false), []);
  const openModal = useCallback(() => setOpen(true), []);

  const navigateToAuth = useCallback((siteUrl: string) => {
    const encoded = encodeURIComponent(siteUrl);
    router.push(`/auth?mode=choose&url=${encoded}`);
  }, [router]);

  const handleSubmit = useCallback(async (normalizedUrl: string) => {
    try {
      localStorage.setItem("discoveryai.siteUrl", normalizedUrl);
      setIsScanning(true);
      // Lightweight scanning screen delay 1.2s
      await new Promise((res) => setTimeout(res, 1200));
      setIsScanning(false);
      setOpen(false);
      navigateToAuth(normalizedUrl);
    } catch (e) {
      // noop
    }
  }, [navigateToAuth]);

  // Global interceptor for any element with data-action="open-url-capture"
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const actionable = target.closest<HTMLElement>('[data-action="open-url-capture"]');
      if (!actionable) return;
      e.preventDefault();
      const stored = localStorage.getItem("discoveryai.siteUrl");
      if (stored) {
        navigateToAuth(stored);
      } else {
        openModal();
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigateToAuth, openModal]);

  const value = useMemo(() => ({ open, openModal, closeModal, handleSubmit }), [open, openModal, closeModal, handleSubmit]);

  return (
    <UrlCaptureContext.Provider value={value}>
      {children}

      {/* Scanning overlay */}
      {isScanning && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-background/80 backdrop-blur-sm">
          <div className="bg-background border border-border p-6 w-[320px] text-center">
            <p className="font-medium mb-2">Scanning your site…</p>
            <p className="text-sm text-muted-foreground">We’ll personalize SEO + GEO insights.</p>
          </div>
        </div>
      )}

      {/* Desktop modal (md and up) */}
      <div className="hidden md:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-[520px] p-6">
            <DialogHeader>
              <DialogTitle>Enter your website URL</DialogTitle>
              <DialogDescription>We'll scan your site to personalize SEO + GEO insights.</DialogDescription>
            </DialogHeader>
            <button onClick={closeModal} className="absolute right-4 top-4 p-1 text-muted-foreground hover:text-foreground" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <div className="mt-4">
              <UrlCaptureBar variant="modal" showHelperText />
            </div>
            <div className="mt-3">
              <button onClick={closeModal} className="text-sm text-muted-foreground hover:underline">Skip for now</button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile full-screen sheet */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="bottom" className="h-[100vh] p-6 overflow-auto">
            <SheetHeader>
              <SheetTitle>Enter your website URL</SheetTitle>
              <SheetDescription>We'll scan your site to personalize SEO + GEO insights.</SheetDescription>
            </SheetHeader>
            <button onClick={closeModal} className="absolute right-4 top-4 p-1 text-muted-foreground" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <div className="mt-6">
              <UrlCaptureBar variant="modal" showHelperText />
            </div>
            <div className="mt-4">
              <button onClick={closeModal} className="text-sm text-muted-foreground hover:underline">Skip for now</button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </UrlCaptureContext.Provider>
  );
};

export default UrlCaptureProvider;