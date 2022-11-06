import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import axios from "axios";

import { Flex, Text } from "@chakra-ui/react";
import Hero from "../layouts/Hero";
import Header from "../components/Header";
import Head from "next/head";
import { Html } from "next/document";
import Disclaimer from "../layouts/Disclaimer";
import Slider from "../layouts/Slider";
import { Carousel } from "react-responsive-carousel";
import Benefits from "../layouts/Benefits";
import Posts from "../layouts/Posts";
import DisclaimerAlt from "../layouts/Disclaimer.alt";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import GridImages from "../layouts/GridImages";
import LayoutImages from "../layouts/LayoutImages";
import LayoutImage from "../layouts/LayoutImage1";
import LayoutImage2 from "../layouts/LayoutImage2";
import LayoutImage1 from "../layouts/LayoutImage1";
import LayoutImage3 from "../layouts/LayoutImage3";
import LayoutImage4 from "../layouts/LayoutImage4";
import LayoutImage5 from "../layouts/LayoutImage5";

type Post = {
  title: string;
  description: string;
  thumbnailURL: string;
  pageId: string;
};

export default function Resources(props: { posts: [Post] }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cogtive</title>
        <meta name="Cogtive" content="We Boost Your Factory" />
      </Head>
      <Flex flexDir="column" bg="#303030" align="center" w="100%">
        <Header language="pt" solutions bg="#303030" />
        <GridImages />
        <LayoutImages />
        <LayoutImage1 />
        <LayoutImage2 />
        <LayoutImage3 />
        <LayoutImage4 />
        <LayoutImage5 />
        <Posts language="pt" posts={props.posts} />
      </Flex>
      <Footer language="en" />
    </>
  );
}

interface Params extends ParsedUrlQuery {
  pageId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params;

  try {
    const data = await axios.get("http://localhost:3001/posts");

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
