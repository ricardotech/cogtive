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
        <Header language="pt" home bg="#303030" />
        <Hero
          imageSrc="/image.png"
          title="We Boost Your Factory"
          subtitle="A COGTIVE é um SaaS (Software as a Service) que está expandindo o potencial da produtividade na indústria de manufatura, mudando a maneira como as lideranças enxergam o chão de fábrica, aumentando a eficiência produtiva e impactando resultados de negócios."
          cta="Fale com um especialista"
          mt={-55}
          buttonColor="#FFF"
          onClick={() =>
            router.push(
              "https://share.hsforms.com/1DKUEkuOlTuWXOpuXddZl_wdfrsv"
            )
          }
        />
        <Disclaimer language="pt" />
        <Hero
          bg="#303030"
          imageSrc="/tv.png"
          title="Todos os KPIs em tempo real."
          subtitle="Em apenas um clique, acesse indicadores precisos do chão de fábrica com nossas funcionalidades."
          secondSubtitle="Com foco em fornecer informações em tempo real para gerentes de produção e operadores de linha, a COGTIVE é uma solução para acompanhamento de todo o processo fabril com IoT, App ou câmeras trabalhando simultaneamente para a coleta de dados."
          thirdSubtitle="Todos esses dados possuem integração com a nuvem, proporcionando ao seu time um Digital Twin (sua fábrica digitalizada), que demonstrará o potencial a ser explorado."
          imageRight={-150}
          imageMobile="contained"
          cta="veja nossas funcionalidades"
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
          title="coleta de dados"
          secondTitle="Rápida e Fácil"
          subtitle="Nosso time desenvolveu uma coleta de dados inovadora, com implementação simples e rápida
          para digitalizar sua fábrica em um piscar de olhos."
          imageRight={-150}
          buttonColor="#FFF"
          imageMobile="contained"
          cta="Agende uma reunião"
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
          title="Fábrica Virtualizada"
          subtitle="Esse é o Flow View Kanban, capaz de oferecer aos gestores fácil visualização do que ocorre na fábrica para tomadas de decisão, auxiliando no alcance de resultados mais rápidos."
          secondSubtitle="Acompanhe todos os processos por meio dos estágios e saiba quais lotes estão em produção ou em espera."
          imageMobile="contained"
          cta="conheça o sistema"
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
          title="Notificação de eventos no seu celular"
          subtitle="Você escolhe que tipo de notificação alguém precisa receber."
          secondSubtitle="As notificações de eventos são um recurso poderoso que permite que as pessoas acompanhem uma determinada tarefa durante os turnos."
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
          language="pt"
          title="Benefícios"
          subtitle="Implementação simples e rápida para liberar o verdadeiro potencial do seu setor."
        />
        <DisclaimerAlt
          title="Indústria 4.0 e filosofia de manufatura enxuta"
          subtitle="Nossa equipe possui um amplo know-how na indústria de manufatura com mais de 25 anos de experiência desenvolvendo soluções incomuns."
          cta="saiba mais sobre nossa empresa"
        />
        <Slider language="pt" />
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
    const data = await axios.get(
      "https://237a-2804-14c-3f89-8b76-c5f0-57a4-98fb-16f9.sa.ngrok.io/posts"
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
