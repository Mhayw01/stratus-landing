"use client";

import Image from "next/image";
import { cubicBezier, motion, useReducedMotion } from "framer-motion";

export default function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();
  const resolvedY = shouldReduceMotion ? 0 : 16;
  const baseTransition = {
    duration: shouldReduceMotion ? 0 : 1.4,
    ease: shouldReduceMotion ? cubicBezier(0, 0, 0, 0) : cubicBezier(0.16, 1, 0.3, 1),
  };

  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/stratus-hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image
          src="/assets/banner-filter.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-20 min-h-[82vh]">
        <motion.div
          className="absolute left-[72px] top-[48px]"
          initial={{ opacity: 0, y: resolvedY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...baseTransition, delay: 0 }}
        >
          <Image
            src="/assets/stratus-logo.svg"
            alt="Stratus logo"
            width={319}
            height={150}
            priority
          />
        </motion.div>
        <div className="flex min-h-[82vh] items-start">
          <div className="flex w-full items-start justify-between px-[72px] pt-[270px] font-[Inter]">
            <div className="flex max-w-[560px] flex-col gap-12 text-white">
              <motion.h1
                className="text-4xl font-semibold"
                initial={{ opacity: 0, y: resolvedY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 0.5 }}
              >
                Manage your insurance
                <br />
                supply chain performance
                <br />
                in one platform
              </motion.h1>
              <div className="text-[24px] font-medium leading-[2.6rem]">
                {[
                  "Stratus helps insurers and suppliers",
                  "monitor performance, manage governance,",
                  "streamline onboarding, to gain real-time",
                  "operational insight across their supply chain",
                ].map((line, index) => (
                  <motion.span
                    key={line}
                    className="block"
                    initial={{ opacity: 0, y: resolvedY }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...baseTransition, delay: 1.0 + index * 0.3 }}
                  >
                    {line}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex self-end mt-12">
              <motion.button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-contact"))}
                className="relative z-30 flex h-[80px] w-[490px] cursor-pointer items-center justify-center rounded-full bg-white text-3xl font-medium text-[#1867D4]"
                initial={{ opacity: 0, y: resolvedY }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 1.9 }}
              >
                Get Early Access
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
