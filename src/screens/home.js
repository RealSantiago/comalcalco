import React from "react";
import Header from "../components/header";
import Tarjeta from "../components/cards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Typography } from "@mui/material";

export default function Home() {
  const elements = ["1", "2", "3", "4", "5"];
  return (
    <>
      <Header />
      <Splide
        options={{
          type: "loop",
          perPage: 2,
          pagination: false,
        }}
      >
        {elements.map((element) => {
          console.log(element);
          return (
            <SplideSlide index={element}>
              <Tarjeta />
            </SplideSlide>
          );
        })}
      </Splide>
      <Tarjeta />
    </>
  );
}
