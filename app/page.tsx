import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% h-screen">
      <Navbar />
      <Header />
    </div>
  );
}
