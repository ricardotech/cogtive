import styles from "../../styles/Home.module.css";

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
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import Image from "next/image";

import useMediaQuery from "../../utils/mediaQuery";

import { IoMdClose } from "react-icons/io";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import Button from "../../hocs/Button";

type Post = {
  title: string;
  description: string;
  thumbnailURL: string;
  pageId: string;
};

type PageProps = {
  blockMap: any;
  error?: string;
  posts: [Post];
};

const BlogPage: NextPage<PageProps> = (props) => {
  const { mobile, tablet, desktop } = useMediaQuery();

  const router = useRouter();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [language, setLanguage] = React.useState<"pt" | "en">("en");

  const [open, setOpen] = React.useState<boolean>(false);

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
    <>
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
      {props.error ? (
        <Flex
          flexDir="column"
          bg="#2F3437"
          h="100vh"
          w="100%"
          justify="center"
          align="center"
        >
          <Text color="#FFF">Página não encontrada</Text>
        </Flex>
      ) : (
        <Flex flexDir="column">
          <Header language="en" blog bg="#262626" />
          <NotionRenderer
            recordMap={props.blockMap}
            fullPage={true}
            darkMode={true}
          />
        </Flex>
      )}
      <Flex flexDir="column" w="100%" bg="#262626" px="2rem">
        <Flex flexDir="column" mt="6" pb="2">
          <Text color="#FFF" fontFamily="Work Sans" mt="4" fontSize={14}>
            Next reading
          </Text>
        </Flex>
      </Flex>
      <Footer />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={() => {
          setOpen(false);
          onClose();
        }}
      >
        <DrawerOverlay />
        <DrawerContent
          style={{
            height: "auto",
            backgroundColor: "#2F3437",
          }}
        >
          <Header language="en" />

          <Flex px="6" flexDir="column">
            <a href="/" />
            <a
              href="/about-us"
              style={{
                marginBottom: 20,
                color: "#DADADA",
                fontSize: 22,
              }}
            >
              About us
            </a>
            <a
              href="/resources"
              style={{
                marginBottom: 20,
                color: "#DADADA",
                fontSize: 22,
              }}
            >
              Resources
            </a>
            <a
              href="/solutions"
              style={{
                marginBottom: 20,
                color: "#DADADA",
                fontSize: 22,
              }}
            >
              Solutions
            </a>
            <a
              href="/blog"
              style={{
                marginBottom: 20,
                color: "#FFF",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              Blog
            </a>
            <a
              href="/contact"
              style={{
                color: "#DADADA",
                fontSize: 22,
              }}
            >
              Contact
            </a>
          </Flex>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  pageId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params;

  // secret_token -> my-integrations -> integration>secret_token
  // userId -> secret_token #https://developers.notion.com/reference/get-users

  const notion = new NotionAPI({
    activeUser: process.env.activeUser,
    authToken: process.env.authToken,
  });

  try {
    const recordMap = await notion.getPage(params.pageId.toString());
    const posts = await axios.get(
      "https://237a-2804-14c-3f89-8b76-c5f0-57a4-98fb-16f9.sa.ngrok.io/posts"
    );

    return {
      props: {
        blockMap: recordMap,
        posts: posts.data,
      },
    };
  } catch (e) {
    return {
      props: {
        error: "Página não existe",
      },
    };
  }
};

export default BlogPage;
