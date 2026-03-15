import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationInfo from "@/components/DonationInfo";
import { SITE_NAME } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Donate — ${SITE_NAME}`,
  description:
    "Support Amaana Foundation. Donate via UPI or bank transfer to help underprivileged communities in Hyderabad.",
};

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-warm-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-serif text-sm font-bold uppercase tracking-widest text-brand-gold-400">
              Support Our Mission
            </p>
            <h1 className="mt-3 text-3xl font-bold text-brand-blue-700 sm:text-4xl md:text-5xl">
              Make a Donation
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold-400" />
            <p className="mx-auto mt-6 max-w-xl text-lg text-warm-600">
              Your generosity transforms lives. Choose your preferred payment
              method below.
            </p>
          </div>

          <div className="mt-12">
            <DonationInfo />
          </div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue-500 transition-colors hover:text-brand-blue-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
