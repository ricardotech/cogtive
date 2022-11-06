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

type Post = {
  title: string;
  description: string;
  thumbnailURL: string;
  pageId: string;
};

export default function Index(props: { posts: [Post] }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cogtive</title>
        <meta name="Cogtive" content="We Boost Your Factory" />
      </Head>
      <Flex flexDir="column" bg="#303030" align="center" w="100%">
        <Header language="en" home bg="#303030" />
        <Hero
          imageSrc="/image.png"
          title="We Boost Your Factory"
          subtitle="COGTIVE is a SaaS solution pushing the boundaries of productivity in the manufacturing industry, changing the way leadership overview the factory floor, enhances production efficiency and impacts business with real results."
          cta="Talk to an expert"
          mt={-55}
          buttonColor="#FFF"
          onClick={() =>
            router.push(
              "https://share.hsforms.com/1DKUEkuOlTuWXOpuXddZl_wdfrsv"
            )
          }
        />
        <Disclaimer language="en" />
        <Hero
          bg="#303030"
          imageSrc="/tv.png"
          title="All the KPIs in real time."
          subtitle="In just a click you can see precise factory floor indicators with our features."
          secondSubtitle="Focused on data with real time feedback for production line operators and managers, COGTIVE is a solution for production tracking with IoT, App or Cameras working together to collect data."
          thirdSubtitle="All this data has a cloud integration providing your team a digital twin view of the productive process and how much potential can be explored."
          imageRight={-150}
          imageMobile="contained"
          cta="See all features"
          onClick={() =>
            router.push(
              "https://share.hsforms.com/1DKUEkuOlTuWXOpuXddZl_wdfrsv"
            )
          }
          buttonColor="#FFF"
          outlined
          imageWidth={965.82}
          imageHeight={1117.75}
        />
        <Hero
          imageSrc="/outstanding.png"
          title="Outstanding"
          secondTitle="data collection"
          subtitle="We worked hard to make your team work easily."
          secondSubtitle="Fast implementation and simple collect data to digitalize your factory in a snap."
          imageRight={-150}
          buttonColor="#FFF"
          imageMobile="contained"
          cta="Schedule a call"
          onClick={() =>
            router.push(
              "https://share.hsforms.com/1DKUEkuOlTuWXOpuXddZl_wdfrsv"
            )
          }
          imageWidth={1488.43}
          imageHeight={879.03}
        />
        <Hero
          bg="#303030"
          imageSrc="/macbook.png"
          title="Factory Digital Twin"
          subtitle="This is the Flow View Kanban, a feature that provides your team a clear digital twin of the productive process and how much potential can be explored in the factory."
          secondSubtitle="Follow the processes using the stages to visualize what batch is running and the waiting ones."
          imageMobile="contained"
          cta="inside the system"
          onClick={() =>
            router.push(
              "https://share.hsforms.com/1DKUEkuOlTuWXOpuXddZl_wdfrsv"
            )
          }
          buttonColor="#FFF"
          imageRight={-140}
          imageWidth={1538.14}
          imageHeight={942.8}
          outlined
          equipmentModule
        />
        <Hero
          imageSrc="/devices.png"
          title="Event notification on your phone"
          subtitle="You choose what kind of notification someone needs to receive."
          secondSubtitle="Event notifications is a powerful feature that allows people to keep track of a certain task during the shifts."
          imageMobile="overflowed"
          buttonColor="#FFF"
          mt={-280}
          imageRight={-270}
          imageWidth={502.56 / 1.3}
          imageHeight={750 / 1.3}
          outlined
          notifications
          onClick={() =>
            router.push(
              "https://share.hsforms.com/1DKUEkuOlTuWXOpuXddZl_wdfrsv"
            )
          }
        />
        <Benefits
          language="en"
          title="Benefits"
          subtitle="Simple and fast implementation to release your industry's true potential."
        />
        <DisclaimerAlt
          title="Industry 4.0 and Lean Manufacturing Philosophy"
          subtitle="Our team has a wide know-how on the manufacturing industry with more than 25 years of expertise developing unusual solutions."
          cta="more about us"
        />
        <Slider language="en" />
        <Posts language="en" posts={props.posts} />
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
    const data = await axios.get(
      "http://localhost:3001/posts"
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
