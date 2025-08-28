import CineAmbientalSection from "@/components/cine-ambiental-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cine Ambiental – IWPPO 2025",
  description: "Sessão de filme + Shark Quiz para escolas públicas.",
};

export default function Page() {
  return <CineAmbientalSection className="py-12 md:py-16" />;
}
