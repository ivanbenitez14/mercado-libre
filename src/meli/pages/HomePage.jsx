import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const totalProducts = products.results?.length;

  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const productList = async () => {
    const resp = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    const products = await resp.json();

    setProducts(products);
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <>
      <div className="app">
        <div className="navbar">
          <div className="">
            <img src="http://recibiloencasa.com/demos/recibilo/images/tiendas/mercadolibre.png" className="nav-logo"/>
          </div>

          <div className="search">
            <input
              className="search-input"
              onChange={(event) => setQuery(event.currentTarget.value)}
              name="product"
              type="text"
            ></input>
            <button className="searchIcon" onClick={productList}>
              <i class="bi bi-search"></i>
            </button>
          </div>

          <div className="">
            <button>Ingresa</button>
          </div>
        </div>

        <div className="products">
          <div className="filter">
            <p className="">Filtros</p>
          </div>

          <div className="product">
            {products.results
              ?.map((product) => (
                <div className="cards" key={product.id}>
                  <figure>
                    <img className="pictures" src={product.thumbnail} />
                  </figure>
                  <div>
                    <span className="product-title">{product.title}</span>
                    <h3>$ {product.price}</h3>
                  </div>
                </div>
              ))
              .slice(firstIndex, lastIndex)
            }

            <Pagination
              productsPerPage={productsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalProducts={totalProducts}
            />
          </div>
        </div>
      </div>
    </>
  );
};
