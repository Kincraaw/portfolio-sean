import { Gamepad2, Laptop, Plane, type LucideIcon } from "lucide-react";
import type { Localized } from "@/i18n/config";

export type Interest = {
  label: Localized;
  icon: LucideIcon;
};

export const interests: Interest[] = [
  { label: { fr: "Voyages", en: "Travel" }, icon: Plane },
  { label: { fr: "Jeux vidéo", en: "Video games" }, icon: Gamepad2 },
  { label: { fr: "Informatique", en: "Computing" }, icon: Laptop },
];
