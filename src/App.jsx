import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BestDeals from "./components/BestDeals";
import Programs from "./components/Programs";
import NewRelease from "./components/NewRelease";
import Footer from "./components/Footer";
import NewFlavours from "./components/NewFlavors/NewFlavours.jsx";
import Rows from "./components/Rows/Rows.jsx";

const App = () => {
  return (
    <div className="font-roboto">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-10">
        <BestDeals />
      </div>
      <div className="mt-20">
        <Programs />
      </div>
      <div className="mt-20">
        <NewRelease />
      </div>
      <div className="mt-20">
        <NewFlavours />
      </div>
      <div className="mt-20">
        <div className=" mb-5">
          <Rows />
        </div>
        <div className=" mb-5">
          <Rows />
        </div>
        <div className=" mb-5">
          <Rows />
        </div>
      </div>
      <div className="my-20 ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
