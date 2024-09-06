import { useState } from "react";

const UploadImage = () => {
    const [imgSrc1, setImgSrc1] = useState("");
    const [imgSrc2, setImgSrc2] = useState("");
    const [imgSrc3, setImgSrc3] = useState("");
    const [imgSrc4, setImgSrc4] = useState("");
  
    // Generalized handleImgChange function
    const handleImgChange = (event, setImgSrc) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };

  return (
    <div className="container-upload-img flex gap-1 mt-6 flex-wrap">
      <div
        id="container-img1"
        onClick={() => document.querySelector(".imageInput1").click()}
        onChange={(e) => handleImgChange(e, setImgSrc1)}
        className="image-container hover:opacity-70 w-36 h-24 border-2 border-dashed border-gray-600 flex flex-col justify-center items-center mx-auto p-2 hover:border-primer lg:h-64 lg:ml-10 lg:w-52 lg:mx-0"
      >
        <div className="take-image fill-red-500">
          <input type="file" className="imageInput1 hidden" accept="image/*" />

          {imgSrc1 ? (
            <img
              src={imgSrc1}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          ) : (
            <img
              src={imgSrc1}
              alt="take img"
              width="20"
              fill="gray"
              className="opacity-50"
            />
          )}
        </div>
        <p className="text-image text-[0.5rem]">*Desain model bagian depan !</p>
      </div>
      <div
        id="container-img2"
        onClick={() => document.querySelector(".imageInput2").click()}
        onChange={(e) => handleImgChange(e, setImgSrc2)}
        className="image-container hover:opacity-70 w-36 h-24 border-2 border-dashed border-gray-600 flex flex-col justify-center items-center mx-auto p-2 hover:border-primer lg:h-64 lg:ml-10 lg:w-52 lg:mx-0"
      >
        <div className="take-image fill-red-500">
          <input type="file" className="imageInput2 hidden" accept="image/*" />

          {imgSrc2 ? (
            <img
              src={imgSrc2}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          ) : (
            <img
              src={imgSrc2}
              alt="take img"
              width="20"
              fill="gray"
              className="opacity-50"
            />
          )}
        </div>
        <p className="text-image text-[0.5rem]">*Desain model bagian belakang !</p>
      </div>

      <div
        id="container-img3"
        onClick={() => document.querySelector(".imageInput3").click()}
        onChange={(e) => handleImgChange(e, setImgSrc3)}
        className="image-container hover:opacity-70 w-36 h-24 border-2 border-dashed border-gray-600 flex flex-col justify-center items-center mx-auto p-2 hover:border-primer lg:h-64 lg:ml-10 lg:w-52 lg:mx-0"
      >
        <div className="take-image fill-red-500">
          <input type="file" className="imageInput3 hidden" accept="image/*" />

          {imgSrc3 ? (
            <img
              src={imgSrc3}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          ) : (
            <img
              src={imgSrc3}
              alt="take img"
              width="20"
              fill="gray"
              className="opacity-50"
            />
          )}
        </div>
        <p className="text-image text-[0.5rem]">*Desain model bagian kanan !</p>
      </div>

      <div
        id="container-img4"
        onClick={() => document.querySelector(".imageInput4").click()}
        onChange={(e) => handleImgChange(e, setImgSrc4)}
        className="image-container hover:opacity-70 w-36 h-24 border-2 border-dashed border-gray-600 flex flex-col justify-center items-center mx-auto p-2 hover:border-primer lg:h-64 lg:ml-10 lg:w-52 lg:mx-0"
      >
        <div className="take-image fill-red-500">
          <input type="file" className="imageInput4 hidden" accept="image/*" />

          {imgSrc4 ? (
            <img
              src={imgSrc4}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          ) : (
            <img
              src={imgSrc4}
              alt="take img"
              width="20"
              fill="gray"
              className="opacity-50"
            />
          )}
        </div>
        <p className="text-image text-[0.5rem]">*Desain model bagian kiri !</p>
      </div>
    </div>
  );
};

export default UploadImage;
