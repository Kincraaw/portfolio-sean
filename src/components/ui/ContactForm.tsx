"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/client";

const field =
  "w-full rounded-xl border border-line-strong bg-bg/60 px-4 py-3 text-fg placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

/**
 * Formulaire sans serveur : à l'envoi, il ouvre la messagerie du visiteur
 * avec un email déjà rédigé et adressé à Sean.
 */
export default function ContactForm() {
  const { t } = useI18n();
  const f = t.contact.form;
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const signature = [name, company && `${f.companyLine} : ${company}`, `Email : ${email}`]
      .filter(Boolean)
      .join("\n");
    const body = `${message}\n\n—\n${signature}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-line bg-surface p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">{f.name} *</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder={f.namePlaceholder}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">{f.email} *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder={f.emailPlaceholder}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">{f.company}</span>
          <input
            name="company"
            autoComplete="organization"
            className={field}
            placeholder={f.optional}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">{f.subject}</span>
          <select name="subject" className={field} defaultValue={f.subjects[0]}>
            {f.subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-card text-fg">
                {subject}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">{f.message} *</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder={f.messagePlaceholder}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-on-accent transition hover:-translate-y-1 hover:bg-accent-hover"
        >
          <Send size={18} aria-hidden="true" />
          {f.submit}
        </button>

        <p className="text-xs text-subtle" aria-live="polite">
          {sent ? f.sent : f.hint}
        </p>
      </div>
    </form>
  );
}
