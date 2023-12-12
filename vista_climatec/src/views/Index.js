
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footer/Footer.js";
import Gallery from "views/index-sections/Gallery"
import ShouldCare from "views/index-sections/ShouldCare.js"
import OurGoal from "views/index-sections/OurGoal.js";
import Mockup from "views/index-sections/Mockup.js";
import Datos from "views/index-sections/Datos.js";
import Download from "views/index-sections/Download.js"

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <OurGoal/>
        <ShouldCare/>
        <Mockup/>
        <Datos />
        <Gallery/>
        <Download/>
        <Footer />
      </div>
    </>
  );
}

export default Index;
