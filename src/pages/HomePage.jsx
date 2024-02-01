import { useEffect } from "react";
import CostUser from "../components/CostUser/CostUser";
import LastOrder from "../components/LastOrder/LastOrder";
import "../css/HomePage.css";
import { GetUserData } from "../services/Api/GetUserDate";
import { getUserData, saveUserData } from "../services/UserServices";
import Header from "../components/Header/Header"
import MainButton from "../components/MainButton/MainButton";

import RestoreIcon from '@mui/icons-material/Restore';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
      <Header />
      <div id="main_container">
        <section className="badgeds_container">
          <CostUser />
          <LastOrder />
        </section>

        <section>
          <MainButton text="PEDIR" Icon={() => <MenuBookIcon fontSize="large" />} />
          <MainButton text="PLANIFICAR" Icon={() => <CalendarMonthIcon fontSize="large" />} />
          <MainButton text="HISTORIAL" Icon={() => <RestoreIcon fontSize="large" />} />
          <MainButton text="AUTOMATIZAR" Icon={() => <PrecisionManufacturingIcon fontSize="large" />} />
        </section>
        
      </div>
    </>
  );
}
