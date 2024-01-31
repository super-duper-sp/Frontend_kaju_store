import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDailyEntries } from "../../features/dailyentry/dailyentrySlice";
import { reset } from "../../features/dailyentry/dailyentrySlice";

const EntryDailyTransaction = () => {


  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    date: '',
    buyAmount: '',
    buyNotes: '',
    sellAmount: '',
    sellNotes: '',
    user: '', // Assuming this will be fetched from the backend based on the logged-in user
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { user } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // const trasactionData = {
    //     date,
    //     buyAmount,
    //     buyNotes,
    //     sellAmount,
    //     sellNotes }

    dispatch(postDailyEntries(formData));
    dispatch(reset())
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
      <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-4">Daily Transaction</h3>
      <form onSubmit={handleSubmit}>
        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="text-sm font-medium leading-6 text-gray-900">Date</label>
          <input
            type="date"
            id="date"
            name="date"
          
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Buy Amount */}
        <div className="mb-4">
          <label htmlFor="buyAmount" className="text-sm font-medium leading-6 text-gray-900">Buy Amount</label>
          <input
            type="number"
            id="buyAmount"
            name="buyAmount"
          
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter buy amount"
          />
        </div>

        {/* Buy Notes */}
        <div className="mb-4">
          <label htmlFor="buyNotes" className="text-sm font-medium leading-6 text-gray-900">Buy Notes</label>
          <input
            type="text"
            id="buyNotes"
            name="buyNotes"
            value={formData.buyNotes}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter buy notes"
          />
        </div>

        {/* Sell Amount */}
        <div className="mb-4">
          <label htmlFor="sellAmount" className="text-sm font-medium leading-6 text-gray-900">Sell Amount</label>
          <input
            type="number"
            id="sellAmount"
            name="sellAmount"
          
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter sell amount"
          />
        </div>

        {/* Sell Notes */}
        <div className="mb-4">
          <label htmlFor="sellNotes" className="text-sm font-medium leading-6 text-gray-900">Sell Notes</label>
          <input
            type="text"
            id="sellNotes"
            name="sellNotes"
           
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter sell notes"
          />
        </div>

     

        {/* User (assuming it's fetched from the backend based on the logged-in user) */}
        <div className="mb-4">
          <label htmlFor="user" className="text-sm font-medium leading-6 text-gray-900">User</label>
          {/* You may not need to edit the user, as it could be the logged-in user */}
          <input
            type="text"
            id="user"
            name="user"
            value={user}
            // onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            readOnly // Make the user field read-only
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EntryDailyTransaction;
