"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Basic client-side validation
    if (!data.name || !data.email || !data.phone) {
      setError("Please fill in your name, email and phone.");
      setStatus("error");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email));
    if (!emailOk) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please call us or try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-forest-600/20 bg-forest-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-forest-600" />
        <h3 className="mt-4 font-display text-2xl text-forest-900">
          Thanks — we&apos;ll be in touch!
        </h3>
        <p className="mt-2 text-forest-900/70">
          We received your request and will reach out shortly to schedule your
          free consultation.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-forest-900/15 bg-white px-4 py-3 text-forest-900 placeholder:text-forest-900/40 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-forest-900">
            Name
          </label>
          <input id="name" name="name" className={inputClass} placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-forest-900">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="(941) 555-0000" required />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-forest-900">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClass} placeholder="you@email.com" required />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-forest-900">
          I&apos;m interested in
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-forest-900">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us a bit about your project..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-forest-700 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request My Free Consultation"
        )}
      </button>
      <p className="text-center text-xs text-forest-900/50">
        We&apos;ll never share your information. No spam, ever.
      </p>
    </form>
  );
}
