import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Button from "../hocs/Button";

import useMediaQuery from "../utils/mediaQuery";
import { useRouter } from "next/router";

type Post = {
  title: string;
  description: string;
  thumbnailURL: string;
  pageId: string;
};

export default function Posts({
  posts = [],
  language = "en",
}: {
  posts: [Post] | [];
  language: string;
}) {
  const { mobile, tablet, desktop } = useMediaQuery();

  const router = useRouter();

  function BigPost({
    id = "",
    title = "",
    subtitle = "",
    thumbnail = "",
  }: {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
  }) {
    return (
      <Flex p="2rem">
        <Flex
          style={{
            width: 875.04 / 1.5,
            borderRadius: 10,
          }}
        >
          <Image
            src={thumbnail}
            width={875.04}
            height={525.03}
            style={{
              borderRadius: 10,
            }}
          />
        </Flex>
        <Flex
          w={tablet ? 420 : 500}
          flexDir="column"
          ml="1.8rem"
          justify="space-around"
        >
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize={tablet ? "2rem" : "2.7rem"}
              color="#FFF"
            >
              {title}
            </Heading>
            <Text
              w={tablet ? 440 : 560}
              fontFamily="Work Sans"
              mt="1em"
              fontSize={tablet ? "1rem" : "1.5rem"}
              color="#FFF"
            >
              {subtitle}
            </Text>
          </Flex>
          <Button
            underline
            label="keep reading"
            fontSize="1.2rem"
            onPress={() => {
              router.push(`/blog/${id}`);
            }}
          />
        </Flex>
      </Flex>
    );
  }

  function SmallPost({
    id = "",
    title = "",
    subtitle = "",
    thumbnail = "",
    mobile = false,
    tablet = false,
    desktop = false,
  }: {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  }) {
    return (
      <Flex p="2rem" mr="2">
        <Flex
          style={{
            width: 252.56 / 1.5,
            height: 232 / 1.5,
            borderRadius: 10,
          }}
        >
          <Image
            src={thumbnail}
            width={252.56}
            height={232}
            style={{
              borderRadius: 10,
            }}
          />
        </Flex>
        <Flex flexDir="column" ml="1rem" w={250} justify="space-around">
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize={mobile ? "1rem" : tablet ? "1.3rem" : "0.8em"}
              color="#FFF"
            >
              {title}
            </Heading>
            <Text fontFamily="Work Sans" mt="1em" fontSize="0.8em" color="#FFF">
              {subtitle}
            </Text>
          </Flex>
          <Button
            underline
            label="keep reading"
            fontSize="1rem"
            onPress={() => {
              router.push(`/blog/${id}`);
            }}
          />
        </Flex>
      </Flex>
    );
  }

  function MobilePost({
    id = "",
    title = "",
    subtitle = "",
    thumbnail = "",
    mobile = false,
    tablet = false,
    desktop = false,
  }: {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  }) {
    return (
      <Flex
        p="1rem"
        cursor="pointer"
        borderRadius="15"
        m="4"
        mr="8"
        bg="#414141"
        onClick={() => {
          router.push(`/blog/${id}`);
        }}
      >
        <Flex
          style={{
            borderRadius: 10,
            width: 252.56 / 2,
            height: 232 / 2,
          }}
        >
          <Image
            src={thumbnail}
            width={252.56}
            height={232}
            style={{
              borderRadius: 10,
            }}
          />
        </Flex>
        <Flex w="60%" flexDir="column" ml="0.7rem" justify="space-around">
          <Heading fontFamily="Work Sans" w="80%" fontSize="1em" color="#FFF">
            {title}
          </Heading>
          <Flex w="100%" align="flex-end">
            <Text fontFamily="Work Sans" mt="1em" fontSize="0.7em" color="#FFF">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      flexDir="column"
      py="10"
      bg={"#303030"}
      w="100%"
      justify="space-between"
    >
      <Heading mb="4" fontFamily="Work Sans" ml="2rem" color="#FFF">
        {language === "en" ? "Latest blog posts" : "Ultimas postagens"}
      </Heading>
      {mobile && (
        <Flex flexDir="column" w="100%" pl={desktop ? "2em" : "0"}>
          {posts.map((post: Post, i: number) => {
            if (i < 4)
              return (
                <MobilePost
                  key={i}
                  id={post.pageId}
                  tablet
                  thumbnail={post.thumbnailURL}
                  title={post.title}
                  subtitle={post.description}
                />
              );
          })}
        </Flex>
      )}
      {!mobile && (
        <Flex flexDir="column" w="100%" pl={desktop ? "2em" : "0"}>
          <BigPost
            id={posts[posts.length - 1].pageId}
            thumbnail={posts[posts.length - 1].thumbnailURL}
            title={posts[posts.length - 1].title}
            subtitle={posts[posts.length - 1].description}
          />
          <Flex w="100%" overflowX="scroll">
            {posts.map((post: Post, i: number) => {
              if (i === posts.length - 1) return null;
              if (i < 4)
                return (
                  <SmallPost
                    key={i}
                    tablet
                    id={post.pageId}
                    thumbnail={post.thumbnailURL}
                    title={post.title}
                    subtitle={post.description}
                  />
                );
            })}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
