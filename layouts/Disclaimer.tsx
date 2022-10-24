import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { NextImage } from "../hocs/Image";
import useMediaQuery from "../utils/mediaQuery";

export default function Disclaimer({ bg = "#303030" }: { bg?: string }) {
  const { mobile, tablet, desktop } = useMediaQuery();

  return (
    <Flex flexDir="column">
      {!desktop && (
        <Flex
          bg={bg}
          py="10"
          whiteSpace="pre"
          w="100%"
          justify="center"
          align="center"
        >
          <Text color="#FFF" fontSize="1.3rem">
            Trusted by companies{" "}
          </Text>
          <Text color="#406DFF" fontSize="1.3rem">
            across the globe
          </Text>
        </Flex>
      )}
      {desktop && (
        <Flex
          bg={bg}
          py="10"
          whiteSpace="pre"
          w="100%"
          justify="center"
          align="center"
        >
          <Text color="#FFF" fontSize="1.8rem">
            Trusted by companies{" "}
          </Text>
          <Text color="#406DFF" fontSize="1.8rem">
            across the globe
          </Text>
        </Flex>
      )}
      <Flex mt={-50} w="100%">
        <NextImage src="/companies.png" width="1539" height="502" />
      </Flex>
    </Flex>
  );
}
