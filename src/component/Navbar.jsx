"use client";
import React, { useState } from "react";
import { FloatingNav } from "./Ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import HeroSection from "./her";

const FloatingNavDemo = () => {
  const [active, setActive] = useState("Home");
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "/Project",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} active={active} setActive={setActive} />
      <HeroSection />
    </div>
  );
};
export default FloatingNavDemo;
