import React, { useState } from "react";

import { Flex, Input, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import axios from "axios";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnailURL, setThumbnailURL] = useState<string>("");
  const [pageId, setPageId] = useState<string>("");

  type Post = {
    title: string;
    description: string;
    thumbnailURL: string;
    pageId: string;
  };

  async function createPost() {
    const res = await axios.post(
      "https://237a-2804-14c-3f89-8b76-c5f0-57a4-98fb-16f9.sa.ngrok.io/post",
      {
        title: title,
        description: description,
        thumbnailURL: thumbnailURL,
        pageId: pageId,
      }
    );

    if (res.status === 201) {
      alert("Post criado com sucesso!");
      router.push("/blog");
    } else {
      alert(JSON.stringify(res.data));
    }
  }

  return (
    <Flex
      bg="#303030"
      justify="space-between"
      flexDir="column"
      align="center"
      h="100vh"
      w="100%"
    >
      <Header language="en" blog bg="#303030" />
      <Flex flexDir="column" w={300}>
        <Text color="#FFF" fontSize="1.5em" fontWeight="bold">
          Create Blog Post
        </Text>
        <Text mt="1em" color="#FFF" fontSize="1em">
          Title
        </Text>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          my="0.35rem"
          color="#FFF"
          bg="transparent"
        />
        <Text color="#FFF" fontSize="1em">
          Description
        </Text>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
          my="0.35rem"
          color="#FFF"
          bg="transparent"
        />
        <Text color="#FFF" fontSize="1em">
          Thumbnail Image URL
        </Text>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setThumbnailURL(e.target.value);
          }}
          my="0.35rem"
          color="#FFF"
          bg="transparent"
        />
        <Text color="#FFF" fontSize="1em">
          Notion Page Id
        </Text>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPageId(e.target.value);
          }}
          my="0.35rem"
          color="#FFF"
          bg="transparent"
        />
        <Flex
          cursor="pointer"
          onClick={() => createPost()}
          bg="#FFF"
          mt="1em"
          justify="center"
          borderRadius="5"
          align="center"
          w={300}
          py="2.5"
        >
          <Text color="#333" fontWeight="bold">
            Publicar
          </Text>
        </Flex>
      </Flex>
      <Flex />
    </Flex>
  );
}
