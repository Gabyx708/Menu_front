import { apiUrlBase } from "../../config/config";
import {getToken} from '../UserServices.js'

export const GetSpecificOrder = async (idOrder) => 
{
    const userJwtToken = getToken();
    const enpoint = `${apiUrlBase}/Pedido/${idOrder}`;

    const requestOptions = {method: `GET`,headers: {"Authorization": `Bearer ${userJwtToken}`}}

    const response = await fetch(enpoint,requestOptions);
    const data = await response.json();

    return{
        response,
        data
    }

}