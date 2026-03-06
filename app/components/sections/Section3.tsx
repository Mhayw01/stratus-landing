"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Section3() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-8 py-20">
        <Reveal delay={0}>
          <h2 className="text-center text-4xl font-semibold text-[#1867D4]">
            Structured Intelligence for Insurance Supply Networks
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[900px] text-center text-2xl font-normal leading-8 text-stone-500">
            At beta stage, Stratus provides a structured governance and
            intelligence layer across insurer supplier relationships. It
            introduces consistent performance alignment, shared visibility, and
            measurable oversight without disrupting existing claims systems.
          </p>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={0.35}>
            <div className="mx-auto flex max-w-[720px] flex-col gap-8">
              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/structured-sla-mapping.svg"
                    alt="Evidence-led icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    Structured SLA Mapping
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Supplier operational data aligned directly to insurer-defined
                    SLA frameworks
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/continuos-evidence-cadence.svg"
                    alt="Identity icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    Continuous Evidence Cadence
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Defined upload cycles that support ongoing oversight rather
                    than periodic audit
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/performance-drift-protection.svg"
                    alt="Matter icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    Performance Drift Detection
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Early identification of deviation across key parameters
                    before issues escalate
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/shared-intelligence-dashboards.svg"
                    alt="AI icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    Shared Intelligence Dashboards
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Aligned insurer and supplier views built on the same
                    structured dataset
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/governance-and-action-logging.svg"
                    alt="Lawyer icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    Governance &amp; Action Logging
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Documented review processes that evidence continuous
                    oversight
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/AI-Assisted-data-interrogation.svg"
                    alt="Audit icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    AI-Assisted Data Interrogation
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Structured querying of supplier data to surface patterns,
                    anomalies, and emerging risk signals
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[64px_1fr] items-center gap-6">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center">
                  <Image
                    src="/assets/portfolio-level-visibility.svg"
                    alt="Data icon"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-6 text-[#1867D4]">
                    Portfolio-Level Visibility
                  </div>
                  <div className="text-base font-medium leading-6 text-stone-500">
                    Consistent cross-supplier performance insight within a
                    unified governance framework
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.75}>
          <div className="mt-16 flex flex-col items-center">
            <div className="w-full max-w-[1066px] text-center text-2xl font-normal leading-8 text-stone-600 font-[Inter]">
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
              <br />
              <br />
            </div>
            <div className="mt-8 w-full max-w-[420px] text-center text-2xl font-normal leading-8 text-stone-600 font-[Inter]">
              Oversight becomes measurable.
              <br />
              Performance becomes visible.
              <br />
              Governance becomes continuous.
            </div>
            <button
              type="button"
              onClick={() => {
                const win = window as Window & {
                  openContactModal?: () => void;
                };
                if (win.openContactModal) {
                  win.openContactModal();
                } else {
                  window.dispatchEvent(new Event("open-contact"));
                }
              }}
              className="mt-10 flex h-20 w-[498px] items-center justify-center rounded-[20px] bg-[#1867D4] text-3xl font-medium text-white"
            >
              Contact us to find out more
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
