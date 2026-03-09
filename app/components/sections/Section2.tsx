"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Section2() {
  return (
    <section className="w-full">
      <div className="w-full min-h-[714px] bg-white">
        <div className="grid h-full min-h-[714px] w-full grid-cols-2 items-stretch gap-0">
          <Reveal className="h-full w-full" delay={0}>
            <div className="relative h-full w-full">
              <Image
                src="/assets/new-hero-1.png"
                alt="AML compliance workflow illustration"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex h-full w-full flex-col items-start justify-start px-[72px] pb-[48px] pt-[48px]">
            <Reveal delay={0.18}>
              <div className="w-full text-center text-3xl font-bold text-[#1867D4] font-[Inter]">
                Modern Insurance Supply Networks
                <br />
                Require Structured Intelligence
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 max-w-[629px] text-[22px] font-semibold text-[#1867D4] font-[Inter]">
                Oversight Has Become a Strategic Risk Function
              </div>
            </Reveal>
            <Reveal delay={0.42}>
              <div className="mt-6 max-w-[629px] text-xl font-normal leading-8 text-stone-500 font-[Inter]">
                <p>
                  Insurance supply chains are no longer operational back-office
                  functions. They are commercially critical, regulator-visible
                  networks delivering customer outcomes at scale.
                </p>
                <p className="mt-6">
                  Under Consumer Duty and increased customer expectations,
                  insurers must demonstrate continuous oversight, not periodic
                  review. Executive leadership teams are increasingly
                  accountable for supply chain performance, customer treatment,
                  and cost control across third-party providers.
                </p>
                <p className="mt-6">
                  At the same time, claims inflation, operational volatility,
                  and rising service expectations demand tighter performance
                  visibility without damaging supplier relationships.
                </p>
                <p className="mt-6">
                  Insurers must maintain control without compromising delivery.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[718px] overflow-hidden">
        <Image
          src="/assets/new-filter.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-10 grid h-full min-h-[718px] w-full grid-cols-2 items-stretch gap-0">
          <div className="flex h-full w-full flex-col justify-start px-[72px] pb-[72px] pt-[72px]">
            <Reveal delay={0.18}>
              <h2 className="text-3xl font-semibold text-white">
                Performance expectations are rising across networks
              </h2>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-6 flex flex-col gap-6 text-xl font-normal leading-7 text-white">
                <p>
                  Suppliers operate in an environment of increasing complexity
                  and accountability. They serve multiple insurer networks,
                  each with evolving governance expectations and performance
                  standards.
                </p>
                <p>
                  Regulatory visibility, heightened customer sensitivity, and
                  cost pressure mean service delivery is no longer judged
                  solely on throughput but on transparency, consistency, and
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
          <Reveal className="h-full w-full" delay={0}>
            <div className="relative h-full w-full">
              <Image
                src="/assets/new-section2-2.svg"
                alt="Stratus platform overview illustration"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
