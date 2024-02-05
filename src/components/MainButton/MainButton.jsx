import './MainButton.css'
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function MainButton({ Icon, text = "default", path }) {
 
    const content = (
    <div className="main_button">
      <Icon />
      <Typography>
        <p>{text}</p>
      </Typography>
    </div>
  );

  return <NavLink to={path}  className='card_main_button'>
    <Card>
        <CardContent>{content}</CardContent>
    </Card>
  </NavLink>;
}
