import {apiUrlBase} from '../../config/config.js'

export const loginUser = async (loginUserRequest) =>
{  
    const enpoint = `${apiUrlBase}/Personal/login`;
    
    const requestOptions = {method: `POST`,headers: {"Content-Type": "application/json"}}
    const requestBody = {body: JSON.stringify(loginUserRequest)}

    const message = {...requestOptions, ...requestBody}

    const response = await fetch(enpoint,message);
    const data = await response.json();

    return{
        response,
        data
    }
}