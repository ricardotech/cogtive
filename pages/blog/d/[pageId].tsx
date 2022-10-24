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
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

type PageProps = {
  pageId: string;
};

const BlogPage: NextPage<PageProps> = (props) => {
  const router = useRouter();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [language, setLanguage] = React.useState<"pt" | "en">("en");

  const [open, setOpen] = React.useState<boolean>(false);

  async function deletePost(pageId: string) {
    const post = await axios.delete(`http://localhost:3001/post/${pageId}`);
    alert("Excluido com sucesso!");
    router.push("/blog");
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
      <Flex
        flexDir="column"
        bg="#333"
        h="100vh"
        w="100%"
        justify="center"
        align="center"
      >
        <Text color="#FFF">Excluir o post</Text>
        <Text color="#FFF">{props.pageId}</Text>
        <Flex
          onClick={() => deletePost(props.pageId)}
          cursor="pointer"
          bg="#FFF"
          mt="1em"
          justify="center"
          borderRadius="5"
          align="center"
          w={300}
          py="2.5"
        >
          <Text color="#333" fontWeight="bold">
            Excluir
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  pageId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params;

  try {
    return {
      props: {
        pageId: params.pageId,
      },
    };
  } catch (e) {
    return {
      props: {
        pageId: "",
      },
    };
  }
};

export default BlogPage;