import React from "react";

import { Flex, Heading, Text } from "@chakra-ui/react";

import useMediaQuery from "../utils/mediaQuery";
import Button from "../hocs/Button";

export default function DisclaimerAlt({ title = "", subtitle = "", cta = "" }) {
  const { mobile, tablet, desktop } = useMediaQuery();

  return (
    <Flex flexDir="column" w="100%">
      {mobile && (
        <Flex flexDir="column" mt="4em" w="100%" pb="4rem" pl="2rem">
          <Heading
            w={300}
            fontFamily="Work Sans"
            fontSize="1.8rem"
            color="#FFF"
          >
            {title}
          </Heading>
          <Text
            mt="2em"
            w={340}
            fontFamily="Work Sans"
            fontSize="1rem"
            color="#D9D9D9"
          >
            {subtitle}
          </Text>
          <Button underline mt="2em" mb="1em" label={cta} fontSize="1.2em" />
        </Flex>
      )}
      {!mobile && (
        <Flex flexDir="column" mt="2em" w="100%" pb="4rem" pl="2rem">
          <Heading fontFamily="Work Sans" fontSize="1.8rem" color="#FFF">
            {title}
          </Heading>
          <Text
            mt="2em"
            w={680}
            fontFamily="Work Sans"
            fontSize="1rem"
            color="#D9D9D9"
          >
            {subtitle}
          </Text>
          <Button underline mt="2em" mb="1em" label={cta} fontSize="1.3em" />
        </Flex>
      )}
    </Flex>
  );
}
