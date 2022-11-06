import React from "react";
import styles from "../styles/Home.module.css";

import { Flex, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Image from "next/image";
import EquipmentModule from "../components/EquipmentModule";

export default function LayoutImage4({
  bg = "linear-gradient(to bottom, #292929, #3F3F3F)",
}) {
  const { mobile, tablet, desktop } = useMediaQuery();
  return (
    <Flex flexDir="column" bg={bg} w="100%">
      {mobile && (
        <Flex
          mb="10"
          py="6"
          px="1rem"
          flexDir="column"
          justify="space-between"
          w="100%"
        >
          <Text
            fontFamily="Work Sans"
            w={460}
            mt="4"
            fontSize="1.2rem"
            color="#FFF"
            fontWeight="bold"
          >
            TIMELINE
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2rem"
              color="#FFF"
              mb="2"
            >
              Manage the production cycle of all assets
            </Heading>
            <Flex w="100%">
              <Text fontFamily="Work Sans" mt="4" fontSize="1rem" color="#FFF">
                Track, manage, compare and improve your production cycle with
                the time line of your equipment's indicators.
              </Text>
            </Flex>
            <Flex flexDir="column" w="100%" align="center" mt="10">
              <Flex
                style={{
                  width: "100%",
                }}
              >
                <Image height={465.91} width={1634.55} src="/manage.png" />
              </Flex>
            </Flex>
            <Text
              mt="2rem"
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="0.8rem"
              color="#D9D9D9"
            >
              Monitoramento de equipamento em tempo real
            </Text>
          </Flex>
        </Flex>
      )}
      {!mobile && (
        <Flex
          mb="10"
          py="6"
          px="4rem"
          flexDir="column"
          justify="space-between"
          w="100%"
        >
          <Text
            fontFamily="Work Sans"
            w={460}
            mt="4"
            fontSize="1.2rem"
            color="#FFF"
            fontWeight="bold"
          >
            TIMELINE
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2.4rem"
              color="#FFF"
              mb="2"
            >
              Manage the production cycle of all assets
            </Heading>
            <Flex w="100%">
              <Text
                fontFamily="Work Sans"
                w="50%"
                mt="4"
                fontSize="1.2rem"
                color="#FFF"
              >
                Track, manage, compare and improve your production cycle with
                the time line of your equipment's indicators.
              </Text>
            </Flex>
            <Flex flexDir="column" w="100%" align="center" mt="10">
              <Flex
                style={{
                  width: "100%",
                }}
              >
                <Image height={465.91} width={1634.55} src="/manage.png" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
