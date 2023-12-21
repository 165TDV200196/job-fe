import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import ListJobs from "./ListJobs/ListJobs";

export default function Home() {
  return (
    <div>
      <Banner />
      <ListJobs />
      <Footer />
    </div>
  );
}
