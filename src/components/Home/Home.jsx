import React from "react";
import Carousel from "./Carousel";
import Sale from "./Sale";
import Arrivals from "./Arrivals";
import OFF from "./OFF";
import BestSeller from "./BestSeller";
import Special from "./Special";


export default function Home() {
  return (
    <div>
      <Carousel />
      <Sale />
      <Arrivals />
      <BestSeller />
      <OFF />
      <Special />
    </div>
  );
}
