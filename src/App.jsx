import React from "react";
import Navbar from "./component/Navbar";

import TechStack from "./component/techStack";
import FeatureCard from "./component/FeatureCard";
import Tech from "./component/Tech";
import About from "./component/About";
import Contectme from "./component/Contactme";
const App = () => {
  return (
    <div>
      <Navbar />
      <TechStack />
      <FeatureCard />
      <Tech />
      <About />
      <Contectme />
    </div>
  );
};

export default App;
