"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

const cards = [
  {
    id: "save-time",
    title: "Standardise Supplier\nPerformance Data",
    subline: "Turn inconsistent spreadsheets\ninto structured intelligence",
    icon: "/assets/standardise-supplier.svg",
    description: [
      "Today, supplier governance typically begins with exported spreadsheets. Each supplier system produces data in its own format, with its own definitions and layouts. Insurer contacts then spend valuable time mapping columns to SLA parameters, reconciling definitions, and determining which thresholds were met.",
      "Stratus removes the need for interpretation.",
      "Insurers upload the agreed SLA framework for each supplier relationship. Suppliers upload their standard raw data exports. Stratus configures an intelligence layer that aligns supplier data directly to SLA requirements. Performance metrics are structured, consistent, and transparent.",
      "The discussion shifts from “What does this column mean?” to “Why did performance change?”",
    ],
  },
  {
    id: "reduce-delays",
    title: "Replace Reactive Audits with Continuous Oversight",
    subline: "Move from periodic review\nto structured cadence",
    icon: "/assets/replace-reactive.svg",
    description: [
      "Most supplier oversight today is retrospective. Performance is reviewed monthly or quarterly, often after customer impact has already occurred.",
      "Stratus introduces structured cadence. Evidence is requested on defined intervals. Structural validation checks completeness and coherence automatically. Drift indicators highlight changes early, not months later.",
      "Human accountability remains central. Stratus strengthens oversight by making signals visible sooner, giving both insurer and supplier time to act before minor deviations escalate.",
    ],
  },
  {
    id: "consistency",
    title: "Create a Shared\nIntelligence Layer",
    subline: "Same data. Different perspectives.\nAligned outcomes.",
    icon: "/assets/shared-intelligence.svg",
    description: [
      "Insurers and suppliers frequently operate from different interpretations of the same performance data. This creates friction and, over time, defensive reporting behaviours.",
      "Stratus creates a shared intelligence environment. Both parties operate from the same structured dataset, mapped explicitly to contractual SLA parameters.",
      "Insurers see performance against agreed standards, drift indicators, and review logs. Suppliers see exactly what is being measured, where performance is strong, and where improvement is required.",
      "Ambiguity is removed. Governance becomes collaborative rather than corrective.",
    ],
  },
  {
    id: "risk",
    title: "Interrogate Performance,\nNot Just Review It",
    subline: "Ask better questions\nof your supply chain",
    icon: "/assets/interrogate-performance.svg",
    description: [
      "Headline KPIs rarely tell the full story. Stratus enables deeper interrogation of performance data.",
      "Users can explore specific dimensions of performance — such as how vulnerable customers are handled, how certain demographic groups experience service, or how performance shifts when claims complexity increases.",
      "The Stratus AI Assistant does not make decisions. It surfaces patterns, highlights anomalies, and enables structured questioning of the data. Outliers are preserved, not removed. Poor performance cannot be filtered out of view.",
      "This supports informed, evidence-based improvement conversations across the supply chain.",
    ],
  },
  {
    id: "client-experience",
    title: "Gain Portfolio-Level Visibility\nAcross Suppliers",
    subline: "See the network,\nnot just the node",
    icon: "/assets/portfolio-visibility.svg",
    description: [
      "As additional suppliers operate within Stratus, insurers gain consistent macro-level visibility across their supply chain.",
      "Performance can be viewed through a unified framework. Drift patterns can be identified across providers. Improvement trends can be tracked consistently. Supplier performance becomes comparable within structured parameters.",
      "This enables more confident governance decisions at portfolio level.",
    ],
  },
  {
    id: "stress",
    title: "Enable Performance-Led\nSupply Chain Expansion",
    subline: "Strengthen partnerships\nthrough structured evidence",
    icon: "/assets/expansion.svg",
    description: [
      "Structured performance data creates long-term strategic value.",
      "Insurers can identify high-performing suppliers capable of supporting additional volume or filling network gaps. Suppliers can demonstrate structured, SLA-aligned performance credentials when engaging with new insurer partners.",
      "Stratus does not act as a broker or marketplace. It does not re-route work. It provides the performance transparency that enables stronger, evidence-based supply relationships to form organically over time.",
    ],
  },
];

export default function Section4Mobile() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[420px] space-y-6 px-6 py-10">
        <Reveal delay={0}>
          <h2 className="text-2xl font-semibold text-[#1867D4]">
            How Stratus Transforms Supplier Oversight
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-lg font-normal text-[#448CF0] font-[Inter]">
            Turn inconsistent spreadsheets into structured intelligence
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="space-y-6">
            {cards.map((card) => {
              const isOpen = openId === card.id;

              return (
                <div key={card.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => toggleCard(card.id)}
                    className={`w-full rounded-[20px] bg-[#448CF0] px-5 py-4 text-left ${isOpen ? "rounded-b-none" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xl font-medium text-white">
                          {card.title.split("\n").map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </div>
                        <div className="mt-2 text-base font-normal text-white">
                          {card.subline.split("\n").map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </div>
                      </div>
                      <div className="flex h-[72px] w-[72px] items-center justify-center">
                        <Image
                          src={card.icon}
                          alt=""
                          width={72}
                          height={72}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex w-full justify-center">
                      <svg
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={isOpen ? "rotate-180" : undefined}
                      >
                        <path
                          d="M2 2L10 10L18 2"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  {isOpen ? (
                    <div className="w-full rounded-b-[20px] border border-[#C6DAEE] bg-[#EAF2FA] p-5 text-base font-normal leading-6 text-[#111827]">
                      <div className="space-y-4">
                        {card.description.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
