import { Metadata } from "next";
import Hero from "@/components/landing/Hero";

export const metadata: Metadata = {
  title: "UniLearn",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <Hero />
    </main>
  );
}
