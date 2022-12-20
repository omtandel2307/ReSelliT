import React from "react";

const SellBooks = () => {
  return (
    <div className="min-h-screen bg-deep-purple-accent-200 flex justify-center items-center">
      <div className="absolute w-48 h-48 rounded-xl bg-deep-purple-accent-700 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
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
                <input type="file" name="file" id="file" className="sr-only" />
                <label
                  for="file"
                  className="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                <div className="flex items-center justify-between">
                  <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                    banner-design.png
                  </span>
                  <button className="text-[#07074D]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
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
