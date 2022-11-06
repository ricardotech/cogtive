import React from "react";
import styles from "../styles/Home.module.css";

import { Flex, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Image from "next/image";
import EquipmentModule from "../components/EquipmentModule";

export default function LayoutImage({
  bg = "linear-gradient(to bottom right, #3d69f4, #0d2675)",
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
            DATA COLLECTION
          </Text>

          <Flex flexDir="column">
            <Heading fontFamily="Work Sans" mt="8" fontSize="2rem" color="#FFF">
              Get all your industrial operations at a glance
            </Heading>
            <Text fontFamily="Work Sans" mt="4" fontSize="1rem" color="#FFF">
              Ensure decisive access for processes and operations, tracking the
              entire factory asset lifecycle in real time with production orders
              lead time, holding time, equipment status, blottleneck position
              and production order management.
            </Text>
            <Flex w="100%" justify="space-between" align="center">
              {/* <Flex w="100%" justify="center" align="center" h="15vh" mt={-250}>
                <Flex flexDir="column" position="absolute" left={16}>
                  <div
                    className={styles.factory__equipment_modules}
                    style={{
                      paddingTop: 50,
                    }}
                  >
                    <div className={styles.equipment__container_one}>
                      <EquipmentModule />
                    </div>
                    <a className={styles.factory__cta}>conheça o sistema</a>
                  </div>
                </Flex>
              </Flex> */}
              <Flex w="100%" justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    width: 994.01 / 1.4,
                    marginTop: 10,
                  }}
                >
                  <Image height={662.58} width={994.01} src="/macbook.png" />
                </Flex>
              </Flex>
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
            DATA COLLECTION
          </Text>

          <Flex flexDir="column">
            <Heading fontFamily="Work Sans" mt="8" fontSize="2rem" color="#FFF">
              Get all your industrial operations at a glance
            </Heading>
            <Text
              fontFamily="Work Sans"
              w={560}
              mt="4"
              fontSize="1.2rem"
              color="#FFF"
            >
              Ensure decisive access for processes and operations, tracking the
              entire factory asset lifecycle in real time with production orders
              lead time, holding time, equipment status, blottleneck position
              and production order management.
            </Text>
            <Flex w="100%" justify="space-between" align="center">
              <Flex w="100%" justify="center" align="center" mt={-250}>
                <Flex flexDir="column" position="absolute" left={16}>
                  <div
                    className={styles.factory__equipment_modules}
                    style={{
                      paddingTop: 50,
                    }}
                  >
                    <div className={styles.equipment__container_one}>
                      <EquipmentModule />
                    </div>
                    <a className={styles.factory__cta}>conheça o sistema</a>
                  </div>
                </Flex>
              </Flex>
              <Flex w="100%" justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    width: 994.01 / 1.4,
                    height: 662.58 / 1.4,
                    marginTop: 10,
                  }}
                >
                  <Image height={662.58} width={994.01} src="/macbook.png" />
                </Flex>
              </Flex>
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
            DATA COLLECTION
          </Text>

          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              mt="8"
              fontSize="2.6rem"
              color="#FFF"
            >
              Get all your industrial operations at a glance
            </Heading>
            <Text
              fontFamily="Work Sans"
              w={560}
              mt="4"
              fontSize="1.2rem"
              color="#FFF"
            >
              Ensure decisive access for processes and operations, tracking the
              entire factory asset lifecycle in real time with production orders
              lead time, holding time, equipment status, blottleneck position
              and production order management.
            </Text>
            <Flex w="100%" justify="space-between" align="center">
              <Flex flexDir="column" mt="8">
                <Flex visibility="hidden" h="21em"></Flex>
                <Flex
                  style={{
                    position: "absolute",
                    width: "100%",
                  }}
                >
                  <div
                    className={styles.factory__equipment_modules}
                    style={{
                      paddingTop: 50,
                    }}
                  >
                    <div className={styles.equipment__container_one}>
                      <EquipmentModule />
                    </div>
                    <a className={styles.factory__cta}>conheça o sistema</a>
                  </div>
                </Flex>
              </Flex>
              <Flex
                style={{
                  width: 994.01 / 1.1,
                  height: 662.58 / 1.1,
                  marginTop: -200,
                }}
              />
              <Flex
                right={-150}
                position="absolute"
                style={{
                  width: 994.01 / 1.1,
                  height: 662.58 / 1.1,
                  marginTop: 10,
                }}
              >
                <Image height={662.58} width={994.01} src="/macbook.png" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
