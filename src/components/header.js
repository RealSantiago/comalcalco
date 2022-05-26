import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "../utils/style";
import { PRIMARY, SECONDARY } from "../utils/constants";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";

export default function Header() {
  const classes = useStyles();
  return (
    //Contenedor principal
    <Grid
      container
      border={1}
      textAlign={"center"}
      paddingLeft={5}
      paddingRight={5}
      paddingTop={2}
      paddingBottom={2}
      style={{
        backgroundColor: PRIMARY,
        lineHeight: 0,
      }}
    >
      {/**Contenedor imagen */}
      <Grid item border={1} xs={6} sm={9} textAlign={"left"}>
        <img
          className={classes.logo}
          src={require("../assets/images/b.png")}
          alt="logo"
        ></img>
      </Grid>
      {/**Contenedor General de redes sociales */}
      <Grid container border={1} xs={6} sm={3} alignContent={"center"}>
        {/**Contenedor individual de cada red social */}
        <Grid item border={1} xs={3} sm={3}>
          <FacebookOutlinedIcon
            fontSize={"medium"}
            style={{
              borderRadius: 20,
              backgroundColor: SECONDARY,
              color: PRIMARY,
              maxHeight: 100,
            }}
          />
        </Grid>
        <Grid item border={1} xs={3} sm={3}>
          <InstagramIcon
            fontSize={"medium"}
            style={{
              borderRadius: 20,
              backgroundColor: SECONDARY,
              color: PRIMARY,
              maxHeight: 100,
            }}
          />
        </Grid>
        <Grid item border={1} xs={3} sm={3}>
          <YouTubeIcon
            fontSize={"medium"}
            style={{
              borderRadius: 20,
              backgroundColor: SECONDARY,
              color: PRIMARY,
            }}
          />
        </Grid>
        <Grid item border={1} xs={3} sm={3}>
          <WhatsappRoundedIcon
            fontSize={"medium"}
            style={{
              borderRadius: 20,
              backgroundColor: SECONDARY,
              color: PRIMARY,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
