import React, { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import Card_products from "../components/card_products";

function Home() {
  const { products } = useContext(ProductsContext);

  const filterMenWomen = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div className="p-16 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {filterMenWomen.map((item)=>(
                <Card_products products={item} key={item.id}/>
            ))}

        </div>

    </div>
  );
}

export default Home;
