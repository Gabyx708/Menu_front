import './LoginForm.css'
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

export default function LoginForm() {

  const cardContent = (
    <CardContent>
      <RestaurantMenuIcon color="primary" sx={{fontSize: 80}}/>
      <form>
      <TextField  label="usuario" variant="outlined" type='text' sx={{marginBottom: 2}}/>
      <br></br>
      <TextField  label="password" variant="outlined"  type='password'/>
      <br></br>
        <Button size="large" variant="contained" sx={{marginTop: 3,width: 230}}>INGRESAR</Button>
      </form>
    </CardContent>
  );

  return (
    <div className='containerForm'>
    <Box>
      <Card variant="outlined" id='loginForm'>{cardContent}</Card>
    </Box>
    </div>
  );
}
