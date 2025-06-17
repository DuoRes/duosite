"use client";

import { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "working-papers",
        "published-papers",
        "cv",
      ];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "cv") {
      window.open("/CV (4).pdf", "_blank");
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "working-papers", label: "Working papers" },
    { id: "published-papers", label: "Published papers" },
    { id: "cv", label: "CV" },
    { id: "keybee", label: "Keybee" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-white px-8 py-12 flex flex-col">
      {/* Logo/Name */}
      <div className="mb-16">
        <h1 className="text-3xl font-light text-black tracking-wide">
          mingduo
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block text-left text-lg transition-colors duration-200 bg-transparent border-none p-0 ${
                  activeSection === item.id
                    ? "text-black font-medium underline decoration-2 underline-offset-4"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-16">
        <div className="text-sm text-gray-500 space-y-2">
          <div className="text-orange-500 font-medium">Berkeley Haas</div>
          <div>Berkeley, California, 2025</div>
          <div>mingduo@berkeley.edu</div>
          <div>
            Contact via <span className="text-blue-600">in</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
