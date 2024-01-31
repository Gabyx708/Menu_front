export const saveUserData = (user) => {

    let userData = JSON.stringify(user)
    sessionStorage.setItem('user',userData)
}

export const getUserData = () => {

    let user = sessionStorage.getItem('user')
    return JSON.parse(user)
}

export const saveToken = (token) => {

    sessionStorage.setItem('token',token)
}

export const getToken = () => {
    
    let token = sessionStorage.getItem('token')
    return token
}