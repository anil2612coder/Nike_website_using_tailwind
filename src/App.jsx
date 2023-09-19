import React from "react";
import Hero from "../src/sections/Hero";
import PopularProduct from "../src/sections/PopularProduct";
import Services from "../src/sections/Services";
import CustomerReviews from "../src/sections/CustomerReviews";
import Footer from "../src/sections/Footer";
import SuperQuality from "../src/sections/SuperQuality";
import Subscribe from "../src/sections/Subscribe";
import SpecialOffer from "../src/sections/SpecialOffer";
import Nav from "../src/components/Nav";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className=" padding padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
