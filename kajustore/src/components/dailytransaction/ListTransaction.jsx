import { useState } from 'react';
import React from 'react';
import { motion } from "framer-motion"


const ListTransaction = () => {

  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
    // Initialize the editedTransaction state with the data of the selected transaction
    setEditedTransaction(transactions[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    // Update the original transactions array with the edited transaction
    const updatedTransactions = [...transactions];
    updatedTransactions[editIndex] = editedTransaction;
    // Update state and close the modal
    setEditIndex(null);
    setShowEditModal(false);
    // You can perform additional actions here, such as sending the updated data to a server
  };

  const handleCloseModal = () => {
    setEditIndex(null);
    setShowEditModal(false);
  };


    const transactions = [
        {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        },
        {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        }, {
          Date: '2024-01-23',
          BuyAmount: 1000,
          BuyNotes: 'Investment in stocks',
          SellAmount: 500,
          SellNotes: 'Profit from previous investment',
          User: 'John Doe',
        },
        {
          Date: '2024-01-24',
          BuyAmount: 800,
          BuyNotes: 'Purchase of bonds',
          SellAmount: 0,
          SellNotes: '',
          User: 'Jane Smith',
        },
        {
          Date: '2024-01-25',
          BuyAmount: 1200,
          BuyNotes: 'Real estate investment',
          SellAmount: 300,
          SellNotes: 'Partial sale for liquidity',
          User: 'Alice Johnson',
        },
        {
          Date: '2024-01-26',
          BuyAmount: 500,
          BuyNotes: 'Cryptocurrency trading',
          SellAmount: 200,
          SellNotes: 'Profit-taking',
          User: 'Bob Williams',
        },
        // Add more sample data as needed
      ];
  return (
    <div>
    <table className=" bg-white text-[#4D4D4D] rounded-md">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">Date</th>
        <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">BuyAmount</th>
        <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">BuyNotes</th>
        <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">SellAmount</th>
        <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">SellNotes</th>
        <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">User</th>
      </tr>
    </thead>
    <tbody>
    {transactions.map((transaction, index) => (
    <tr key={index} className="bg-white">
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.Date}</td>
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.BuyAmount}</td>
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.BuyNotes}</td>
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.SellAmount}</td>
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.SellNotes}</td>
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.User}</td>
      <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">
        <button
          onClick={() => handleEdit(index)} // Call a function to handle the edit action
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
      </td>
    </tr>
  ))}
    </tbody>
  </table>

  {showEditModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>
            <form>
            

              {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="text-sm font-medium leading-6 text-gray-900">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={editedTransaction.Date}
            onChange={handleInputChange}
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
            value={editedTransaction.BuyAmount}
            onChange={handleInputChange}
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
            value={ editedTransaction.BuyNotes}
            onChange={handleInputChange}
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
            value={editedTransaction.SellAmount}
            onChange={handleInputChange}
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
            value={editedTransaction.SellNotes}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter sell notes"
          />
        </div>




              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
</div>
  );
};

export default ListTransaction;
