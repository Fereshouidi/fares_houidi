import axios from 'axios';

const url = "http://localhost:3002";

export const getAllProjects = async() => {
    try{
        const response = await axios.get(url + "/get/allProjects")
        const data = response.data;
        console.log(data);
        return data
    }catch(err){
        throw err
    }
}