import axios from 'axios';

export async function getUsers(userId) {
    const url = "http://localhost:3000/api/users"
    const response = await axios({
        method: "get",
        url: url,
        data: userId,
        withCredentials: true,
       })
    if (response.status === 200) {
        return response.data 
        
    }
    throw response;
}