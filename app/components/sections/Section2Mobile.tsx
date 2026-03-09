"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Section2Mobile() {
  return (
    <section className="w-full bg-white">
      <Reveal delay={0}>
        <div className="relative w-full aspect-square">
          <Image
            src="/assets/new-hero-1.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <div className="mx-auto max-w-[420px] space-y-10 px-4 py-10">
        <Reveal delay={0.25}>
          <div className="text-center text-2xl font-bold text-[#1867D4] font-[Inter]">
            Modern Insurance Supply Networks
            <br />
            Require Structured Intelligence
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="text-lg font-semibold text-[#1867D4] font-[Inter]">
            Oversight Has Become a Strategic Risk Function
          </div>
        </Reveal>

        <Reveal delay={0.65}>
          <div className="text-base font-normal leading-7 text-stone-500 font-[Inter]">
            <p>
              Insurance supply chains are no longer operational back-office
              functions. They are commercially critical, regulator-visible
              networks delivering customer outcomes at scale.
            </p>
            <p className="mt-4">
              Under Consumer Duty and increased customer expectations, insurers
              must demonstrate continuous oversight, not periodic review.
              Executive leadership teams are increasingly accountable for
              supply chain performance, customer treatment, and cost control
              across third-party providers.
            </p>
            <p className="mt-4">
              At the same time, claims inflation, operational volatility, and
              rising service expectations demand tighter performance visibility
              without damaging supplier relationships.
            </p>
            <p className="mt-4">
              Insurers must maintain control without compromising delivery.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.95}>
        <div className="relative w-full aspect-square">
          <Image
            src="/assets/new-section2-2.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="relative overflow-hidden py-10">
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-blue-500 to-cyan-700" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/new-filter.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[420px] space-y-6 px-4">
          <Reveal delay={1.2}>
            <h2 className="text-2xl font-semibold text-white">
              Performance expectations are rising across networks
            </h2>
          </Reveal>
          <Reveal delay={1.5}>
            <div className="space-y-4 text-lg font-normal leading-7 text-white">
              <p>
                Suppliers operate in an environment of increasing complexity
                and accountability. They serve multiple insurer networks, each
                with evolving governance expectations and performance
                standards.
              </p>
              <p>
                Regulatory visibility, heightened customer sensitivity, and
                cost pressure mean service delivery is no longer judged solely
                on throughput but on transparency, consistency, and
                demonstrable control.
              </p>
              <p>
                Suppliers must meet rising compliance and reporting
                expectations while maintaining operational efficiency and
                commercial competitiveness across diverse insurer
                relationships.
              </p>
              <p>
                Oversight is continuous. Expectations are dynamic. Visibility
                is now essential.
              </p>
              <p>
                Stratus exists to give suppliers control, transforming
                performance visibility into commercial strength.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
