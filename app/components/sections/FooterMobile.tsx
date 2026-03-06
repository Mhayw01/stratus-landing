"use client";

import { useState } from "react";
import Image from "next/image";
import PolicyModal from "../PolicyModal";

export default function FooterMobile() {
  const [policyOpen, setPolicyOpen] = useState<null | "privacy" | "cookie">(null);

  const privacyContent = (
    <div className="space-y-4">
      <p>Last updated: 22 January 2026</p>

      <h3 className="text-base font-semibold text-slate-900">Who we are</h3>
      <p>
        This website is operated by Stratus Ltd. If you contact us through
        this website, we will handle your personal information responsibly and
        in line with UK data protection law.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        What information we collect
      </h3>
      <p>When you contact us using a form on our website, we may collect:</p>
      <ul className="list-disc pl-5">
        <li>Your name</li>
        <li>Your email address</li>
        <li>Any message you choose to send us</li>
      </ul>

      <h3 className="text-base font-semibold text-slate-900">
        How we use your information
      </h3>
      <p>We only use your information to:</p>
      <ul className="list-disc pl-5">
        <li>Respond to your enquiry</li>
        <li>Communicate with you about your request</li>
      </ul>
      <p>
        We do not use your details for marketing unless you have specifically
        asked us to.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        How we store your information
      </h3>
      <p>
        Your information is stored securely and only accessed when necessary to
        respond to your enquiry. We keep your data only for as long as needed.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        Sharing your information
      </h3>
      <p>
        We do not sell or share your personal data with third parties, except
        where required to operate our website or respond to you (for example,
        email services).
      </p>

      <h3 className="text-base font-semibold text-slate-900">Your rights</h3>
      <p>
        You have the right to request access to, correction of, or deletion of
        your personal data. To make a request, please contact us.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Contact us</h3>
      <p>Email: Stratus@Outlook.com</p>
      <p>Address: 57 Quarry Dale, Rumney, Cardiff, Wales, CF3 3BQ</p>
    </div>
  );

  const cookieContent = (
    <div className="space-y-4">
      <p>Last updated: 22 January 2026</p>

      <h3 className="text-base font-semibold text-slate-900">
        What are cookies?
      </h3>
      <p>
        Cookies are small text files that are placed on your device when you
        visit a website. They help the website function properly and improve
        your experience.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        How we use cookies
      </h3>
      <p>We use cookies on this website to:</p>
      <ul className="list-disc pl-5">
        <li>Make sure the website works correctly</li>
        <li>
          Understand how visitors use our website (for example, through basic
          analytics)
        </li>
      </ul>
      <p>We do not use cookies to personally identify you.</p>

      <h3 className="text-base font-semibold text-slate-900">
        Types of cookies we use
      </h3>
      <p>Essential cookies:</p>
      <p>
        These cookies are necessary for the website to function properly and
        cannot be switched off.
      </p>
      <p>Analytics cookies (if used):</p>
      <p>
        These cookies help us understand how visitors use our website so we can
        improve it.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        Managing cookies
      </h3>
      <p>
        You can control or delete cookies through your browser settings at any
        time. Please note that disabling cookies may affect how the website
        functions.
      </p>

      <h3 className="text-base font-semibold text-slate-900">
        Changes to this policy
      </h3>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h3 className="text-base font-semibold text-slate-900">Contact us</h3>
      <p>If you have any questions about our use of cookies, please contact us at:</p>
      <p>Email: Stratus@Outlook.com</p>
    </div>
  );

  const policyTitle =
    policyOpen === "privacy"
      ? "Privacy Policy"
      : policyOpen === "cookie"
      ? "Cookie Policy"
      : "";

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-r from-[#3E6FA4] to-[#6FA8DC]">
      <div className="mx-auto w-full max-w-[420px] px-4 py-4 text-white">
        <div className="flex items-start justify-between gap-4">
          <Image
            src="/assets/stratus-logo.svg"
            alt=""
            width={120}
            height={56}
            className="shrink-0"
          />
          <div className="flex flex-col items-end gap-1 text-sm">
            <button
              type="button"
              onClick={() => setPolicyOpen("privacy")}
              className="hover:underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setPolicyOpen("cookie")}
              className="hover:underline"
            >
              Cookie Policy
            </button>
          </div>
        </div>
        <div className="mt-3 text-center text-xs leading-5">
          Copyright © 2026 – STRATUS SUPPLIER INTELLIGENCE LIMITED. All rights
          reserved
        </div>
        <div className="text-center text-xs leading-5">
          Company number 17004772
        </div>
      </div>
      <PolicyModal
        isOpen={policyOpen !== null}
        onClose={() => setPolicyOpen(null)}
        title={policyTitle}
        content={policyOpen === "privacy" ? privacyContent : cookieContent}
      />
    </footer>
  );
}
