"use client";

import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection";
import AboutSection from "../components/AboutSection";
import DishesSection from "../components/DishesSection";
import MenuSection from "../components/MenuSection";
import ReviewSection from "../components/ReviewSection";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
         <AboutSection />
        <CategorySection />
         <MenuSection />
        <DishesSection />
       
       
        <ReviewSection />
        <OrderSection />
      </main>
      <Footer />
    </>
  );
}
