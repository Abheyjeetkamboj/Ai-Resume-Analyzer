import axios from "axios";

axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

export async function registerUser({username,email,password}) {
    try{
        const response = await api.post('/api/auth/register',{username,email,password})
        return response.data
    }
    catch(err){
        conosle.log(err);
    }
}

export async function loginUser({email,password}) {
    try{
        const response = await api.post('/api/auth/login',{email,password})
        return response.data
    }
    catch(err){
        conosle.log(err);
    }
}

export async function logoutUser() {
    try{
        const response = await api.post('/api/auth/logout')
        return response.data
    }
    
    catch(err){
        conosle.log(err);
    }
}

export async function getUser() {
    try{
        const response = await api.get('/api/auth/user',)
        return response.data
    }
    catch(err){
        conosle.log(err);
    }
}

