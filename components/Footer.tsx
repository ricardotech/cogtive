import React, { FunctionComponent } from "react";

import Image from "next/image";

import useMediaQuery from "../utils/mediaQuery";

import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { useRouter } from "next/router";

function Footer({ language = "pt" }) {
  const router = useRouter();
  const { mobile, tablet, desktop } = useMediaQuery();

  function Text({ value = "" }) {
    return (
      <p
        style={{
          fontFamily: "Work Sans",
          color: "#8E8E8E",
          fontSize: "1rem",
        }}
      >
        {value}
      </p>
    );
  }

  function Href({ value = "", href = "" }) {
    return (
      <a
        style={{
          fontFamily: "Work Sans",
          color: "#ACACAC",
          fontSize: 18,
        }}
        href={href}
      >
        {value}
      </a>
    );
  }

  return (
    <>
      {!desktop ? (
        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: !desktop ? "column" : "row",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#262626",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontWeight: "bold",
              }}
            >
              <Href value="About us" />
              <Href value="Solutions" />
              <Href value="Blog" />
              <Href value="Inside the Platform" />
            </div>
            <div
              style={{
                height: "auto",
                display: "flex",
              }}
            >
              <BsInstagram
                cursor="pointer"
                onClick={() =>
                  router.push("https://www.instagram.com/cogtive/")
                }
                color="#FFF"
                fontSize={30}
                style={{
                  marginRight: 20,
                }}
              />
              <BsLinkedin
                cursor="pointer"
                onClick={() =>
                  router.push("https://www.linkedin.com/company/cogtive")
                }
                color="#FFF"
                fontSize={30}
                style={{
                  marginRight: 20,
                }}
              />
              <BsYoutube
                cursor="pointer"
                onClick={() =>
                  router.push(
                    "https://www.youtube.com/watch?v=ArZUcaueOwo&ab_channel=Clara"
                  )
                }
                color="#FFF"
                fontSize={30}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: 50,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Text value="Alameda Vicente Pinzon, 54"></Text>
              <Text value="Vila Olimpía, São Paulo, SP"></Text>
              <Text value="CUBO"></Text>
              <Text value="Brazil"></Text>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <div
                style={{
                  marginLeft: 10,
                  width: 194.36 / 1.4,
                  height: 62 / 1.4,
                }}
              >
                <Image src="/selos.png" height="62" width="194.36" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: !desktop ? "column" : "row",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#262626",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "120px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Text value="Alameda Vicente Pinzon, 54"></Text>
              <Text value="Vila Olimpía, São Paulo, SP"></Text>
              <Text value="CUBO"></Text>
              <Text value="Brazil"></Text>
            </div>
            {language === "pt" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontWeight: "bold",
                }}
              >
                <Href value="Sobre nós" />
                <Href value="Soluções" />
                <Href value="Blog" href="/blog" />
                <Href value="Conheça o sistema" />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontWeight: "bold",
                }}
              >
                <Href value="About us" />
                <Href value="Solutions" />
                <Href value="Blog" href="/blog" />
                <Href value="Inside the Platform" />
              </div>
            )}
          </div>
          <div
            style={{
              width: 194.36,
              height: 62,
            }}
          >
            <Image src="/selos.png" height="62" width="194.36" />
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              position: "absolute",
              bottom: "40px",
              right: "40px",
            }}
          >
            <BsInstagram
              cursor="pointer"
              onClick={() => router.push("https://www.instagram.com/cogtive/")}
              color="#FFF"
              fontSize={30}
              style={{
                marginRight: 20,
              }}
            />
            <BsLinkedin
              cursor="pointer"
              onClick={() =>
                router.push("https://www.linkedin.com/company/cogtive")
              }
              color="#FFF"
              fontSize={30}
              style={{
                marginRight: 20,
              }}
            />
            <BsYoutube
              cursor="pointer"
              onClick={() =>
                router.push(
                  "https://www.youtube.com/watch?v=ArZUcaueOwo&ab_channel=Clara"
                )
              }
              color="#FFF"
              fontSize={30}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
