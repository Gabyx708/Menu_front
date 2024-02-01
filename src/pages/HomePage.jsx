import {useEffect} from 'react'
import CostUser from '../components/CostUser/CostUser'
import '../css/HomePage.css'
import { GetUserData } from '../services/Api/GetUserDate'
import { getUserData, saveUserData } from '../services/UserServices'

const obtainUserData = async () => {
    let idUser = getUserData().id

    const response = await GetUserData(idUser)
    saveUserData(response.data)
}

export default function HomePage() {

  useEffect(()=> {obtainUserData()})

  return (
    <div>HomePage
      <CostUser/>
    </div>
  )
}
