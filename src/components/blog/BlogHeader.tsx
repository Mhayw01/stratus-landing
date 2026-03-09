"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "../../../app/components/ContactModal";

export default function BlogHeader() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/stratus-logo.svg"
              alt="Stratus"
              width={200}
              height={90}
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-[#1867D4] px-6 py-3 text-base font-semibold text-white font-[Inter]"
          >
            Find out more
          </button>
        </div>
      </header>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
