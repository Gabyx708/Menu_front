import { apiUrlBase } from "../../config/config";
import {getToken} from '../UserServices.js'

export const GetCostUser = async (idUser,firtsDate,endDate) => 
{   
    const userJwtToken = getToken();
    const enpoint = `${apiUrlBase}/Costo/personal?fechaInicio=${firtsDate}&fechaFin=${endDate}&idPersonal=${idUser}`;

    const requestOptions = {method: `GET`,headers: {"Authorization": `Bearer ${userJwtToken}`}}

    const response = await fetch(enpoint,requestOptions);
    const data = await response.json();

    return{
        response,
        data
    }

}