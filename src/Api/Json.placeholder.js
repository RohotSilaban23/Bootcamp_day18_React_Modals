import axios from "axios";

//API dari Jsonplaceholder
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});