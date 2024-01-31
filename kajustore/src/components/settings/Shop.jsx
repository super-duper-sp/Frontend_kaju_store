import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopDetails, postShopDetails } from "../../features/shop/shopSlices";
import { reset } from "../../features/shop/shopSlices";
import { toast } from "react-toastify";

const Shop = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    contact_number: "",
    description: ""
  });

  const [isEditing, setEditing] = useState(false);

  const { email, name, address , contact_number, description } = formData;

  const dispatch = useDispatch();

  const { shopDetails, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.shops
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || shopDetails) {
      // Set default values when isEditing is true
    }
    dispatch(getShopDetails());
  }, [isEditing, shopDetails, isError, isSuccess]);

  

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    const shopData = {
      email,
      name,
      address,
      contact_number,
      description
    };

    dispatch(postShopDetails(shopData));
    setEditing(false);
  
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const onChange = (e) => {
    if(isEditing){setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));}
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Shop Details Manage
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <form>
          {/* Shop Name */}
          <div className="mb-4">
            <label
              htmlFor="shop-name"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Shop Name
            </label>
            {isEditing ? (
              <input
                type="text"
                id="shop-name"
                name="name"
                onChange={onChange}
                value={name || shopDetails.name}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter shop name"
              />
            ) : (
              <div className="mt-1 p-2 border rounded-md bg-gray-100">
                {shopDetails.name}
              </div>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            {isEditing ? (
              <input
                type="text"
                id="address"
                onChange={onChange}
                value={address || shopDetails.address}
                name="address"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter address"
              />
            ) : (
              <div className="mt-1 p-2 border rounded-md bg-gray-100">
                {shopDetails.address}
              </div>
            )}
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                value={email || shopDetails.email}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter email address"
              />
            ) : (
              <div className="mt-1 p-2 border rounded-md bg-gray-100">
                {shopDetails.email}
              </div>
            )}
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label
              htmlFor="contact-number"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Contact Number
            </label>
            {isEditing ? (
              <input
                type="text"
                id="contact-number"
                name="contact_number"
                onChange={onChange}
                value={contact_number || shopDetails.contact_number}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter contact number"
              />
            ) : (
              <div className="mt-1 p-2 border rounded-md bg-gray-100">
                {shopDetails.contact_number}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            {isEditing ? (
              <textarea
                id="description"
                name="description"
                onChange={onChange}
                value={description || shopDetails.description}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Write about the shop"
              />
            ) : (
              <div className="mt-1 p-2 border rounded-md bg-gray-100">
                {shopDetails.description}
              </div>
            )}
          </div>

          {/* Edit, Save, Cancel Buttons */}
          <div className="flex justify-end mt-6">
            {isEditing ? (
              <>
                <button
                  type="button"
                  className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
              </>
            ) : (
              <button
                type="button"
                className="px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shop;
