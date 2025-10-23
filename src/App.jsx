import React from "react";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import EngageSection from "./components/EngageSection";

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Header />
      <main>
        <ServicesSection />
        <WorkSection />
        <EngageSection />
      </main>
    </div>
  );
}

export default App;
