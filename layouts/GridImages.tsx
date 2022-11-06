import React from "react";

import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Header from "../components/Header";
import Image from "next/image";

export default function GridImages({
  bg = "linear-gradient(to bottom right, #3d69f4, #0d2675)",
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  return (
    <Flex flexDir="column" bg={bg} w="100%">
      {mobile && (
        <Flex py="10" px="1rem" flexDir="column" justify="space-between">
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize="2rem"
              w="90%"
              color="#FFF"
            >
              Full package solutions for all manufacturing segments
            </Heading>

            <Text
              fontFamily="Work Sans"
              w="80%"
              mt="4"
              fontSize="1rem"
              color="#FFF"
            >
              Track, manage and take precise decisions based on real time
              information with unique features developed for your industrial
              segment.
            </Text>
          </Flex>
          <Flex flexDir="column" mt="6">
            <Flex>
              <Flex
                mr="4"
                style={{
                  width: 479 / 1.6,
                }}
              >
                <Image src="/resource-3.png" height={390} width={479} />
              </Flex>
              <Flex
                style={{
                  width: 479 / 1.6,
                }}
              >
                <Image src="/resource-4.png" height={390} width={479} />
              </Flex>
            </Flex>
            <Flex mt="4">
              <Flex
                mr="4"
                style={{
                  width: 479 / 1.6,
                }}
              >
                <Image src="/resource-1.png" height={390} width={479} />
              </Flex>
              <Flex
                style={{
                  width: 479 / 1.6,
                }}
              >
                <Image src="/resource-2.png" height={390} width={479} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
      {tablet && (
        <Flex py="20" px="4rem" flexDir="column" justify="space-between">
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize="2.6rem"
              w={460}
              color="#FFF"
            >
              Full package solutions for all manufacturing segments
            </Heading>

            <Text
              fontFamily="Work Sans"
              w={460}
              mt="4"
              fontSize="1.2rem"
              color="#FFF"
            >
              Track, manage and take precise decisions based on real time
              information with unique features developed for your industrial
              segment.
            </Text>
          </Flex>
          <Flex flexDir="column" mt="6">
            <Flex>
              <Flex
                mr="4"
                style={{
                  width: 479 / 1.2,
                }}
              >
                <Image src="/resource-3.png" height={390} width={479} />
              </Flex>
              <Flex
                style={{
                  width: 479 / 1.2,
                }}
              >
                <Image src="/resource-4.png" height={390} width={479} />
              </Flex>
            </Flex>
            <Flex mt="4">
              <Flex
                mr="4"
                style={{
                  width: 479 / 1.2,
                }}
              >
                <Image src="/resource-1.png" height={390} width={479} />
              </Flex>
              <Flex
                style={{
                  width: 479 / 1.2,
                }}
              >
                <Image src="/resource-2.png" height={390} width={479} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
      {desktop && (
        <Flex py="20" px="4rem" justify="space-between" align="center">
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize="2.6rem"
              w={460}
              color="#FFF"
            >
              Full package solutions for all manufacturing segments
            </Heading>

            <Text
              fontFamily="Work Sans"
              w={460}
              mt="4"
              fontSize="1.2rem"
              color="#FFF"
            >
              Track, manage and take precise decisions based on real time
              information with unique features developed for your industrial
              segment.
            </Text>
          </Flex>
          <Flex flexDir="column">
            <Flex>
              <Flex
                mr="4"
                style={{
                  width: 479 / 2,
                  height: 390 / 2,
                }}
              >
                <Image src="/resource-3.png" height={390} width={479} />
              </Flex>
              <Flex
                style={{
                  width: 479 / 2,
                  height: 390 / 2,
                }}
              >
                <Image src="/resource-4.png" height={390} width={479} />
              </Flex>
            </Flex>
            <Flex mt="4">
              <Flex
                mr="4"
                style={{
                  width: 479 / 2,
                  height: 390 / 2,
                }}
              >
                <Image src="/resource-1.png" height={390} width={479} />
              </Flex>
              <Flex
                style={{
                  width: 479 / 2,
                  height: 390 / 2,
                }}
              >
                <Image src="/resource-2.png" height={390} width={479} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
