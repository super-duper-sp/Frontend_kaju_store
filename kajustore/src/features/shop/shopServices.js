import axios  from 'axios'
import Cookies from 'js-cookie';

const API_URL = '/api/shop'

// get 
const shopProfile = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Response:', response.data); // Log the response data
        
        return response.data;
    } catch (error) {
        console.error('Error fetching daily transactions:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

// get daily transactions
const postshopProfile = async(shopData)=>{
    const response =await axios.post(API_URL , shopData)
    

    return response.data
}


const shopdetailsServices = {
    shopProfile,
    postshopProfile
  }

export default shopdetailsServices