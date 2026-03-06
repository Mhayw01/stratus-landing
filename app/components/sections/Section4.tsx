"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

const cards = [
  {
    id: 1,
    title: "Standardise Supplier\nPerformance Data",
    sublines: ["Turn inconsistent spreadsheets", "into structured intelligence"],
    icon: "/assets/standardise-supplier.svg",
    description: [
      "Today, supplier governance typically begins with exported spreadsheets. Each supplier system produces data in its own format, with its own definitions and layouts. Insurer contacts then spend valuable time mapping columns to SLA parameters, reconciling definitions, and determining which thresholds were met.",
      "Stratus removes the need for interpretation.",
      "Insurers upload the agreed SLA framework for each supplier relationship. Suppliers upload their standard raw data exports. Stratus configures an intelligence layer that aligns supplier data directly to SLA requirements. Performance metrics are structured, consistent, and transparent.",
      "The discussion shifts from “What does this column mean?” to “Why did performance change?”",
    ],
  },
  {
    id: 2,
    title: "Replace Reactive Audits with Continuous Oversight",
    sublines: ["Move from periodic review", "to structured cadence"],
    icon: "/assets/replace-reactive.svg",
    description: [
      "Most supplier oversight today is retrospective. Performance is reviewed monthly or quarterly, often after customer impact has already occurred.",
      "Stratus introduces structured cadence. Evidence is requested on defined intervals. Structural validation checks completeness and coherence automatically. Drift indicators highlight changes early, not months later.",
      "Human accountability remains central. Stratus strengthens oversight by making signals visible sooner, giving both insurer and supplier time to act before minor deviations escalate.",
    ],
  },
  {
    id: 3,
    title: "Create a Shared\nIntelligence Layer",
    sublines: ["Same data. Different perspectives.", "Aligned outcomes."],
    icon: "/assets/shared-intelligence.svg",
    description: [
      "Insurers and suppliers frequently operate from different interpretations of the same performance data. This creates friction and, over time, defensive reporting behaviours.",
      "Stratus creates a shared intelligence environment. Both parties operate from the same structured dataset, mapped explicitly to contractual SLA parameters.",
      "Insurers see performance against agreed standards, drift indicators, and review logs. Suppliers see exactly what is being measured, where performance is strong, and where improvement is required.",
      "Ambiguity is removed. Governance becomes collaborative rather than corrective.",
    ],
  },
  {
    id: 4,
    title: "Interrogate Performance,\nNot Just Review It",
    sublines: ["Ask better questions", "of your supply chain"],
    icon: "/assets/interrogate-performance.svg",
    description: [
      "Headline KPIs rarely tell the full story. Stratus enables deeper interrogation of performance data.",
      "Users can explore specific dimensions of performance — such as how vulnerable customers are handled, how certain demographic groups experience service, or how performance shifts when claims complexity increases.",
      "The Stratus AI Assistant does not make decisions. It surfaces patterns, highlights anomalies, and enables structured questioning of the data. Outliers are preserved, not removed. Poor performance cannot be filtered out of view.",
      "This supports informed, evidence-based improvement conversations across the supply chain.",
    ],
  },
  {
    id: 5,
    title: "Gain Portfolio-Level Visibility\nAcross Suppliers",
    sublines: ["See the network,", "not just the node"],
    icon: "/assets/portfolio-visibility.svg",
    description: [
      "As additional suppliers operate within Stratus, insurers gain consistent macro-level visibility across their supply chain.",
      "Performance can be viewed through a unified framework. Drift patterns can be identified across providers. Improvement trends can be tracked consistently. Supplier performance becomes comparable within structured parameters.",
      "This enables more confident governance decisions at portfolio level.",
    ],
  },
  {
    id: 6,
    title: "Enable Performance-Led\nSupply Chain Expansion",
    sublines: ["Strengthen partnerships", "through structured evidence"],
    icon: "/assets/expansion.svg",
    description: [
      "Structured performance data creates long-term strategic value.",
      "Insurers can identify high-performing suppliers capable of supporting additional volume or filling network gaps. Suppliers can demonstrate structured, SLA-aligned performance credentials when engaging with new insurer partners.",
      "Stratus does not act as a broker or marketplace. It does not re-route work. It provides the performance transparency that enables stronger, evidence-based supply relationships to form organically over time.",
    ],
  },
];

export default function Section4() {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenCardId((current) => (current === id ? null : id));
  };

  const renderCard = (card: (typeof cards)[number]) => {
    const isOpen = openCardId === card.id;

    return (
      <div key={card.id} className="w-full max-w-[523px]">
        <div
          className={`relative w-full bg-[#448CF0] px-[clamp(22px,2.4vw,37px)] py-[clamp(18px,2.2vw,28px)] text-white ${isOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
          role="button"
          tabIndex={0}
          onClick={() => handleToggle(card.id)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleToggle(card.id);
            }
          }}
        >
          <div className="flex items-start justify-between gap-6">
            <div className="text-left">
              <div className="font-medium leading-tight text-[clamp(18px,1.8vw,24px)]">
                {card.title.split("\n").map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <div className="mt-3 font-normal leading-snug text-[clamp(13px,1.3vw,16px)]">
                {card.sublines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
            <div className="shrink-0 flex h-[clamp(56px,6vw,96px)] w-[clamp(56px,6vw,96px)] items-center justify-center">
              <Image
                src={card.icon}
                alt=""
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-6 flex w-full justify-center">
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
        </div>
        {isOpen ? (
          <div className="w-full rounded-b-[20px] border border-[#C7D6F2] bg-[#EEF6FF] px-[clamp(22px,2.4vw,37px)] py-8 text-slate-900">
            <div className="space-y-4 text-base font-normal leading-6">
              {card.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <Reveal delay={0}>
          <h2 className="text-center text-4xl font-semibold text-[#1867D4]">
            How Stratus Transforms Supplier Oversight
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-4 text-center text-[32px] font-normal text-[#448CF0] font-[Inter]">
            Turn inconsistent spreadsheets into structured intelligence
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 grid grid-cols-2 justify-items-center gap-x-[clamp(20px,3vw,90px)] gap-y-[clamp(22px,3vw,56px)]">
            {cards.map(renderCard)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
