import React from "react";
import styles from "../styles/Home.module.css";

import { Flex, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Image from "next/image";
import EquipmentModule from "../components/EquipmentModule";

export default function LayoutImage5({
  bg = "linear-gradient(to bottom right, #3d69f4, #0d2675)",
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
            TÆLOR®
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="12"
              textAlign="left"
              w="100%"
              fontSize="2rem"
              color="#FFF"
              mb="2"
            >
              Get proactive insights with our A.I.
            </Heading>
            <Text
              fontFamily="Work Sans"
              w="100%"
              textAlign="left"
              mt="4"
              mb="8"
              fontSize="1rem"
              color="#FFF"
              mx="auto"
              maxW={700}
            >
              TÆLOR® develop opportunities and find the right person, with the
              right role to solve problems before they become relevant.
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
            TÆLOR®
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="12"
              textAlign="center"
              w="100%"
              fontSize="2.4rem"
              color="#FFF"
              mb="2"
            >
              Get proactive insights with our A.I.
            </Heading>
            <Text
              fontFamily="Work Sans"
              w="100%"
              textAlign="center"
              mt="4"
              mb="8"
              fontSize="1.2rem"
              color="#FFF"
              mx="auto"
              maxW={700}
            >
              TÆLOR® develop opportunities and find the right person, with the
              right role to solve problems before they become relevant.
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
