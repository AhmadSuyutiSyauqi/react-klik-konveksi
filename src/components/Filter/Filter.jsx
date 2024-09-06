import React from "react";
import InputForm from "../Elements/Input/index";
import Label from "../Elements/Input/Label";
// import Input from "../Elements/Input";

const FilterProducts = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedBahan,
  setSelectedBahan,
}) => {
  return (
    <>
      <InputForm.SearchTerm
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        focus="outline-primer"
      />

      <div className="flex flex-col gap-2">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-primer rounded-md focus:outline-primer"
        >
          <option value="all">Semua</option>
          <option value="kemeja">Kemeja</option>
          <option value="jaket">Jaket</option>
          <option value="kaos">Kaos</option>
          <option value="aksesoris">Aksesoris</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <select
          value={selectedBahan}
          onChange={(e) => setSelectedBahan(e.target.value)}
          className="border border-primer rounded-md focus:outline-primer"
        >
          <option value="all">Semua</option>
          <option value="nagata-drill">Nagata Drill</option>
          <option value="japan-drill">Japan Drill</option>
          <option value="american-drill">American Drill</option>
          <option value="kanvas">Kanvas</option>
          <option value="taslan">Taslan</option>
          <option value="fleece">Fleece</option>
          <option value="denim">Denim</option>
          <option value="baby-terry">Baby Terry</option>
          <option value="combed20s">Cotton Combed 20s</option>
          <option value="combed24s">Cotton Combed 24s</option>
          <option value="combed30s">Cotton Combed 30s</option>
          <option value="combed-enzyme">Cotton Combed Enzyme</option>
          <option value="lanyard">Lanyard</option>
        </select>
      </div>
      </>
  );
};

export default FilterProducts;

// const searchTerm = searchInput.value.toLowerCase();
// const selectedCategory = categorySelect.value.toLowerCase();
// const selectedBahan = bahanSelect.value.toLowerCase();

// const filteredProductsKemeja = productsKemeja.filter((product) => {
//   const matchesBahan =
//     selectedBahan === "all" || product.bahan === selectedBahan;
//   const matchesCategory =
//     selectedCategory === "all" || product.category === selectedCategory;
//   const matchesSearchTerm =
//     product.name.toLowerCase().includes(searchTerm) ||
//     product.description1.toLowerCase().includes(searchTerm) ||
//     product.description2.toLowerCase().includes(searchTerm) ||
//     product.description3.toLowerCase().includes(searchTerm);

//   return matchesCategory && matchesSearchTerm && matchesBahan;
// });

// const filteredProductsJaket = productsJaket.filter((product) => {
//   const matchesBahan =
//     selectedBahan === "all" || product.bahan === selectedBahan;
//   const matchesCategory =
//     selectedCategory === "all" || product.category === selectedCategory;
//   const matchesSearchTerm =
//     product.name.toLowerCase().includes(searchTerm) ||
//     product.description1.toLowerCase().includes(searchTerm) ||
//     product.description2.toLowerCase().includes(searchTerm) ||
//     product.description3.toLowerCase().includes(searchTerm);

//   return matchesCategory && matchesSearchTerm && matchesBahan;
// });

// const filteredProductsKaos = productsKaos.filter((product) => {
//   const matchesBahan =
//     selectedBahan === "all" || product.bahan === selectedBahan;
//   const matchesCategory =
//     selectedCategory === "all" || product.category === selectedCategory;
//   const matchesSearchTerm =
//     product.name.toLowerCase().includes(searchTerm) ||
//     product.description1.toLowerCase().includes(searchTerm) ||
//     product.description2.toLowerCase().includes(searchTerm) ||
//     product.description3.toLowerCase().includes(searchTerm);

//   return matchesCategory && matchesSearchTerm && matchesBahan;
// });

// const filteredProductsAksesoris = productsAksesoris.filter((product) => {
//   const matchesBahan =
//     selectedBahan === "all" || product.bahan === selectedBahan;
//   const matchesCategory =
//     selectedCategory === "all" || product.category === selectedCategory;
//   const matchesSearchTerm =
//     product.name.toLowerCase().includes(searchTerm) ||
//     product.description1.toLowerCase().includes(searchTerm);

//   return matchesCategory && matchesSearchTerm && matchesBahan;
// });

// displayProducts(
//   filteredProductsKemeja,
//   filteredProductsJaket,
//   filteredProductsKaos,
//   filteredProductsAksesoris
// );
