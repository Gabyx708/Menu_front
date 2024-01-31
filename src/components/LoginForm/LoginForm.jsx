import "./LoginForm.css";

import { useState } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Alert from '@mui/material/Alert';

import { loginUser } from "../../services/Api/LoginUser.js";
import { saveToken } from "../../services/UserServices.js";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function LoginForm() {
  const navigate = useNavigate();
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");
  const [alert,SetAlert] = useState('')

  const alertComponent = <Alert variant="filled" severity="error" sx={{marginTop: 1}}>
                          usuario y/o contraseña incorrecta</Alert>
  
  function handleUserChange(e) {
    SetUser(e.target.value);
  }

  function handlePasswordChange(e) {
    SetPassword(e.target.value);
  }

  async function handleLoginButton() {
    const result = await loginUser({ username: user, password: password });
    const responseStatus = result.response.status;

    if (responseStatus == 200){

      saveToken(result.data.token);
      navigate("/home");  
    } else {
      SetAlert(alertComponent);
    }
  }

 
  const cardContent = (
    <CardContent>
      <RestaurantMenuIcon color="primary" sx={{ fontSize: 80 }} />
      <form>
        <TextField
          label="usuario"
          variant="outlined"
          type="text"
          sx={{ marginBottom: 2 }}
          onChange={handleUserChange}
        />
        <br></br>
        <TextField
          label="password"
          variant="outlined"
          type="password"
          onChange={handlePasswordChange}
        />
        <br></br>
        <Button
          size="large"
          variant="contained"
          sx={{ marginTop: 3, width: 230 }}
          onClick={handleLoginButton}
        >
          INGRESAR
        </Button>
      </form>
      {alert}
    </CardContent>
  );

  return (
    <div className="containerForm">
      <Box>
        <Card variant="outlined" id="loginForm">
          {cardContent}
        </Card>
      </Box>
    </div>
  );
}
