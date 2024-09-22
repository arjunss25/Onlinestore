import React from 'react';
import Heroslider from '../Components/Heroslider';

const Home = () => {
  const images = [
    {
      image: "https://img.freepik.com/free-vector/perfume-spray-bottle-podium-with-clouds-sky-mock-up-banner-glass-flask-mockup-blue-heaven-background-scent-fragrance-cosmetic-product-promotion-advertising-realistic-3d-vector-illustration_107791-4550.jpg?size=626&ext=jpg&ga=GA1.1.1450349076.1718553543&semt=ais_hybrid",
    },
    {
      image: "https://img.freepik.com/free-vector/perfume-bottle-swirl-velvet-silk-fabric_33099-1547.jpg?size=626&ext=jpg&ga=GA1.1.1450349076.1718553543&semt=ais_hybrid",
    },
    {
      image: "https://img.freepik.com/free-vector/cosmetic-pump-bottle-banner_33099-2058.jpg?size=626&ext=jpg&ga=GA1.1.1450349076.1718553543&semt=ais_hybrid",
    },
  ];

  return (
    <div>
      <Heroslider images={images} />
    </div>
  );
};

export default Home;
