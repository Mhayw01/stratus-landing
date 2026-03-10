"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function HeroBannerMobile() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/stratus-hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10">
        <Image
          src="/assets/banner-filter.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20 flex min-h-[420px] flex-col px-3 pb-6 pt-4 text-white">
        <Reveal
          delay={0}
          viewportMargin="0px 0px 0px 0px"
          viewportAmount={0}
          className="self-start"
        >
          <Image
            src="/assets/stratus-logo.svg"
            alt="Stratus logo"
            width={140}
            height={66}
          />
        </Reveal>
        <Reveal
          delay={0.4}
          viewportMargin="0px 0px 0px 0px"
          viewportAmount={0}
          className="mt-6 text-center text-2xl font-semibold"
        >
          Manage your insurance
          <br />
          supply chain performance
          <br />
          in one platform
        </Reveal>
        <div className="mt-6 text-center text-2xl font-medium leading-[34px]">
          <Reveal delay={0.8}>Stratus helps insurers and suppliers</Reveal>
          <Reveal delay={1.1}>monitor performance, manage governance,</Reveal>
          <Reveal delay={1.4}>streamline onboarding, to gain real-time</Reveal>
          <Reveal delay={1.7}>operational insight across their supply chain</Reveal>
        </div>
        <Reveal delay={2.0} className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="flex h-9 w-full max-w-[320px] items-center justify-center rounded-full bg-white text-lg font-medium text-[#1867D4]"
          >
            Get Early Access
          </button>
        </Reveal>
      </div>
    </section>
  );
}
