import React from "react";

const SellBooks = () => {
  const uploadImage = (e) => {};

  return (
    <div className="min-h-screen bg-deep-purple-accent-200 flex justify-center items-center">
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 m-5">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Add Book to Sell
          </h1>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-5">
              <label
                for="name"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Name of Book:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Book Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="owner"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Owner:
              </label>
              <input
                type="owner"
                name="owner"
                id="owner"
                placeholder="Owner Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="price"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Price(₹):
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="number"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Phone Number:
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Phone Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="description"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-6 pt-1">
              <label
                for="name"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Upload Image:
              </label>
              <div className="mb-2">
                <input
                  type="file"
                  name="uploadImage"
                  accept="image/*"
                  onChange={uploadImage}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="py-2 w-64 text-xl text-white bg-deep-purple-accent-700 rounded-2xl">
            Add Book
          </button>
        </div>
      </div>
      <div className="w-20 h-40 absolute bg-deep-purple-accent-700 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default SellBooks;
