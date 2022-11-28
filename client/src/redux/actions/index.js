import axios from 'axios' ; 
import { ADDNEW_TODO } from './type' ;

const API_URL = 'http://localhost:8000'
// First API.

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos` , {data} ) 
// res actually is an object and data is contained in data field.  
        dispatch({type: ADDNEW_TODO  , payload: res.data}) ; 
    }catch(error) {
        console.log('Error While Calling addNewTodo API');
    }
}