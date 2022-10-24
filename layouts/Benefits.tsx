import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Button from "../hocs/Button";

import useMediaQuery from "../utils/mediaQuery";

export default function Benefits({
  title = "Benefits",
  subtitle = "Simple and fast implementation to release your industry's true potential.",
  language = "en",
}: {
  title: string;
  subtitle: string;
  language: string;
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
        <Flex flexDir="column" pl={desktop ? "2em" : "0"}>
          <Flex flexWrap="wrap" flexDir="column" w="100%" justify="center">
            <Heading fontFamily="Work Sans" ml="2rem" color="#FFF">
              {title}
            </Heading>
          </Flex>

          {language === "en" ? (
            <Flex flexDir="column" p="2rem">
              <Item mobile title="Clear view of the factory floor" />
              <Item mobile title="Precise bottleneck identification" />
              <Item mobile title="Productivity Gain" />
              <Item mobile title="Lead Time & Stock Reduction" />
              <Item
                mobile
                title="Better planning and following up production"
              />
              <Item mobile title="Real time data for leadership decisions" />
              <Item mobile title="Cost savings" />
              <Item mobile title="WIP Control" />
            </Flex>
          ) : (
            <Flex flexDir="column" p="2rem">
              <Item mobile title="Visão clara do chão de fábrica" />
              <Item mobile title="Identificação precisa do gargalo" />
              <Item mobile title="Ganho de produtividade" />
              <Item mobile title="Lead Time e Redução de Estoque" />
              <Item
                mobile
                title="Melhor planejamento e acompanhamento
                da produção"
              />
              <Item
                mobile
                title="Dados em tempo real para decisões de liderança"
              />
              <Item mobile title="Poupança de custos" />
              <Item mobile title="Controle WIP" />
            </Flex>
          )}

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
            label={
              language === "en" ? "Request more info" : "Conheça os benefícios"
            }
            color="#FFF"
          />
        </Flex>
      )}
      {desktop && (
        <Flex flexDir="column" pl={desktop ? "2em" : "0"} w="100%">
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
              label={
                language === "en"
                  ? "Request more info"
                  : "Conheça os benefícios"
              }
              color="#FFF"
            />
          </Flex>

          <Flex w="100%" pl="2.5rem">
            {language === "en" ? (
              <Flex ml={"-3em"} flexDir="column" p="2rem">
                <Item desktop title="Clear view of the factory floor" />
                <Item desktop title="Precise bottleneck identification" />
                <Item desktop title="Productivity Gain" />
                <Item desktop title="Lead Time & Stock Reduction" />
              </Flex>
            ) : (
              <Flex ml={"-3em"} flexDir="column" p="2rem">
                <Item desktop title="Visão clara do chão de fábrica" />
                <Item desktop title="Identificação precisa do gargalo" />
                <Item desktop title="Ganho de produtividade" />
                <Item desktop title="Lead Time e Redução de Estoque" />
              </Flex>
            )}
            {language === "en" ? (
              <Flex flexDir="column" p="2rem">
                <Item
                  desktop
                  title="Better planning and following up production"
                />
                <Item desktop title="Real time data for leadership decisions" />
                <Item desktop title="Cost savings" />
                <Item desktop title="WIP Control" />
              </Flex>
            ) : (
              <Flex flexDir="column" p="2rem">
                <Item
                  desktop
                  title="Melhor planejamento e acompanhamento
                  da produção"
                />
                <Item
                  desktop
                  title="Dados em tempo real para decisões de liderança"
                />
                <Item desktop title="Poupança de custos" />
                <Item desktop title="Controle WIP" />
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
      {tablet && (
        <Flex flexDir="column" pl={desktop ? "2em" : "0"} w="100%">
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
              label={
                language === "en"
                  ? "Request more info"
                  : "Conheça os benefícios"
              }
              color="#FFF"
            />
          </Flex>

          <Flex w="100%" pl="2.5rem">
            {language === "en" ? (
              <Flex ml={"-3em"} flexDir="column" p="2rem">
                <Item tablet title="Clear view of the factory floor" />
                <Item tablet title="Precise bottleneck identification" />
                <Item tablet title="Productivity Gain" />
                <Item tablet title="Lead Time & Stock Reduction" />
              </Flex>
            ) : (
              <Flex ml={"-3em"} flexDir="column" p="2rem">
                <Item tablet title="Visão clara do chão de fábrica" />
                <Item tablet title="Identificação precisa do gargalo" />
                <Item tablet title="Ganho de produtividade" />
                <Item tablet title="Lead Time e Redução de Estoque" />
              </Flex>
            )}
            {language === "en" ? (
              <Flex flexDir="column" p="2rem">
                <Item
                  tablet
                  title="Better planning and following up production"
                />
                <Item tablet title="Real time data for leadership decisions" />
                <Item tablet title="Cost savings" />
                <Item tablet title="WIP Control" />
              </Flex>
            ) : (
              <Flex flexDir="column" p="2rem">
                <Item
                  tablet
                  title="Melhor planejamento e acompanhamento
                  da produção"
                />
                <Item
                  tablet
                  title="Dados em tempo real para decisões de liderança"
                />
                <Item tablet title="Poupança de custos" />
                <Item tablet title="Controle WIP" />
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
