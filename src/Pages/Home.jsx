import React from 'react';
import Heroslider from '../Components/Heroslider';
import Landingsmallcategory from '../Components/Landingsmallcategory';
import Taglinesection from '../Components/Taglinesection';
import Newlaunches from '../Components/Newlaunches';
import Marquee from '../Components/Marquee';
import Bestseller from '../Components/Bestseller';
import Toppicks from '../Components/Toppicks';
import Justtrending from '../Components/Justtrending';
import Shopbycategory from '../Components/Shopbycategory';
import Bestdeal from '../Components/Bestdeal';
import Testimonialmain from '../Components/Testimonialmain';
import Footer from '../Components/Footer';

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




  // marquee
  let marquee = [
    {
      img:'./src/assets/img/flow.png'
    },
    {
      img:'./src/assets/img/JUNE.png'
    },
    {
      img:'./src/assets/img/MAX.png'
    },
    {
      img:'./src/assets/img/NINO.png'
    },
    {
      img:'./src/assets/img/ZINE.png'
    },
    {
      img:'./src/assets/img/InTrend.png'
    },
    
  ]



  // best-seller
  let bestseller = [
    {
      img:"./src/assets/img/besrseller (1).png",
      title:'Mexico'
    },{
      img:"./src/assets/img/besrseller (2).png",
      title:'Ensens'
    },
    {
      img:"./src/assets/img/besrseller (3).png",
      title:'Chanel'
    },
    {
      img:"./src/assets/img/besrseller (4).png",
      title:'Origin'
    },
  ]

  return (
    <div>
      <Heroslider images={images} />
      <Landingsmallcategory/>
      <Taglinesection/>
      <Newlaunches/>
      <Marquee img={marquee}/>
      <Bestseller data={bestseller}/>
      <Toppicks/>
      <Justtrending/>
      <Shopbycategory/>
      <Bestdeal/>
      <Testimonialmain/>
      <Footer/>

    </div>
  );
};

export default Home;
