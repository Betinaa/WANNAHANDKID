import axios from 'axios'

export const baseUrl =  axios.create({
    baseUrl: "http://localhost:3008",
});

