import React,{useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ProductsContext } from "../context/productsContext";



function Products_detail() {
  const {addCart} = useContext(CartContext)
  const {products} = useContext(ProductsContext)
  const { id } = useParams();



  const product = products.find((item)=> {
    return item.id === parseInt(id)
  });

  console.log(product);




  return(
    <div>
      {product ? (
        <div class="text-gray-700 flex h-screen  items-center ">
        <div class="container px-5  mx-auto">
          <div class="lg:w-4/5 mx-auto justify-center flex flex-wrap ">
            <img alt={product.title} class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" src={product.image}/>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div class="flex my-4 items-center">
                <div className="text-slate-400 capitalize">{product.category}</div>
                <div class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  
                <div className="flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
                  {product.rating.rate}</div>
                 
                </div>
              </div>
              <p class="leading-relaxed">{product.description}</p>

              <div class="flex my-4 items-center">
                <span class="title-font font-medium text-2xl text-gray-900">{product.price} $</span>
                <button class="flex ms-4  text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={()=> addCart(product,product.id)}>Add to Cart</button>
                <button class="rounded-full w-10 h-10 bg-red-500 hover:bg-red-600 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    

  )
}

export default Products_detail;
