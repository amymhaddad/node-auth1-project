import axios from 'axios';

function postApiRegister(newUser) {
    let url = "http://localhost:3000/api/register"
    return axios({
        method: "post",
        url: url,
        data: newUser,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default postApiRegister;