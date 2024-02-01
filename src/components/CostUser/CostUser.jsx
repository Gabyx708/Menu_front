import { useEffect, useState } from "react";
import { GetCostUser } from "../../services/Api/GetCostUser";
import { getUserData } from "../../services/UserServices";
import { NumericFormat } from 'react-number-format';
import formatDate from "../../lib/formatDate";

const obtainMonthCost = async () => {
  const date = new Date();
  const startMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const endMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const idUser = getUserData().id;

  const formatStartMonthDate = formatDate(startMonthDate);
  const formatEndMonthDate = formatDate(endMonthDate);
  const costData = await GetCostUser(
    idUser,
    formatStartMonthDate,
    formatEndMonthDate
  );

  return costData.data;
};

export default function CostUser() {

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await obtainMonthCost();
      setTotalCost(result.costoTotal);
    };

    fetchData();
  }, []);

  return (
    <>
      <h4>MONTO</h4>
      <NumericFormat value={totalCost.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
    </>
  );
}
