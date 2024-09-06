import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card card-compact w-48 md:w-60 bg-base-100 shadow-xl mt-10 align-baseline transition hover:scale-105 ease-in-out duration-300 flex-shrink-0">
        <figure>
          <img
            src={product.img}
            alt={product.name}
            className="rounded-t-xl object-cover h-32 w-full"
          />
        </figure>
        <CardBody product={product} />
      </div>
    </>
  );
};

// const CardImage = ({ product }) => {
//   return (
//     <figure>
//       <img
//         src={product.img}
//         alt={product.name}
//         className="rounded-t-xl object-cover h-32 w-full"
//       />
//     </figure>
//   );
// };

const CardBody = ({ product }) => {
  return (
    <div className="card-body">
      <h2 className="card-title font-semibold text-sm">{product.name}</h2>
      <p className="text-gray-600 text-[0.6rem] font-medium -mt-2">
        <span className="text-black">Kandungan Bahan : </span>
        {product.description1}
      </p>
      <p className="text-gray-600 text-[0.6rem] font-medium -mt-3">
        <span className="text-black">Gramasi :</span> {product.description2}
      </p>
      <p className="text-gray-600 text-[0.6rem] font-medium -mt-3">
        <span className="text-black">Rekom. Penggunaan : </span>
        {product.description3}
      </p>
      <p className="text-gray-600 text-sm font-semibold font">
        Start <br />
        Rp. {product.price.toLocaleString("id-ID")}
      </p>
      <div className="card-actions justify-end hover:text-white">
        <a>
          <button
            onClick={() => {
              localStorage.getItem("id")
                ? (window.location.href = product.link)
                : (localStorage.setItem("link", product.link),
                  (window.location.href = "/login"));
            }}
            id={product.btnId}
            className="btn-bahan btn btn-warning btn-xs"
          >
            Pilih Bahan
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
