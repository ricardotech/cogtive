import React from "react";
import styles from "../styles/Home.module.css";

import { Flex, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Image from "next/image";
import EquipmentModule from "../components/EquipmentModule";

export default function LayoutImage3({
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
            OEE
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="1.8rem"
              color="#FFF"
              mb="2"
            >
              Improve your processes effectiveness
            </Heading>
            <Flex w="100%">
              <Text fontFamily="Work Sans" mt="4" fontSize="1rem" color="#FFF">
                Have live feadbacks of the overall equipment efficiency and keep
                with your asset efficacy daily or monthly to improve their
                performance and achieve your real industrial potencial.
              </Text>
            </Flex>
            <Flex w="100%" align="center" mt="10">
              <Flex w="45%">
                <Image height={434.58} width={747.18} src="/oee-1.png" />
              </Flex>
              <Flex ml="2%" w="45%">
                <Image height={434.58} width={747.18} src="/oee-2.png" />
              </Flex>
            </Flex>
            <Flex mt="2.5em" flexDir="column">
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1rem"
                color="#D9D9D9"
              >
                Setup & Maintenance
              </Text>
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1rem"
                color="#D9D9D9"
              >
                Effectiveness detailed view
              </Text>
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1rem"
                color="#D9D9D9"
              >
                Pareto
              </Text>
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1rem"
                color="#D9D9D9"
                mb="10"
              >
                Event history
              </Text>
            </Flex>
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
            OEE
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2.4rem"
              color="#FFF"
              mb="2"
            >
              Improve your processes effectiveness
            </Heading>
            <Flex w="100%">
              <Text
                fontFamily="Work Sans"
                w="60%"
                mt="4"
                fontSize="1.2rem"
                color="#FFF"
              >
                Have live feadbacks of the overall equipment efficiency and keep
                with your asset efficacy daily or monthly to improve their
                performance and achieve your real industrial potencial.
              </Text>
            </Flex>
            <Flex w="100%" align="center" mt="10">
              <Flex w="45%">
                <Image height={434.58} width={747.18} src="/oee-1.png" />
              </Flex>
              <Flex ml="5%" w="45%">
                <Image height={434.58} width={747.18} src="/oee-2.png" />
              </Flex>
            </Flex>
            <Flex mt="2.5em" flexDir="column">
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1.2rem"
                color="#D9D9D9"
              >
                Setup & Maintenance
              </Text>
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1.2rem"
                color="#D9D9D9"
              >
                Effectiveness detailed view
              </Text>
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1.2rem"
                color="#D9D9D9"
              >
                Pareto
              </Text>
              <Text
                mt="2"
                cursor="pointer"
                textDecorationLine="underline"
                fontFamily="Work Sans"
                fontSize="1.2rem"
                color="#D9D9D9"
                mb="10"
              >
                Event history
              </Text>
            </Flex>
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
            OEE
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2.4rem"
              color="#FFF"
              mb="2"
            >
              Improve your processes effectiveness
            </Heading>
            <Flex w="100%">
              <Text
                fontFamily="Work Sans"
                w="45%"
                mt="4"
                fontSize="1.2rem"
                color="#FFF"
              >
                Have live feadbacks of the overall equipment efficiency and keep
                with your asset efficacy daily or monthly to improve their
                performance and achieve your real industrial potencial.
              </Text>
              <Flex ml="5em" flexDir="column">
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Setup & Maintenance
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Effectiveness detailed view
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Pareto
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                  mb="10"
                >
                  Event history
                </Text>
              </Flex>
            </Flex>
            <Flex w="100%" align="center" mt="10" mb="10">
              <Flex w="45%">
                <Image height={434.58} width={747.18} src="/oee-1.png" />
              </Flex>
              <Flex ml="5%" w="45%">
                <Image height={434.58} width={747.18} src="/oee-2.png" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
