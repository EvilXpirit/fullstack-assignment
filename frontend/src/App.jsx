import React from "react";
import HelpCenter from "./components/HelpCenter";
import Footer from "./components/Footer";
import Navbar from "./components/Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <HelpCenter />
      <Footer />
    </div>
  );
};

export default App;
