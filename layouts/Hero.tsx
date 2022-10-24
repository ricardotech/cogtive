import styles from "../styles/Home.module.css";
import React from "react";

import { Flex, Text, Heading } from "@chakra-ui/react";
import { NextImage } from "../hocs/Image";

import useMediaQuery from "../utils/mediaQuery";
import Button from "../hocs/Button";
import EquipmentModule from "../components/EquipmentModule";

export default function Hero({
  title = "",
  secondTitle = "",
  subtitle = "",
  secondSubtitle = "",
  thirdSubtitle = "",
  imageSrc = "",
  buttonColor = "",
  imageRight = 0,
  imageWidth = 1414.9,
  imageHeight = 943.04,
  mt = 0,
  bg = "linear-gradient(to bottom right, #3d69f4, #0d2675)",
  imageMobile = "overflowed",
  cta = "",
  outlined = false,
  equipmentModule = false,
  notifications = false,
  onClick = () => {},
}: {
  title?: string;
  secondTitle?: string;
  subtitle?: string;
  secondSubtitle?: string;
  thirdSubtitle?: string;
  imageSrc?: string;
  mt?: number;
  imageRight?: number;
  imageWidth?: number;
  imageHeight?: number;
  imageMobile?: string;
  buttonColor?: string;
  bg?: string;
  cta?: string;
  outlined?: boolean;
  equipmentModule?: boolean;
  notifications?: boolean;
  onClick?: Function;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();
  return (
    <Flex py="10" bg={bg} w="100%" justify="space-between">
      {mobile && (
        <Flex flexWrap="wrap" flexDir="column" w="100%" justify="center">
          <Heading
            fontFamily="Work Sans"
            ml="2rem"
            fontSize={
              title === "Event notification on your phone" ? "2.2rem" : "2.5rem"
            }
            w={title === "Event notification on your phone" ? 350 : 300}
            color={imageSrc === "/outstanding.png" ? "#FFCC17" : "#FFF"}
          >
            {title}
          </Heading>
          {secondTitle.length > 0 && (
            <Heading
              fontFamily="Work Sans"
              ml="2rem"
              fontSize="3rem"
              color="#FFF"
            >
              {secondTitle}
            </Heading>
          )}
          {imageMobile === "contained" && (
            <Flex>
              {imageSrc === "/macbook.png" ? (
                <NextImage
                  height={imageHeight}
                  width={imageWidth}
                  src={imageSrc}
                />
              ) : (
                <NextImage
                  height={imageHeight.toString()}
                  width={imageWidth.toString()}
                  src={imageSrc}
                />
              )}
            </Flex>
          )}
          {imageMobile === "overflowed" && (
            <>
              <Flex visibility="hidden" py="20" mt={mt ? mt : 0}>
                <NextImage
                  height={imageHeight.toString()}
                  width={imageWidth.toString()}
                  src={imageSrc}
                />
              </Flex>
              <Flex
                position="absolute"
                w="145vw"
                mt={mt ? mt : 0}
                right={imageRight ? imageRight : -75}
              >
                <NextImage
                  height={imageHeight.toString()}
                  width={imageWidth.toString()}
                  src={imageSrc}
                />
              </Flex>
            </>
          )}

          <Text
            mx="2rem"
            fontFamily="Work Sans"
            mt={
              imageSrc === "/devices.png"
                ? "12rem"
                : imageSrc === "/image.png"
                ? "5rem"
                : "2rem"
            }
            color="#FFF"
            fontSize="1.1rem"
          >
            {subtitle}
          </Text>
          {equipmentModule && (
            <Flex flexDir="column" mt="8" ml="6">
              <Flex visibility="hidden" h="22em"></Flex>
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
          )}
          {secondSubtitle.length > 0 && (
            <Text
              fontFamily="Work Sans"
              mx="2rem"
              my="1rem"
              color="#FFF"
              fontSize="1.1rem"
            >
              {secondSubtitle}
            </Text>
          )}
          {thirdSubtitle.length > 0 && (
            <Text
              fontFamily="Work Sans"
              mx="2rem"
              mt="1rem"
              color="#FFF"
              fontSize="1.1rem"
            >
              {thirdSubtitle}
            </Text>
          )}

          {cta && (
            <Button
              onPress={onClick}
              ml="2rem"
              mt="2rem"
              label={cta}
              underline={outlined}
              color={buttonColor}
            />
          )}

          {notifications && (
            <Flex flexDir="column">
              <Flex h="13em" />
              <Flex
                style={{
                  marginTop: 10,
                }}
                ml="4"
                position="absolute"
                w={"60vw"}
                left="0"
              >
                <NextImage
                  height={292}
                  width={816.93}
                  src="/notifications.png"
                />
              </Flex>
              <Flex
                style={{
                  marginTop: "10em",
                }}
                ml="6"
                position="absolute"
                w={"60vw"}
                left="0"
              >
                <NextImage height={48.33} width={156.69} src="/messages.png" />
              </Flex>
            </Flex>
          )}
        </Flex>
      )}

      {tablet && (
        <Flex
          flexDir="column"
          pl="2rem"
          h={
            imageSrc === "/tv.png"
              ? "37em"
              : imageSrc === "/macbook.png"
              ? "60em"
              : imageSrc === "/devices.png"
              ? "45em"
              : "32em"
          }
          pt={imageSrc === "/tv.png" ? "0" : "4rem"}
        >
          <Heading
            fontFamily="Work Sans"
            fontSize={imageSrc === "/devices.png" ? "3rem" : "3rem"}
            w={
              imageSrc === "/devices.png"
                ? 460
                : imageSrc === "/image.png"
                ? 330
                : 400
            }
            color={imageSrc === "/outstanding.png" ? "#FFCC17" : "#FFF"}
          >
            {title}
          </Heading>
          {secondTitle.length > 0 && (
            <Heading fontFamily="Work Sans" fontSize="2.7rem" color="#FFF">
              {secondTitle}
            </Heading>
          )}

          <Text
            fontFamily="Work Sans"
            color="#FFF"
            w={
              imageSrc === "/macbook.png"
                ? 310
                : imageSrc === "/image.png"
                ? 350
                : 440
            }
            fontSize="1.1rem"
            mt="1rem"
          >
            {subtitle}
          </Text>

          {secondSubtitle.length > 0 && (
            <Text
              fontFamily="Work Sans"
              mt="1rem"
              w={
                imageSrc === "/macbook.png"
                  ? 310
                  : imageSrc === "/image.png"
                  ? 100
                  : 430
              }
              color="#FFF"
              fontSize="1.1rem"
            >
              {secondSubtitle}
            </Text>
          )}
          {notifications && (
            <Flex flexDir="column">
              <Flex h="15em" />
              <Flex
                style={{
                  marginTop: 20,
                }}
                ml="4"
                position="absolute"
                w={"50vw"}
                maxW={460}
                left="0"
              >
                <NextImage
                  height={292}
                  width={816.93}
                  src="/notifications.png"
                />
              </Flex>
              <Flex
                style={{
                  marginTop: "14em",
                }}
                ml="6"
                position="absolute"
                w={"60vw"}
                left="0"
              >
                <NextImage height={48.33} width={156.69} src="/messages.png" />
              </Flex>
            </Flex>
          )}

          {equipmentModule && (
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
          )}

          {thirdSubtitle.length > 0 && (
            <Text
              fontFamily="Work Sans"
              mt="1rem"
              w={440}
              color="#FFF"
              fontSize="1.1rem"
            >
              {thirdSubtitle}
            </Text>
          )}

          {cta && (
            <Button
              onPress={onClick}
              mt="2rem"
              label={cta}
              underline={outlined}
              color={buttonColor}
            />
          )}
        </Flex>
      )}

      {desktop && (
        <Flex flexDir="column" w="40%" pl="4rem" pt="4rem">
          <Heading
            fontFamily="Work Sans"
            fontSize={imageSrc === "/devices.png" ? "2.4rem" : "3.8rem"}
            w={imageSrc === "/devices.png" ? 650 : 420}
            color={imageSrc === "/outstanding.png" ? "#FFCC17" : "#FFF"}
          >
            {title}
          </Heading>

          {secondTitle.length > 0 && (
            <Heading fontFamily="Work Sans" fontSize="3rem" color="#FFF">
              {secondTitle}
            </Heading>
          )}
          <Text
            fontFamily="Work Sans"
            color="#FFF"
            fontSize="1.1rem"
            w={380}
            mt="1rem"
          >
            {subtitle}
          </Text>
          {secondSubtitle.length > 0 && (
            <Text
              fontFamily="Work Sans"
              mt="1rem"
              color="#FFF"
              fontSize="1.1rem"
            >
              {secondSubtitle}
            </Text>
          )}
          {thirdSubtitle.length > 0 && (
            <Text
              fontFamily="Work Sans"
              mt="1rem"
              color="#FFF"
              fontSize="1.1rem"
            >
              {thirdSubtitle}
            </Text>
          )}
          {notifications && (
            <Flex flexDir="column">
              <Flex h="15em" />
              <Flex
                style={{
                  marginTop: 20,
                }}
                ml="10"
                position="absolute"
                w={"50vw"}
                maxW={460}
                left="0"
              >
                <NextImage
                  height={292}
                  width={816.93}
                  src="/notifications.png"
                />
              </Flex>
              <Flex
                style={{
                  marginTop: "14em",
                }}
                ml="14"
                position="absolute"
                w={"60vw"}
                left="0"
              >
                <NextImage height={48.33} width={156.69} src="/messages.png" />
              </Flex>
            </Flex>
          )}

          {cta && (
            <Button
              onPress={onClick}
              mt="2rem"
              label={cta}
              underline={outlined}
              color={buttonColor}
            />
          )}
        </Flex>
      )}

      {tablet && (
        <>
          <Flex visibility="hidden" h="30em">
            <NextImage
              height={imageWidth.toString()}
              width={imageWidth.toString()}
              src={imageSrc}
            />
          </Flex>
          <Flex
            mt={
              imageSrc === "/tv.png"
                ? -100
                : imageSrc === "/macbook.png"
                ? 200
                : "none"
            }
            position="absolute"
            w={
              imageSrc === "/tv.png"
                ? "55vw"
                : imageSrc === "/devices.png"
                ? "65vw"
                : "80vw"
            }
            right={imageRight ? imageRight : -120}
          >
            <NextImage
              height={imageHeight.toString()}
              width={imageWidth.toString()}
              src={imageSrc}
            />
          </Flex>
        </>
      )}

      {desktop && (
        <Flex w="100%" maxH="75vh">
          <Flex visibility="hidden" py="20">
            <NextImage
              height={imageHeight.toString()}
              width={imageWidth.toString()}
              src={imageSrc}
            />
          </Flex>
          <Flex
            position="absolute"
            w={
              imageSrc === "/tv.png"
                ? "45vw"
                : imageSrc === "/devices.png"
                ? "40vw"
                : "65vw"
            }
            mt={imageSrc === "/tv.png" ? "-20" : "0"}
            right={imageRight > 0 ? imageRight : 0}
          >
            <NextImage
              height={imageHeight.toString()}
              width={imageWidth.toString()}
              src={imageSrc}
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
