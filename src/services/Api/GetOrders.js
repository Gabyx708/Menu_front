import { apiUrlBase } from "../../config/config";
import {getToken} from '../UserServices.js'

export const GetOrders = async (idUser,initDate,endDate,amount) => 
{
    const userJwtToken = getToken();
    let enpoint = `${apiUrlBase}/Pedidos?idPersonal=${idUser}&Desde=${initDate}&Hasta=${endDate}&cantidad=${amount}`;

    if(!initDate && !endDate){

        enpoint = `${apiUrlBase}/Pedidos?idPersonal=${idUser}&cantidad=${amount}`;
    }

    const requestOptions = {method: `GET`,headers: {"Authorization": `Bearer ${userJwtToken}`}}

    const response = await fetch(enpoint,requestOptions);
    const data = await response.json();

    return{
        response,
        data
    }

}