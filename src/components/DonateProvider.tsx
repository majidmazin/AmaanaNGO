"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import type { DonateMode } from "@/lib/constants";
import DonationInfo from "./DonationInfo";

const DONATE_MODES: { value: DonateMode; label: string }[] = [
  { value: "page", label: "Page" },
  { value: "modal", label: "Modal" },
  { value: "section", label: "Section" },
  { value: "drawer", label: "Drawer" },
];

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
  const [modeMenuOpen, setModeMenuOpen] = useState(false);
  const modeMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!modeMenuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (modeMenuRef.current && !modeMenuRef.current.contains(e.target as Node)) {
        setModeMenuOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [modeMenuOpen]);

  return (
    <DonateContext.Provider value={{ mode, setMode, openDonate }}>
      {children}

      {/* ── Floating donate mode switcher (bottom left) ── */}
      <div
        ref={modeMenuRef}
        className="fixed bottom-5 left-5 z-[90] flex flex-col items-center gap-2"
      >
        {modeMenuOpen && (
          <div className="mb-1 rounded-xl border border-warm-200 bg-white py-1 shadow-lg">
            <p className="border-b border-warm-100 px-3 py-1.5 text-xs font-medium text-warm-500">
              Donate as
            </p>
            {DONATE_MODES.map((m) => (
              <button
                key={m.value}
                onClick={() => {
                  setMode(m.value);
                  setModeMenuOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-700 ${
                  mode === m.value ? "bg-brand-blue-50 text-brand-blue-700" : "text-warm-700"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setModeMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-warm-200 text-warm-600 shadow-md transition-colors hover:bg-warm-300 hover:text-warm-800"
          aria-label="Donate implementation options"
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* ── Modal overlay ── */}
      {mode === "modal" && isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm p-0 sm:p-6 md:p-10 sm:items-start sm:overflow-y-auto">
          <div
            className="absolute inset-0"
            onClick={close}
            aria-label="Close donation modal"
          />
          <div
            className="relative w-full h-full min-h-screen max-w-full overflow-y-auto rounded-none bg-warm-50 p-7 shadow-2xl sm:h-auto sm:min-h-0 sm:max-w-2xl sm:rounded-2xl sm:p-8 md:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
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

            <DonationInfo stacked={false} />
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
        className={`fixed top-0 right-0 z-[101] h-full w-full max-w-md transform overflow-y-auto bg-warm-50 shadow-2xl transition-transform duration-300 ease-in-out md:max-w-md ${
          mode === "drawer" && isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 relative flex items-center justify-center border-b border-warm-200 bg-warm-50/95 backdrop-blur px-7 py-4 sm:px-6">
          <div className="text-center">
            <p className="font-serif text-xs font-bold uppercase tracking-widest text-brand-gold-400">
              Support Our Mission
            </p>
            <h2 className="mt-1 text-xl font-bold text-brand-blue-700">
              Make a Donation
            </h2>
          </div>
          <button
            onClick={close}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-warm-400 transition-colors hover:bg-warm-200 hover:text-warm-700"
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

        <div className="p-7 sm:p-6">
          <DonationInfo stacked />
        </div>
      </div>
    </DonateContext.Provider>
  );
}
