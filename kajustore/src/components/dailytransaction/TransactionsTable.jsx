import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Date", "BuyAmount","SellAmount" ,"BuyNotes", "SellNotes", "User"];



const TransactionsTable = ({TABLE_ROWS})=> {


  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
    // Initialize the editedTransaction state with the data of the selected transaction
    setEditedTransaction(TABLE_ROWS[index]);
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
    const updatedTransactions = [...TABLE_ROWS];
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

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (  {date, buyAmount , sellAmount , buyNotes , sellNotes , user }
                ,
                index
              ) => {

                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={date}>
                  
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {buyAmount}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sellAmount}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sellNotes}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {buyNotes}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user}
                      </Typography>
                    </td>

                    
                    
                   
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton
                          onClick={() => handleEdit(index)}
                          variant="text"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>

      <div>
        {showEditModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>
              <form>
                {/* Date */}
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={editedTransaction.date}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>

                {/* Buy Amount */}
                <div className="mb-4">
                  <label
                    htmlFor="buyAmount"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Buy Amount
                  </label>
                  <input
                    type="number"
                    id="buyAmount"
                    name="buyAmount"
                    value={editedTransaction.buyAmount}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Enter buy amount"
                  />
                </div>

                {/* Buy Notes */}
                <div className="mb-4">
                  <label
                    htmlFor="buyNotes"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Buy Notes
                  </label>
                  <input
                    type="text"
                    id="buyNotes"
                    name="buyNotes"
                    value={editedTransaction.buyNotes}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Enter buy notes"
                  />
                </div>

                {/* Sell Amount */}
                <div className="mb-4">
                  <label
                    htmlFor="sellAmount"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Sell Amount
                  </label>
                  <input
                    type="number"
                    id="sellAmount"
                    name="sellAmount"
                    value={editedTransaction.sellAmount}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Enter sell amount"
                  />
                </div>

                {/* Sell Notes */}
                <div className="mb-4">
                  <label
                    htmlFor="sellNotes"
                    className="text-sm font-medium leading-6 text-gray-900"
                  >
                    Sell Notes
                  </label>
                  <input
                    type="text"
                    id="sellNotes"
                    name="sellNotes"
                    value={editedTransaction.sellNotes}
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
    </Card>
  );
}


export default  TransactionsTable;