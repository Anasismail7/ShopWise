import React from "react";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Services from "../../Components/Services/Services";
import MySlider from "../../Components/Slider/MySlider";
import FeedBack from "../../Components/Feedbackslide/FeedBack";
import BestSummer from "../../Components/BestSummer/BestSummer";
import NewSall from "../../Components/Newsall/NewSall";
import ExclusiveProducts from "../../Components/Exclusiveproducts/ExclusiveProducts";
import FeaturedProducts from "../../Components/Featuredproducts/FeaturedProducts";

const Home = () => {
  return (
    <>
      <MySlider />
      <NewSall />
      <ExclusiveProducts />
      <BestSummer />
      <FeaturedProducts />
      <FeedBack />
      <Services />
    </>
  );
};

export default Home;
