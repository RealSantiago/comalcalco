import React from "react";
import {
  Card,
  CardActionArea,
  Grid,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import comal from "../assets/images/comalcalco3.jpg";
import { PRIMARY, SECONDARY } from "../utils/constants";

export default function Cards() {
  return (
    //Contenedor principal de tarjetas
    <Card
      border={1}
      style={{
        height: 400,
        width: 300,
        backgroundColor: PRIMARY,
        color: SECONDARY,
        borderRadius: 15,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={300}
          image={comal}
          alt="green iguana"
        />
        <CardContent>
          <Typography fontSize={25}>Zona Arqueologica</Typography>
          <Typography fontSize={18}>Esta es una zona arqueoliga del</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
