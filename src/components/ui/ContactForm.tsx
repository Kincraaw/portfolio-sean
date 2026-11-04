"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";

const subjects = [
  "Proposition d’alternance",
  "Proposition de stage / emploi",
  "Question sur un projet",
  "Autre",
];

const field =
  "w-full rounded-xl border border-line-strong bg-bg/60 px-4 py-3 text-fg placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

/**
 * Formulaire sans serveur : à l'envoi, il ouvre la messagerie du visiteur
 * avec un email déjà rédigé et adressé à Sean.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const body = [
      message,
      "",
      "—",
      name,
      company && `Entreprise : ${company}`,
      `Email : ${email}`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-line bg-surface p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Nom *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Jeanne Dupont" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="jeanne@entreprise.fr"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Entreprise</span>
          <input name="company" autoComplete="organization" className={field} placeholder="Facultatif" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Sujet</span>
          <select name="subject" className={field} defaultValue={subjects[0]}>
            {subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-card text-fg">
                {subject}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="Bonjour Sean, …"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-on-accent transition hover:-translate-y-1 hover:bg-accent-hover"
        >
          <Send size={18} aria-hidden="true" />
          Envoyer le message
        </button>

        <p className="text-xs text-subtle" aria-live="polite">
          {sent
            ? "Votre messagerie s’est ouverte : il ne reste qu’à cliquer sur Envoyer."
            : "L’envoi ouvre votre messagerie avec le message prêt."}
        </p>
      </div>
    </form>
  );
}
