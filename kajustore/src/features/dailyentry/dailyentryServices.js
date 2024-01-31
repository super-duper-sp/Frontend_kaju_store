import axios  from 'axios'
import Cookies from 'js-cookie';

const API_URL = '/api/DailyTransactions'

// get daily transactions
const getDailyTransactions = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Response:', response.data); // Log the response data
       
        return response.data;
    } catch (error) {
        console.error('Error fetching daily transactions:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}


// post daily transactions
const postDailyTransactions = async (transactionData) => {
    try {
        const response = await axios.post(API_URL,transactionData);
        console.log('Response:', response.data); // Log the response data
       
        return response.data;
    } catch (error) {
        console.error('Error fetching daily transactions:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}


const dailyentryServices = {
    getDailyTransactions,
    postDailyTransactions
  }

export default dailyentryServices