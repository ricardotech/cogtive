import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Button from "../hocs/Button";

import useMediaQuery from "../utils/mediaQuery";

export default function Benefits({
  title = "Benefits",
  subtitle = "Simple and fast implementation to release your industry's true potential.",
}: {
  title: string;
  subtitle: string;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  function Item({
    title = "",
    mobile = false,
    tablet = false,
    desktop = false,
  }: {
    title: string;
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  }) {
    return (
      <Flex align="center" mb={mobile ? "2em" : tablet ? "1em" : "1.5em"}>
        <Flex
          style={{
            width: 40,
            height: 40,
          }}
        >
          <Image height={40} width={40} src="/check.png" />
        </Flex>
        <Text
          fontFamily="Work Sans"
          ml="3"
          w={mobile ? "90%" : tablet ? 370 : 420}
          color="#FFF"
          fontSize={mobile ? "1rem" : tablet ? "1rem" : "1.2rem"}
        >
          {title}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex py="10" bg={"#303030"} w="100%" justify="space-between">
      {mobile && (
        <Flex flexDir="column">
          <Flex flexWrap="wrap" flexDir="column" w="100%" justify="center">
            <Heading fontFamily="Work Sans" ml="2rem" color="#FFF">
              {title}
            </Heading>
          </Flex>

          <Flex flexDir="column" p="2rem">
            <Item mobile title="Clear view of the factory floor" />
            <Item mobile title="Precise bottleneck identification" />
            <Item mobile title="Productivity Gain" />
            <Item mobile title="Lead Time & Stock Reduction" />
            <Item mobile title="Better planning and following up production" />
            <Item mobile title="Real time data for leadership decisions" />
            <Item mobile title="Cost savings" />
            <Item mobile title="WIP Control" />
          </Flex>

          <Text
            fontFamily="Work Sans"
            w={350}
            mt={"-1em"}
            mx="2rem"
            color="#FFF"
            fontSize="1.1rem"
          >
            {subtitle}
          </Text>

          <Button
            ml="2rem"
            mt="2em"
            mb="1em"
            label="Request more info"
            color="#FFF"
          />
        </Flex>
      )}
      {desktop && (
        <Flex flexDir="column" w="100%">
          <Flex flexWrap="wrap" flexDir="column" w="100%" justify="center">
            <Heading fontFamily="Work Sans" ml="2rem" color="#FFF">
              {title}
            </Heading>

            <Text
              fontFamily="Work Sans"
              w={350}
              mt={"1em"}
              mx="2rem"
              color="#FFF"
              fontSize="1.1rem"
            >
              {subtitle}
            </Text>

            <Button
              ml="2rem"
              mt="2em"
              mb="1em"
              label="Request more info"
              color="#FFF"
            />
          </Flex>

          <Flex w="100%">
            <Flex flexDir="column" p="2rem">
              <Item
                desktop
                title="Better planning and following up production"
              />
              <Item desktop title="Real time data for leadership decisions" />
              <Item desktop title="Cost savings" />
              <Item desktop title="WIP Control" />
            </Flex>
            <Flex ml={"-3em"} flexDir="column" p="2rem">
              <Item desktop title="Clear view of the factory floor" />
              <Item desktop title="Precise bottleneck identification" />
              <Item desktop title="Productivity Gain" />
              <Item desktop title="Lead Time & Stock Reduction" />
            </Flex>
          </Flex>
        </Flex>
      )}
      {tablet && (
        <Flex flexDir="column" w="100%">
          <Flex flexWrap="wrap" flexDir="column" w="100%" justify="center">
            <Heading fontFamily="Work Sans" ml="2rem" color="#FFF">
              {title}
            </Heading>

            <Text
              fontFamily="Work Sans"
              w={350}
              mt={"1em"}
              mx="2rem"
              color="#FFF"
              fontSize="1.1rem"
            >
              {subtitle}
            </Text>

            <Button
              ml="2rem"
              mt="2em"
              mb="1em"
              label="Request more info"
              color="#FFF"
            />
          </Flex>

          <Flex w="100%">
            <Flex flexDir="column" p="2rem">
              <Item
                tablet
                title="Better planning and following up production"
              />
              <Item tablet title="Real time data for leadership decisions" />
              <Item tablet title="Cost savings" />
              <Item tablet title="WIP Control" />
            </Flex>
            <Flex ml={"-3em"} flexDir="column" p="2rem">
              <Item tablet title="Clear view of the factory floor" />
              <Item tablet title="Precise bottleneck identification" />
              <Item tablet title="Productivity Gain" />
              <Item tablet title="Lead Time & Stock Reduction" />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
