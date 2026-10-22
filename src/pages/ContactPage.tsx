import { useState, type FormEvent } from "react";
import ContactBanner from "/contactBackgroundCompressed.webp";
import SplitLines from "../components/SplitLines";

// Web3Forms access key for daese@daesegarmin.com, set in .env.local as VITE_WEB3FORMS_ACCESS_KEY
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

const address = "Jl. Ibrahim Adjie No.90, Kebonwaru, Kec. Batununggal, Kota Bandung, Jawa Barat 40272";
const mapQuery = encodeURIComponent(`PT Daese Garmin, ${address}`);
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

const contactDetails = [
  { label: "Phone", value: "+62 22 7200950", href: "tel:+62227200950" },
  { label: "Fax", value: "+62 22 7200905" },
  { label: "Email", value: "daese@daesegarmin.com", href: "mailto:daese@daesegarmin.com" },
];

// TODO: confirm the actual office hours
const officeHours = [
  { days: "Monday – Friday", hours: "08:00 – 17:00 WIB" },
  { days: "Saturday", hours: "08:00 – 12:00 WIB" },
  { days: "Sunday & public holidays", hours: "Closed" },
];

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.22em]";
const heading = "font-oswald text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl";
const label = "text-xs font-semibold tracking-wide text-neutral-800";
const input = "mt-2 w-full border-0 border-b border-neutral-400 bg-transparent px-0 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-merahDaese focus:outline-none focus:ring-0";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!web3FormsAccessKey) {
      setStatus("error");
      setErrorMessage("The contact form is not configured yet. Please email us directly at daese@daesegarmin.com.");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData),
      access_key: web3FormsAccessKey,
      subject: `New website inquiry from ${formData.get("name")}`,
      from_name: "Daese Garmin Website",
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message);

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong while sending your message. Please try again or email us at daese@daesegarmin.com.");
    }
  }

  return (
    <div className="bg-white font-montserrat text-neutral-900">
      <section aria-labelledby="contact-title" className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-neutral-900 pt-40 pb-16 sm:min-h-[620px] sm:pb-20">
        <img src={ContactBanner} alt="Garment cutting machinery at our factory" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="page-container">
          <p className={`${eyebrow} mb-6 text-white/80`}>Contact us / Bandung, Indonesia</p>
          <SplitLines as="h1" className="max-w-3xl font-oswald text-6xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Contact us for<br />your garment needs.
          </SplitLines>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/85 sm:text-base">
            We are here to assist you with any inquiries or requests regarding our garment manufacturing services. Please feel free to reach out to us through the contact information provided below, and our team will be happy to help you.
          </p>
          <a href="#contact-form" className="mt-8 inline-flex items-center gap-6 border-b border-white/80 pb-2 text-xs font-semibold uppercase tracking-[0.16em] !text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Send us a message <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section aria-labelledby="details-title" className="page-container py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className={`${eyebrow} mb-5 text-merahDaese`}>01 / Get in touch</p>
            <h2 id="details-title" className={heading}>Let's talk about<br />your next order.</h2>
          </div>
          <p className="max-w-lg self-end text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
            Reach our office directly by phone or email, or visit us at our factory in Bandung during office hours.
          </p>
        </div>

        <div className="mt-12 grid border-t border-neutral-400 sm:mt-16 md:grid-cols-3">
          <article className="border-b border-neutral-400 py-8 md:border-r md:pr-8">
            <h3 className={`${eyebrow} text-merahDaese`}>Office &amp; factory</h3>
            <address className="mt-5 text-sm leading-7 not-italic text-neutral-800">
              Jl. Ibrahim Adjie No.90, Kebonwaru,<br />
              Kec. Batununggal, Kota Bandung,<br />
              Jawa Barat 40272, Indonesia
            </address>
            <a href={mapDirectionsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 border-b border-neutral-900 pb-1 text-xs font-semibold uppercase tracking-[0.16em] !text-neutral-900 transition-colors hover:border-merahDaese hover:!text-merahDaese">
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="border-b border-neutral-400 py-8 md:border-r md:px-8">
            <h3 className={`${eyebrow} text-merahDaese`}>Phone &amp; email</h3>
            <dl className="mt-5 space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs text-neutral-500">{detail.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-neutral-900">
                    {detail.href
                      ? <a href={detail.href} className="!text-neutral-900 underline-offset-4 hover:!text-merahDaese hover:underline">{detail.value}</a>
                      : detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="border-b border-neutral-400 py-8 md:pl-8">
            <h3 className={`${eyebrow} text-merahDaese`}>Office hours</h3>
            <dl className="mt-5 space-y-4">
              {officeHours.map((slot) => (
                <div key={slot.days}>
                  <dt className="text-xs text-neutral-500">{slot.days}</dt>
                  <dd className="mt-1 text-sm font-semibold tabular-nums text-neutral-900">{slot.hours}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section id="contact-form" aria-labelledby="form-title" className="scroll-mt-32 border-y border-neutral-400 bg-[#eeece7] py-16 sm:py-24">
        <div className="page-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className={`${eyebrow} mb-5 text-merahDaese`}>02 / Send a message</p>
            <h2 id="form-title" className={heading}>Tell us what<br />you need.</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-700">
              Fill in the form and your message will go straight to our team at daese@daesegarmin.com. We usually reply within one to two business days.
            </p>
          </div>

          {status === "success" ? (
            <div role="status" className="flex flex-col justify-center border-t border-neutral-400 py-10">
              <p className={`${eyebrow} text-merahDaese`}>Message sent</p>
              <p className="mt-4 font-oswald text-3xl font-medium tracking-tight sm:text-4xl">Thank you for reaching out.</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-700">We have received your message and will get back to you as soon as possible.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-8 w-fit border-b border-neutral-900 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900 transition-colors hover:border-merahDaese hover:text-merahDaese">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {/* Honeypot field to filter out spam bots */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <label className="block">
                <span className={label}>Full name *</span>
                <input type="text" name="name" required autoComplete="name" placeholder="Your name" className={input} />
              </label>
              <label className="block">
                <span className={label}>Company</span>
                <input type="text" name="company" autoComplete="organization" placeholder="Company name" className={input} />
              </label>
              <label className="block">
                <span className={label}>Email *</span>
                <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={input} />
              </label>
              <label className="block">
                <span className={label}>Phone / WhatsApp</span>
                <input type="tel" name="phone" autoComplete="tel" placeholder="+62 ..." className={input} />
              </label>
              <label className="block sm:col-span-2">
                <span className={label}>Message *</span>
                <textarea name="message" required rows={6} placeholder="Tell us about your product, quantities, and timeline." className={`${input} resize-y`} />
              </label>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-neutral-500">* Required fields</p>
                <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center gap-4 bg-merahDaese px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-merahDaese disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "submitting" ? "Sending..." : "Send message"} <span aria-hidden="true">→</span>
                </button>
              </div>

              {status === "error" && (
                <p role="alert" className="border-l-2 border-merahDaese pl-4 text-sm leading-6 text-merahDaese sm:col-span-2">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </section>

      <section aria-labelledby="map-title" className="page-container py-16 sm:py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className={`${eyebrow} mb-5 text-merahDaese`}>03 / Find us</p>
            <h2 id="map-title" className={heading}>Visit our factory.</h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-neutral-700">{address}</p>
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-neutral-200 sm:aspect-[2/1]">
          <iframe
            title="Map showing the location of PT Daese Garmin in Bandung"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full w-full border-0 grayscale-[30%]"
          />
        </div>
      </section>
    </div>
  );
}
