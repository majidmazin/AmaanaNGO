"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { DonateMode } from "@/lib/constants";
import DonationInfo from "./DonationInfo";

interface DonateContextValue {
  mode: DonateMode;
  setMode: (mode: DonateMode) => void;
  openDonate: () => void;
}

const DonateContext = createContext<DonateContextValue>({
  mode: "modal",
  setMode: () => {},
  openDonate: () => {},
});

export const useDonate = () => useContext(DonateContext);

export default function DonateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setModeState] = useState<DonateMode>("modal");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("donateMode") as DonateMode | null;
    if (stored && ["page", "modal", "section", "drawer"].includes(stored)) {
      setModeState(stored);
    }
  }, []);

  const setMode = useCallback((m: DonateMode) => {
    setModeState(m);
    localStorage.setItem("donateMode", m);
    setIsOpen(false);
  }, []);

  const openDonate = useCallback(() => {
    switch (mode) {
      case "page":
        window.location.href = "/donate";
        break;
      case "modal":
      case "drawer":
        setIsOpen(true);
        break;
      case "section":
        document
          .querySelector("#donate")
          ?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [mode]);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <DonateContext.Provider value={{ mode, setMode, openDonate }}>
      {children}

      {/* ── Modal overlay ── */}
      {mode === "modal" && isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 sm:p-6 md:p-10">
          <div
            className="absolute inset-0"
            onClick={close}
            aria-label="Close donation modal"
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-warm-50 p-6 shadow-2xl sm:p-8">
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full p-1.5 text-warm-400 transition-colors hover:bg-warm-200 hover:text-warm-700"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-6 text-center">
              <p className="font-serif text-xs font-bold uppercase tracking-widest text-brand-gold-400">
                Support Our Mission
              </p>
              <h2 className="mt-2 text-2xl font-bold text-brand-blue-700">
                Make a Donation
              </h2>
              <div className="mx-auto mt-3 h-1 w-12 rounded bg-brand-gold-400" />
            </div>

            <DonationInfo />
          </div>
        </div>
      )}

      {/* ── Drawer backdrop ── */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          mode === "drawer" && isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-label="Close donation drawer"
      />

      {/* ── Drawer panel ── */}
      <div
        className={`fixed top-0 right-0 z-[101] h-full w-full max-w-md transform overflow-y-auto bg-warm-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          mode === "drawer" && isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-warm-200 bg-warm-50/95 backdrop-blur px-6 py-4">
          <div>
            <p className="font-serif text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Support Our Mission
            </p>
            <h2 className="mt-1 text-xl font-bold text-brand-blue-700">
              Make a Donation
            </h2>
          </div>
          <button
            onClick={close}
            className="rounded-full p-2 text-warm-400 transition-colors hover:bg-warm-200 hover:text-warm-700"
            aria-label="Close drawer"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <DonationInfo />
        </div>
      </div>
    </DonateContext.Provider>
  );
}
