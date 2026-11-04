import { Gamepad2, Laptop, Plane, type LucideIcon } from "lucide-react";

export type Interest = {
  label: string;
  icon: LucideIcon;
};

export const interests: Interest[] = [
  { label: "Voyages", icon: Plane },
  { label: "Jeux vidéo", icon: Gamepad2 },
  { label: "Informatique", icon: Laptop },
];
