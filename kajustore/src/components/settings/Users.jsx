import React, { useState } from "react";

const Users = () => {
  const [isEditing, setEditing] = useState(false);
  const [image, setImage] = useState(null); // New state for image

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Add logic to save the form data
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // You may want to perform additional validation on the file type and size
    setImage(file);
  };

  const handleCancelClick = () => {
    setEditing(false);
    // Add logic to reset the form data or handle cancel action
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
      <div className="text-center sm:w-full">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Admin Details Manage
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>

      <div>
      <div className="py-8 px-8 max-w-sm mx-auto justify-center bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">

          <label className="block mx-auto h-24 w-24 rounded-full overflow-hidden sm:mx-0 sm:shrink-0">
            <img
              className="object-cover w-full h-full"
              src={image ? URL.createObjectURL(image) : "https://tailwindcss.com/img/erin-lindford.jpg"}
              alt="Profile"
            />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
          <div className="text-center space-y-2 sm:text-left">
  
           {isEditing && (
            <button
              type="button"
              className="px-4 py-1 mt-2 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={handleSaveClick}
            >
              Save
            </button>
             )}
           </div>
      </div>


        <div className="mt-6 border-t border-gray-100">
          <form>
            {/* ... (rest of the form content) */}

            {/* Admin Name */}
            <div className="mb-4">
              <label
                htmlFor="shop-name"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Admin Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  id="shop-name"
                  name="shop_name"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter shop name"
                />
              ) : (
                <div className="mt-1 p-2 border rounded-md bg-gray-100">
                  Admin-name{" "}
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
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter email address"
                />
              ) : (
                <div className="mt-1 p-2 border rounded-md bg-gray-100">
                  Email Address
                </div>
              )}
            </div>

            {/* isAdmin */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                isAdmin
              </label>
              {isEditing ? (
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter address"
                />
              ) : (
                <div className="mt-1 p-2 border rounded-md bg-gray-100">
                  isAdmin{" "}
                </div>
              )}
            </div>

            {/* shop Name */}
            <div className="mb-4">
              <label
                htmlFor="contact-number"
                className="text-sm font-medium leading-6 text-gray-900"
              >
                Shop Name:
              </label>

              <div className="mt-1 p-2 border rounded-md bg-gray-100">
                Your-Shop-Name
              </div>
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
    </div>
  );
};

export default Users;
