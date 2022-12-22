import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Loader from "./Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import Toaster from "../components/Toaster";
import { useStateValue } from "../context/StateProvider";
import { saveItem } from "../utils/firebaseFunctions";
import { useNavigate } from "react-router-dom";

const SellBooks = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [price, setPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bookUploaded, setBookUploaded] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const [{ user }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setTimeout(() => {
            setImageUploaded(true);
          }, 4000);
          setImageURL(downloadURL);
        });
      }
    );
  };

  const deleteImage = (e) => {
    setIsLoading(false);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setTimeout(() => {}, 4000);
    });
  };
  const saveDetails = async () => {
    setIsLoading(true);
    try {
      if (
        !name ||
        !owner ||
        !price ||
        !phoneNumber ||
        !description ||
        !imageAsset
      ) {
        <Toaster text="Please Fill Fields" />;
        setIsLoading(false);
      } else {
        const data = {
          id: `${Date.now()}`,
          bookName: name,
          ownerName: owner,
          price: price,
          phoneNumber: phoneNumber,
          description: description,
          imageURL: imageURL,
          uid: user.uid,
          userName: user.displayName,
          ownerEmail: user.email,
        };
        await saveItem(data);
        setIsLoading(false);
        setBookUploaded(true);
        console.log("FB Data", data);
        setImageAsset(null);
        setTimeout(() => {
          setBookUploaded(false);
          history("/buybooks");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-deep-purple-accent-200 flex justify-center items-center">
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 m-5">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Add Book to Sell
          </h1>
          {bookUploaded ? <Toaster text="Book Uploaded Successfully" /> : <></>}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-5">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                Name of Book:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Book Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                Owner:
              </label>
              <input
                type="owner"
                name="owner"
                id="owner"
                placeholder="Owner Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                Price(₹):
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                Phone Number:
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Phone Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imageAsset ? (
                  <>
                    <label className="w-full h-full cursor-pointer">
                      <label className="mb-1 block text-base font-medium text-[#07074D]">
                        Upload Image:
                      </label>

                      <input
                        type="file"
                        name="uploadImage"
                        accept="image/*"
                        onChange={uploadImage}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relative h-full lg:h-[250px]">
                      <img
                        src={imageAsset}
                        alt="uploaded img"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out "
                        onClick={deleteImage}
                      >
                        <MdDelete className="text-black" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            className="py-2 w-64 text-xl text-white bg-deep-purple-accent-700 rounded-2xl"
            onClick={saveDetails}
          >
            Add Book
          </button>
        </div>
      </div>
      <div className="w-20 h-40 absolute bg-deep-purple-accent-700 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default SellBooks;
