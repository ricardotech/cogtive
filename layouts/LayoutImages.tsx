import React from "react";

import { Flex, Heading, Text } from "@chakra-ui/react";

import Image from "next/image";
import useMediaQuery from "../utils/mediaQuery";

export default function LayoutImages({
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
            mt="4"
            fontSize="1.2rem"
            color="#FFF"
            fontWeight="bold"
          >
            DATA COLLECTION
          </Text>
          <Flex w="100%" flexDir="column" justify="space-between">
            <Flex w="100%" justify="space-between">
              <Flex flexDir="column">
                <Heading
                  fontFamily="Work Sans"
                  mt="8"
                  w="70%"
                  fontSize="2rem"
                  color="#FFF"
                >
                  Simple and smart Data Collection
                </Heading>
                <Text
                  fontFamily="Work Sans"
                  mt="4"
                  fontSize="1rem"
                  color="#FFF"
                >
                  Track your factory with IoT, App or Camera to collect data and
                  have a clear digital view of the manufacturing process to take
                  precise decisions based on real time informations.
                </Text>
              </Flex>
            </Flex>
            <Flex
              mt="8"
              style={{
                width: "100%",
              }}
            >
              <Image height={655.17} width={1200} src="/collect-2.png" />
            </Flex>
          </Flex>

          <Flex w="100%" flexDir="column" justify="space-between">
            <Flex
              style={{
                width: "100%",
              }}
              justify="center"
              align="center"
            >
              <Image
                height={651.17}
                width={1187.39}
                src="/ai-detect-full.png"
              />
            </Flex>

            <Flex w="100%" mt="8" justify="space-between">
              <Flex flexDir="column" justify="flex-end" pb="4rem">
                <Text
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1rem"
                  color="#D9D9D9"
                >
                  Real time data collection
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1rem"
                  color="#D9D9D9"
                >
                  Video recognition for no touch data collection
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1rem"
                  color="#D9D9D9"
                >
                  IoT for automatic recording of stoppage and production
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1rem"
                  color="#D9D9D9"
                >
                  Manual input using a app or desktop web page
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1rem"
                  color="#D9D9D9"
                >
                  Precision in data recording
                </Text>
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
          <Flex w="100%" flexDir="column" justify="space-between">
            <Flex w="100%" justify="space-between">
              <Flex flexDir="column">
                <Heading
                  fontFamily="Work Sans"
                  w={460}
                  mt="8"
                  fontSize="2.6rem"
                  color="#FFF"
                >
                  Simple and smart Data Collection
                </Heading>
                <Text
                  fontFamily="Work Sans"
                  w={460}
                  mt="4"
                  fontSize="1.25rem"
                  color="#FFF"
                >
                  Track your factory with IoT, App or Camera to collect data and
                  have a clear digital view of the manufacturing process to take
                  precise decisions based on real time informations.
                </Text>
              </Flex>
            </Flex>
            <Flex
              mt="8"
              style={{
                width: "100%",
              }}
            >
              <Image height={655.17} width={1200} src="/collect-2.png" />
            </Flex>
          </Flex>

          <Flex w="100%" flexDir="column" justify="space-between">
            <Flex
              style={{
                width: "100%",
              }}
              justify="center"
              align="center"
            >
              <Image
                height={651.17}
                width={1187.39}
                src="/ai-detect-full.png"
              />
            </Flex>

            <Flex w="100%" mt="8" justify="space-between">
              <Flex flexDir="column" justify="flex-end" pb="4rem">
                <Text
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Real time data collection
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Video recognition for no touch data collection
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  IoT for automatic recording of stoppage and production
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Manual input using a app or desktop web page
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Precision in data recording
                </Text>
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
          <Flex w="100%" justify="space-between">
            <Flex w="100%" justify="space-between">
              <Flex flexDir="column">
                <Heading
                  fontFamily="Work Sans"
                  w={460}
                  mt="8"
                  fontSize="2.6rem"
                  color="#FFF"
                >
                  Simple and smart Data Collection
                </Heading>
                <Text
                  fontFamily="Work Sans"
                  w={460}
                  mt="4"
                  fontSize="1.25rem"
                  color="#FFF"
                >
                  Track your factory with IoT, App or Camera to collect data and
                  have a clear digital view of the manufacturing process to take
                  precise decisions based on real time informations.
                </Text>
              </Flex>
            </Flex>
            <Flex
              mt="8"
              style={{
                height: 300,
                width: 1649,
              }}
            >
              <Image height={300} width={1649} src="/collect-1.png" />
            </Flex>
          </Flex>

          <Flex w="100%" justify="space-between">
            <Flex
              style={{
                height: 617.53 / 1.5,
                width: 824.2 / 1.5,
              }}
              left={-5}
              position="absolute"
            >
              <Image height={617.53} width={824.2} src="/ai-detect.png" />
            </Flex>

            <Flex
              mt="8"
              style={{
                height: 420,
                width: 824.2,
              }}
            ></Flex>
            <Flex w="100%" justify="space-between">
              <Flex flexDir="column" justify="flex-end" pb="4rem">
                <Text
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Real time data collection
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Video recognition for no touch data collection
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  IoT for automatic recording of stoppage and production
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Manual input using a app or desktop web page
                </Text>
                <Text
                  mt="2"
                  cursor="pointer"
                  textDecorationLine="underline"
                  fontFamily="Work Sans"
                  fontSize="1.2rem"
                  color="#D9D9D9"
                >
                  Precision in data recording
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
