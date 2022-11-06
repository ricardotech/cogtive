import React from "react";
import styles from "../styles/Home.module.css";

import { Flex, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Image from "next/image";
import EquipmentModule from "../components/EquipmentModule";

export default function LayoutImage2({
  bg = "linear-gradient(to bottom, #292929, #3F3F3F)",
}) {
  const { mobile, tablet, desktop } = useMediaQuery();
  return (
    <Flex flexDir="column" bg={bg} w="100%">
      {mobile && (
        <Flex
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
            EQUIPMENT DASHBOARD
          </Text>

          <Flex flexDir="column">
            <Heading fontFamily="Work Sans" mt="8" fontSize="2rem" color="#FFF">
              Real time equipment indicators
            </Heading>
            <Text fontFamily="Work Sans" mt="4" fontSize="1rem" color="#FFF">
              Esse texto está uma grande merda, por isso, pensar em algo novo
              voltado para a dashboard de equipamento, suas funcionalidades e
              como ela é incrível para as lideranças. But There's COGTIVE!
            </Text>
            <Flex w="100%" justify="space-between" align="center">
              <Flex w="100%" justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    width: 1258.87 / 1.4,
                    marginTop: 40,
                    marginBottom: 20,
                  }}
                >
                  <Image height={708.11} width={1258.87} src="/dashboard.png" />
                </Flex>
              </Flex>
            </Flex>
            <Text
              mt="6"
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1rem"
              color="#D9D9D9"
            >
              Main equipment indicators
            </Text>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1rem"
              color="#D9D9D9"
            >
              Pace management [Real time production delivery status]
            </Text>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1rem"
              color="#D9D9D9"
              mb="10"
            >
              Custom dashboard
            </Text>
          </Flex>
        </Flex>
      )}
      {tablet && (
        <Flex
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
            EQUIPMENT DASHBOARD
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2.4rem"
              color="#FFF"
            >
              Real time equipment indicators
            </Heading>
            <Text
              fontFamily="Work Sans"
              w={560}
              mt="4"
              fontSize="1.2rem"
              color="#FFF"
            >
              Esse texto está uma grande merda, por isso, pensar em algo novo
              voltado para a dashboard de equipamento, suas funcionalidades e
              como ela é incrível para as lideranças. But There's COGTIVE!
            </Text>
            <Flex w="100%" justify="space-between" align="center">
              <Flex w="100%" justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    width: 1258.87 / 1.4,
                    height: 708.11 / 1.4,
                    marginTop: 10,
                  }}
                >
                  <Image height={708.11} width={1258.87} src="/dashboard.png" />
                </Flex>
              </Flex>
            </Flex>
            <Text
              mt="6"
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1.2rem"
              color="#D9D9D9"
            >
              Main equipment indicators
            </Text>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1.2rem"
              color="#D9D9D9"
            >
              Pace management [Real time production delivery status]
            </Text>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1.2rem"
              color="#D9D9D9"
              mb="10"
            >
              Custom dashboard
            </Text>
          </Flex>
        </Flex>
      )}
      {desktop && (
        <Flex
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
            EQUIPMENT DASHBOARD
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2.4rem"
              color="#FFF"
            >
              Real time equipment indicators
            </Heading>
            <Text
              fontFamily="Work Sans"
              w={560}
              mt="4"
              fontSize="1.2rem"
              color="#FFF"
            >
              Esse texto está uma grande merda, por isso, pensar em algo novo
              voltado para a dashboard de equipamento, suas funcionalidades e
              como ela é incrível para as lideranças. But There's COGTIVE!
            </Text>
            <Flex w="100%" justify="space-between" align="center">
              <Flex w="100%" justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    width: 1258.87,
                    height: 708.11,
                    marginTop: 10,
                  }}
                >
                  <Image height={708.11} width={1258.87} src="/dashboard.png" />
                </Flex>
              </Flex>
            </Flex>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1.2rem"
              color="#D9D9D9"
            >
              Main equipment indicators
            </Text>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1.2rem"
              color="#D9D9D9"
            >
              Pace management [Real time production delivery status]
            </Text>
            <Text
              cursor="pointer"
              textDecorationLine="underline"
              fontFamily="Work Sans"
              fontSize="1.2rem"
              color="#D9D9D9"
              mb="10"
            >
              Custom dashboard
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
