"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const CatalogueParticles = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[200px] xl:h-[300px] w-full flex-col items-center justify-center overflow-hidden border-b-[1px] bg-background">
      <h1 className="h-full flex items-center pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl sm:text-6xl xl:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Santri Chain Catalogue
      </h1>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default CatalogueParticles;
