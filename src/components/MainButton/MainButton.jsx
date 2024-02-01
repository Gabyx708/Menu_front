import { Typography } from "@mui/material";

export default function MainButton({Icon,text='default',path}){

    return <div>
        <Icon/>
        <Typography>
            <p>{text}</p>
        </Typography>
    </div>
}