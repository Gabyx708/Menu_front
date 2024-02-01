import { useEffect } from "react";
import CostUser from "../components/CostUser/CostUser";
import LastOrder from "../components/LastOrder/LastOrder";
import "../css/HomePage.css";
import { GetUserData } from "../services/Api/GetUserDate";
import { getUserData, saveUserData } from "../services/UserServices";
import Header from "../components/Header/Header"

const obtainUserData = async () => {
  let idUser = getUserData().id;

  const response = await GetUserData(idUser);
  saveUserData(response.data);
};

export default function HomePage() {
  useEffect(() => {
    obtainUserData();
  });

  return (
    <>
    <Header/>
    <div id="main_container">
      <section className="badgeds_container">
        <CostUser />
        <LastOrder />
      </section>
      </div>
    </>
  );
}
