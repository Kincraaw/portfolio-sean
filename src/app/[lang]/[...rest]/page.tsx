import { notFound } from "next/navigation";

// Toute adresse inconnue (ex. /fr/nimporte-quoi) affiche la page 404 du site,
// dans la bonne langue et avec la Navbar.
export default function CatchAll() {
  notFound();
}
