import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { Carousel } from "react-responsive-carousel";

import useMediaQuery from "../utils/mediaQuery";

export default function Slider({ language = "en" }: { language: string }) {
  const { mobile, tablet, desktop } = useMediaQuery();

  function Item({ title, author }: { title: string; author: string }) {
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 1rem",
        }}
      >
        <p
          style={{
            marginTop: 50,
            color: "#FFF",
            fontSize: mobile ? "1.25rem" : "1.8rem",
            width: mobile ? "70%" : tablet ? "80%" : "65%",
            fontWeight: "bold",
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: "#FFF",
            fontSize: mobile ? "0.8rem" : "1.3rem",
            marginTop: 30,
            width: mobile ? "70%" : tablet ? "80%" : "65%",
            marginBottom: 50,
          }}
        >
          {author}
        </p>
      </div>
    );
  }

  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      bg="linear-gradient(to bottom right, #3d69f4, #0d2675)"
      pb="8"
    >
      <Carousel
        showThumbs={false}
        autoPlay
        showStatus={false}
        infiniteLoop
        showArrows={false}
        interval={2000}
      >
        <Item
          title={
            language === "en"
              ? "With COGTIVE we were able to improve our productivity from 52% to 64%!"
              : "Com a cogtive tivemos um aumento produtivo de 52% para 64%!"
          }
          author={
            language === "en"
              ? "MILTON LIMA, PRODUCTION MANAGER AT COMPANY"
              : "MILTON LIMA, GESTOR DE PRODUTO NA EMPRESA"
          }
        />
        <Item
          title={
            language === "en"
              ? "The people behind it are amazing. The support is incredible."
              : "As pessoas por trás do projeto são incríveis e o suporte tambem"
          }
          author={
            language === "en"
              ? "FREDERICK SOAF, CTO PHARMA.IO"
              : "FREDERICK SOAF, CTO PHARMA.IO"
          }
        />
      </Carousel>
    </Flex>
  );
}
