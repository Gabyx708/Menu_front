import "../../css/styles.css";

import { useEffect, useState } from "react";
import { GetCostUser } from "../../services/Api/GetCostUser";
import { getUserData } from "../../services/UserServices";
import { NumericFormat } from "react-number-format";
import formatDate from "../../lib/formatDate";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GetOrders } from "../../services/Api/GetOrders";
import { GetSpecificOrder } from "../../services/Api/GetSpecificOrder";

const obtainLastOrder = async () => {
  const idUser = getUserData().id;
  const response = await GetOrders(idUser, null, null, 1);
  const idOrder = response.data[0].id;

  const lastOrder = await GetSpecificOrder(idOrder);
  return lastOrder.data;
};

export default function LastOrder() {

  const [lastOrderItem, setLastOrderItem] = useState("");
  const [lastOrderDate, setLastOrderDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const order = await obtainLastOrder();
      setLastOrderItem(order.platillos[0].descripcion);

      let date = formatDate(new Date(order.fecha));

      setLastOrderDate(date);
    };

    fetchData();
  }, []);

  return (
    <>
      <Card className="shadowGeneric" sx={{height: "auto" }}>
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            <p>ultimo pedido realizado el: {lastOrderDate}</p>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <p>{lastOrderItem}</p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
