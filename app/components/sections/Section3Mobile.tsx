"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

const features = [
  {
    id: "evidence",
    title: "Structured SLA Mapping",
    description:
      "Supplier operational data aligned directly to insurer-defined SLA frameworks",
    icon: "/assets/structured-sla-mapping.svg",
  },
  {
    id: "identity",
    title: "Continuous Evidence Cadence",
    description:
      "Defined upload cycles that support ongoing oversight rather than periodic audit",
    icon: "/assets/continuos-evidence-cadence.svg",
  },
  {
    id: "matter",
    title: "Performance Drift Detection",
    description:
      "Early identification of deviation across key parameters before issues escalate",
    icon: "/assets/performance-drift-protection.svg",
  },
  {
    id: "ai",
    title: "Shared Intelligence Dashboards",
    description:
      "Aligned insurer and supplier views built on the same structured dataset",
    icon: "/assets/shared-intelligence-dashboards.svg",
  },
  {
    id: "lawyer",
    title: "Governance & Action Logging",
    description:
      "Documented review processes that evidence continuous oversight",
    icon: "/assets/governance-and-action-logging.svg",
  },
  {
    id: "audit",
    title: "AI-Assisted Data Interrogation",
    description:
      "Structured querying of supplier data to surface patterns, anomalies, and emerging risk signals",
    icon: "/assets/AI-Assisted-data-interrogation.svg",
  },
  {
    id: "data",
    title: "Portfolio-Level Visibility",
    description:
      "Consistent cross-supplier performance insight within a unified governance framework",
    icon: "/assets/portfolio-level-visibility.svg",
  },
];

export default function Section3Mobile() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[420px] px-6 py-10">
        <Reveal delay={0}>
          <h2 className="text-center text-2xl font-semibold text-[#1867D4]">
            Structured Intelligence for Insurance Supply Networks
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-4 text-center text-lg font-normal text-[#7D6A6A]">
            At beta stage, Stratus provides a structured governance and
            intelligence layer across insurer supplier relationships. It
            introduces consistent performance alignment, shared visibility, and
            measurable oversight without disrupting existing claims systems.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-10 space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={feature.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold leading-6 text-[#1867D4]">
                    {feature.title}
                  </div>
                  <div className="mt-1 text-base font-medium leading-6 text-[#7D6A6A]">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.85}>
          <div className="mt-10 space-y-6 text-center text-base font-normal leading-7 text-stone-600 font-[Inter]">
            <div>
              Stratus does not replace claims systems, route work, or automate
              decisions.
              <br />
              It enhances structured oversight above existing operational
              platforms.
              <br />
              <br />
              The platform is designed for regulated environments, with
              encrypted data storage, role-based access control, and
              UK/EU-hosted infrastructure by default.
            </div>
            <div>
              Oversight becomes measurable.
              <br />
              Performance becomes visible.
              <br />
              Governance becomes continuous.
            </div>
          </div>
        </Reveal>

        <Reveal delay={1.1}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              className="inline-flex items-center justify-center rounded-full bg-[#3073AF] px-8 py-4 text-lg font-semibold leading-snug text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Contact us to find out more
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
