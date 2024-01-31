import axios  from 'axios'
import Cookies from 'js-cookie';

const API_URL = '/api/user/'

// Register user
const register = async(userData)=>{
    const response =await axios.post(API_URL + 'register/', userData)
    if(response.data){
        Cookies.set('user', JSON.stringify(response.data), { expires: 7 }); // Set an expiration date if needed
    }

    return response.data
}

// Login user
const login = async(userData)=>{
    const response =await axios.post(API_URL + 'login/', userData)
    if(response.data){
        Cookies.set('user', JSON.stringify(response.data), { expires: 7 }); // Set an expiration date if needed
    }

    return response.data
}

// Logout user
const logout = () => {
    Cookies.remove('user');
  }
  
const authService = {
    register,
    logout,
    login,
  }

export default authService