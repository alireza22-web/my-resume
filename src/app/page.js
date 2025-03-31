import DarkModeToggle from "@/components/darkToggle/DarkToggle";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Skille } from "@/components/skille/Skille";
import { Title } from "@/components/title/Title";

export default function Home() {
  return (
    <div className="dark:bg-slate-800 min-h-screen dark:text-white bg-neutral-200 text-black relative z-20">
      <Navbar/>
      <Title/>
      <Skille/>
      <Footer/>
      
    </div>
  );
}
