"use client";

import { useState } from "react";
import {
  DONATION_UPI_ID,
  DONATION_UPI_NAME,
  DONATION_BANK,
} from "@/lib/constants";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center justify-center rounded-md bg-brand-blue-50 p-1.5 text-brand-blue-600 transition-colors hover:bg-brand-blue-100"
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
    >
      {copied ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

const BANK_FIELDS = [
  { label: "Account Name", key: "accountName" as const },
  { label: "Account Number", key: "accountNumber" as const },
  { label: "IFSC Code", key: "ifsc" as const },
  { label: "Bank", key: "bankName" as const },
  { label: "Branch", key: "branch" as const },
];

export default function DonationInfo({
  stacked = false,
}: {
  stacked?: boolean;
}) {
  const upiPayUrl = `upi://pay?pa=${DONATION_UPI_ID}&pn=${encodeURIComponent(DONATION_UPI_NAME)}&cu=INR`;

  return (
    <div className="space-y-8">
      {/* Zakat Disclaimer */}
      <div className="mx-auto max-w-lg rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-center">
        <p className="text-sm font-semibold text-amber-800">
          Please note: Zakat contributions are not accepted
        </p>
      </div>

      <div className={`grid gap-8 ${stacked ? "" : "lg:grid-cols-2"}`}>
        {/* UPI Payment */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-brand-blue-700">
            <svg className="h-5 w-5 text-brand-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Pay via UPI
          </h3>

          {/* QR Code */}
          <div className="w-full">
            <div className="rounded-2xl border-2 border-warm-200 bg-white p-3 shadow-sm">
              <div className="relative w-full overflow-hidden rounded-xl bg-warm-50 aspect-square">
                <img
                  src="/images/upi-qr.png"
                  alt="UPI QR Code"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-warm-500">
                Scan with any UPI app
              </p>
            </div>
          </div>

          {/* UPI ID */}
          <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-warm-500">
              UPI ID
            </p>
            <div className="mt-1.5 flex items-center justify-between gap-3">
              <code className="text-base font-semibold text-brand-blue-700">
                {DONATION_UPI_ID}
              </code>
              <CopyButton text={DONATION_UPI_ID} label="UPI ID" />
            </div>
            <p className="mt-2 text-sm text-warm-500">
              Name: <span className="font-medium text-warm-700">{DONATION_UPI_NAME}</span>
            </p>
          </div>

          {/* UPI App Buttons */}
          <div>
            <p className="mb-3 text-sm font-medium text-warm-600">
              Open in UPI app
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={upiPayUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-warm-200 bg-white px-5 py-3 text-sm font-semibold text-warm-800 shadow-sm transition-all hover:shadow-md hover:border-warm-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Pay
              </a>
              <a
                href={upiPayUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-[#5f259f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#4a1d7a] hover:shadow-md"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm4.5 4a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
                PhonePe
              </a>
            </div>
            <p className="mt-2 text-xs text-warm-400">
              UPI app buttons work on mobile devices only
            </p>
          </div>
        </div>

        {/* Bank Transfer */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-brand-blue-700">
            <svg className="h-5 w-5 text-brand-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Bank Transfer
          </h3>

          <div className="rounded-xl border border-warm-200 bg-white p-5 shadow-sm">
            <dl className="divide-y divide-warm-100">
              {BANK_FIELDS.map((field) => (
                <div
                  key={field.key}
                  className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <dt className="text-sm text-warm-500">{field.label}</dt>
                  <dd className="flex items-center gap-2 text-right">
                    <span className="text-sm font-semibold text-brand-blue-700">
                      {DONATION_BANK[field.key]}
                    </span>
                    <CopyButton
                      text={DONATION_BANK[field.key]}
                      label={field.label}
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Trust note */}
          <div className="rounded-xl bg-brand-blue-50 p-5">
            <p className="text-sm leading-relaxed text-brand-blue-700">
              Every donation is a sacred trust (<span className="font-serif italic">amaana</span>).
              We ensure your contributions reach those in need with full transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
