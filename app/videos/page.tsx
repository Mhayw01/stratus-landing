"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "../components/ContactModal";

export default function VideosPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="https://stratussolutions.co.uk" className="flex items-center">
            <Image
              src="/assets/stratus-logo.svg"
              alt="Stratus"
              width={140}
              height={40}
              priority
            />
          </a>
          <a
            href="https://stratussolutions.co.uk"
            className="text-sm font-medium text-[#1867D4] transition-colors hover:text-[#3073AF]"
          >
            &larr; Back to Stratus landing page
          </a>
        </div>
      </header>

      {/* Video Section */}
      <section className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold text-slate-900 lg:text-4xl">
            Stratus Demo
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600 lg:text-lg">
            See how Stratus brings structured intelligence to insurance supply
            networks — delivering clear oversight, real-time visibility, and
            stronger supplier partnerships.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full"
            poster=""
          >
            <source src="/assets/Stratus demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-slate-100 bg-[#EEF6FF]">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center lg:py-16">
          <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
            Contact Stratus
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            Interested in what you've seen? Get in touch and we'll follow up
            with you.
          </p>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="mt-6 inline-flex items-center rounded-[20px] bg-[#1867D4] px-8 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-[#3073AF]"
          >
            Open contact form
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#3E6FA4] to-[#6FA8DC] py-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Stratus Solutions. All rights reserved.
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Hidden Netlify form for detection */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        <input name="firstName" />
        <input name="lastName" />
        <input name="lawFirm" />
        <input name="email" />
        <textarea name="message" />
      </form>
    </main>
  );
}
