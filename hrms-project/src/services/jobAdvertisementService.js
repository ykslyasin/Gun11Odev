import axios from "axios"

export default class JobAdvertisementService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
}