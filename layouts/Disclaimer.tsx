import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { NextImage } from "../hocs/Image";
import useMediaQuery from "../utils/mediaQuery";

export default function Disclaimer({
  bg = "#303030",
  language = "en",
}: {
  bg?: string;
  language: string;
}) {
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
            {language === "en"
              ? "Trusted by companies "
              : "Grandes empresas que usam "}
          </Text>
          <Text color="#406DFF" fontSize="1.3rem">
          {language === "en" ? "across the globe" : "COGTIVE"}
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
            {language === "en"
              ? "Trusted by companies "
              : "Grandes empresas que usam "}
          </Text>
          <Text color="#406DFF" fontSize="1.8rem">
          {language === "en" ? "across the globe" : "COGTIVE"}
          </Text>
        </Flex>
      )}
      <Flex mt={-50} w="100%">
        <NextImage src="/companies.png" width="1539" height="502" />
      </Flex>
    </Flex>
  );
}
