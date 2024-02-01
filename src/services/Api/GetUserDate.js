import { apiUrlBase } from "../../config/config";
import {getToken} from '../UserServices.js'

export const GetUserData = async (id) => 
{   
    const userJwtToken = getToken();
    const enpoint = `${apiUrlBase}/Personal/${id}`;

    const requestOptions = {method: `GET`,headers: {"Authorization": `Bearer ${userJwtToken}`}}

    const response = await fetch(enpoint,requestOptions);
    const data = await response.json();

    return{
        response,
        data
    }

}