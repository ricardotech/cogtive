import styles from "../../styles/Home.module.css";
import axios from "axios";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";

import useMediaQuery from "../../utils/mediaQuery";

import { IoMdClose } from "react-icons/io";
import Head from "next/head";
import Image from "next/image";
import Button from "../../hocs/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ParsedUrlQuery } from "querystring";

type PageProps = {
  blockMap: any;
  error?: string;
};

type Post = {
  title: string;
  description: string;
  thumbnailURL: string;
  pageId: string;
};

const Blog = (props: { posts: [Post] }) => {
  const router = useRouter();

  const { mobile, tablet, desktop } = useMediaQuery();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [language, setLanguage] = React.useState<"pt" | "en">("en");

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState<boolean>(false);

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
      <Flex flexDir={!mobile ? "row" : "column"} py="2rem">
        <Flex
          style={{
            width: mobile ? "100%" : 875.04 / 1.5,
            borderRadius: 10,
          }}
        >
          <Image
            src={thumbnail}
            width={875.04 / 1.5}
            height={525.03 / 1.5}
            style={{
              borderRadius: 10,
            }}
          />
        </Flex>
        <Flex
          w={mobile ? "100%" : tablet ? 420 : 500}
          flexDir="column"
          mt={mobile ? "1.3em" : "0"}
          ml={mobile ? "0" : "1.8rem"}
          justify="space-around"
        >
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize={mobile ? "1.5rem" : tablet ? "1.6rem" : "2.3rem"}
              color="#FFF"
            >
              {title}
            </Heading>
            <Text
              fontFamily="Work Sans"
              mt="1em"
              fontSize={mobile ? "1rem" : tablet ? "0.8rem" : "1.2rem"}
              color="#FFF"
            >
              {subtitle}
            </Text>
          </Flex>
          <Button
            mt="1em"
            fontSize="1.2em"
            underline
            label="Read article"
            onPress={() => {
              setLoading(true);
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
      <Flex
        flexDir={mobile ? "column" : "row"}
        py="2rem"
        mr="2"
        borderTop="1px solid #555"
      >
        {mobile && (
          <Flex
            style={{
              width: mobile ? "100%" : 252.56 / 1.5,
              height: 232,
              borderRadius: 10,
            }}
          >
            <Image
              src={thumbnail}
              width={252.56 * 3}
              height={232 * 3}
              style={{
                borderRadius: 10,
              }}
            />
          </Flex>
        )}
        {!mobile && (
          <Flex
            style={{
              width: 252.56 / 1.5,
              height: 232 / 1.5,
              borderRadius: 10,
            }}
          >
            <Image
              src={thumbnail}
              width={252.56 * 3}
              height={232 * 3}
              style={{
                borderRadius: 10,
              }}
            />
          </Flex>
        )}
        <Flex
          flexDir="column"
          mt={mobile ? "1em" : "0"}
          ml={mobile ? "0" : "1rem"}
          w={mobile ? "100%" : "calc(100vw - 250px)"}
          justify="space-around"
        >
          <Flex flexDir="column">
            <Heading
              fontFamily="Work Sans"
              fontSize={mobile ? "1.4rem" : tablet ? "1.6rem" : "1.8em"}
              color="#FFF"
            >
              {title}
            </Heading>
            <Text fontFamily="Work Sans" mt="1em" fontSize="0.8em" color="#FFF">
              {subtitle}
            </Text>
          </Flex>
          <Flex
            w="100%"
            mt={mobile ? "1em" : "0"}
            justify="space-between"
            align="center"
          >
            <Button
              underline
              label="Read article"
              fontSize="1rem"
              onPress={() => {
                setLoading(true);
                router.push(`/blog/${id}`);
              }}
            />
            <Text color="#FFF" textAlign="right" fontSize="0.5rem">
              Posted in Sep. 20, 2022 12:35
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" bg="#303030">
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Work+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header blog bg="#303030" />
      {loading ? (
        <Flex bg="#3030" justify="center" align="center" h="85vh" w="100%">
          <Spinner size="md" color="#FFF" />
        </Flex>
      ) : (
        <Flex
          style={{
            maxWidth: 1200,
          }}
          flexDir="column"
          mx="auto"
          px={!desktop ? "2rem" : "0"}
          w="100%"
        >
          <BigPost
            id={props.posts[props.posts.length - 1].pageId}
            thumbnail={props.posts[props.posts.length - 1].thumbnailURL}
            title={props.posts[props.posts.length - 1].title}
            subtitle={props.posts[props.posts.length - 1].description}
          />
          {mobile ? (
            <Flex flexDir="column" w="100%">
              <Flex flexDir="column" mt="6" pb="2">
                <Text color="#FFF" fontFamily="Work Sans" mt="4" fontSize={14}>
                  Next reading
                </Text>
              </Flex>
              {props.posts.map((post: Post, i: number) => {
                if (i === props.posts.length - 1) return null;

                return (
                  <SmallPost
                    key={i}
                    id={post.pageId}
                    title={post.title}
                    subtitle={post.description}
                    thumbnail={post.thumbnailURL}
                    mobile
                  />
                );
              })}
            </Flex>
          ) : tablet ? (
            <Flex flexDir="column" w="100%">
              <Flex
                flexDir="column"
                mt="6"
                borderBottom="1px solid #555"
                pb="2"
              >
                <Text color="#FFF" fontFamily="Work Sans" mt="4" fontSize={14}>
                  Next reading
                </Text>
              </Flex>
              {props.posts.map((post: Post, i: number) => {
                if (i === props.posts.length - 1) return null;

                return (
                  <SmallPost
                    key={i}
                    id={post.pageId}
                    title={post.title}
                    subtitle={post.description}
                    thumbnail={post.thumbnailURL}
                    tablet
                  />
                );
              })}
            </Flex>
          ) : (
            <Flex flexDir="column" w="100%">
              <Flex
                flexDir="column"
                mt="6"
                borderBottom="1px solid #555"
                pb="2"
              >
                <Text color="#FFF" fontFamily="Work Sans" mt="4" fontSize={14}>
                  Next reading
                </Text>
              </Flex>
              {props.posts.map((post: Post, i: number) => {
                if (i === props.posts.length - 1) return null;

                return (
                  <SmallPost
                    key={i}
                    id={post.pageId}
                    title={post.title}
                    subtitle={post.description}
                    thumbnail={post.thumbnailURL}
                    desktop
                  />
                );
              })}
            </Flex>
          )}
        </Flex>
      )}
      <Footer />
    </Flex>
  );
};

interface Params extends ParsedUrlQuery {
  pageId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params;

  try {
    const data = await axios.get(
      "https://943e-2804-14c-3f89-8b76-2822-96e8-ec5f-9fc7.sa.ngrok.io/posts"
    );
    return {
      props: {
        posts: data.data,
      },
    };
  } catch (e) {
    return {
      props: {
        posts: null,
      },
    };
  }
};

export default Blog;
