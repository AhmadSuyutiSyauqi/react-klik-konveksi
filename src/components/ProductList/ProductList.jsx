import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({
  productsKemeja,
  productsJaket,
  productsKaos,
  productsAksesoris,
  searchTerm,
  selectedCategory,
  selectedBahan,
}) => {
  const filterProducts = (products) => {
    return products.filter((product) => {
      const matchesBahan =
        selectedBahan === "all" || product.bahan === selectedBahan;
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearchTerm =
        product.name?.toLowerCase().includes(searchTerm.toLowerCase() || "") ||
        product.description1?.toLowerCase().includes(searchTerm.toLowerCase() || "") ||
        product.description2?.toLowerCase().includes(searchTerm.toLowerCase() || "") ||
        product.description3?.toLowerCase().includes(searchTerm.toLowerCase() || "");
      return matchesCategory && matchesSearchTerm && matchesBahan;
    });
  };

  const filteredProductsKemeja = filterProducts(productsKemeja);
  const filteredProductsJaket = filterProducts(productsJaket);
  const filteredProductsKaos = filterProducts(productsKaos);
  const filteredProductsAksesoris = filterProducts(productsAksesoris);

  return (
    <div>
        <LabelProducts id="bahan-kemeja" productName='Kemeja'/>
      <div className="flex justify-around">
        {filteredProductsKemeja.length === 0 ? (
          <p>Kemeja tidak ditemukan</p>
        ) : (
          filteredProductsKemeja.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))
        )}
      </div>
      <LabelProducts id="bahan-jaket" productName='Jaket'/>
      <div className="flex justify-around md:flex-wrap gap-20">
        {filteredProductsJaket.length === 0 ? (
          <p>Jaket tidak ditemukan</p>
        ) : (
          filteredProductsJaket.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))
        )}
      </div>
      <LabelProducts id="bahan-kaos" productName='Kaos'/>
      <div className="flex justify-around md:flex-wrap">
        {filteredProductsKaos.length === 0 ? (
          <p>Kaos tidak ditemukan</p>
        ) : (
          filteredProductsKaos.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))
        )}
      </div>
      <LabelProducts id="aksesoris" productName='Aksesoris'/>
      <div className="flex justify-around">
        {filteredProductsAksesoris.length === 0 ? (
          <p>Aksesoris tidak ditemukan</p>
        ) : (
          filteredProductsAksesoris.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

const LabelProducts = (props) =>{
    const {productName, id} = props;
    return (
        <>
         <h1 id={id} className="text-lg text-primer mt-4">{productName}</h1>
          <div className="garis w-full border-[1px] border-gray-400 rounded-lg mt-2 relative"></div>
          </>
    )
}

export default ProductList;
