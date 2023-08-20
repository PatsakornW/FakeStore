import React, { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import Card_products from "../components/card_products";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const { products } = useContext(ProductsContext);
  // console.log(products);

  const popular = products.sort((a, b) => b.rating.rate - a.rating.rate);
  console.log(popular);

  const filterMen = products.filter((item) => {
    return item.category === "men's clothing";
  });

  const filterWomen = products.filter((item) => {
    return item.category === "women's clothing";
  });

  const filterElec = products.filter((item) => {
    return item.category === "electronics";
  });

  const filterJew = products.filter((item) => {
    return item.category === "jewelery";
  });

  const scrollToSection = (sectionName) => {
    const section = document.getElementById(sectionName);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }


};

  return (
    <div className="p-10 container mx-auto">
      <div
        className="hero  h-96 mt-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556630184-066f7ac4e15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              LET'S EXPLORE UNIQUE CLOTHES
            </h1>
            <p className="mb-5">
              Live for Influential and Innovative fashion !
            </p>
            <button className="btn btn-primary">Shop now</button>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-10">
        <h2 class="mb-4 text-2xl font-bold">Category</h2>
        <div className="flex gap-2 justify-between flex-wrap cursor-default">
          <div className="card w-80 bg-base-100 shadow-xl image-full"  onClick={() => scrollToSection('men-section')}>
            <div className="card-body ">
              <h2 className="card-title text-white flex justify-center">
                Men's Clothing
              </h2>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl image-full" onClick={() => scrollToSection('women-section')}>
            <div className="card-body ">
              <h2 className="card-title text-white flex justify-center">
                WoMen's Clothing
              </h2>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl image-full" onClick={() => scrollToSection('elec-section')}>
            <div className="card-body ">
              <h2 className="card-title  text-white flex justify-center">
                Electronic
              </h2>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl image-full" onClick={() => scrollToSection('jew-section')}>
            <div className="card-body ">
              <h2 className="card-title text-white flex justify-center">
                Jewelery
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10">
      <div class="flex items-center mb-4 text-2xl font-bold">
          <p>Popular </p>
          <div className="h-[1px] ms-2 bg-primary w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
          {popular.slice(0, 5).map((item) => (
            <Card_products products={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-10" id="men-section">
      <div class="flex items-center mb-4 text-2xl font-bold" >
          <p>Men's clothing </p>
          <div className="h-[1px] ms-2 bg-primary w-5/6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
          {filterMen.slice(0, 5).map((item) => (
            <Card_products products={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-10" id="women-section">
      <div class="flex items-center mb-4 text-2xl font-bold">
          <p>Women's Clothing </p>
          <div className="h-[1px] ms-2 bg-primary w-5/6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
          {filterWomen.slice(0, 5).map((item) => (
            <Card_products products={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-10" id="elec-section">
      <div class="flex items-center mb-4 text-2xl font-bold">
          <p>Electronics </p>
          <div className="h-[1px] ms-2 bg-primary w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
          {filterElec.slice(0, 5).map((item) => (
            <Card_products products={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-10" id="jew-section">
        <div class="flex items-center mb-4 text-2xl font-bold">
          <p>Jewelery </p>
          <div className="h-[1px] ms-2 bg-primary w-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
          {filterJew.slice(0, 5).map((item) => (
            <Card_products products={item} key={item.id} />
          ))}
        </div>
      </div>

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default Home;
