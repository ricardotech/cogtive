import React, { useEffect, useState } from "react";

import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { NextImage } from "../hocs/Image";
import { IoMdClose } from "react-icons/io";

import useMediaQuery from "../utils/mediaQuery";
import Href from "../hocs/href";
import { useRouter } from "next/router";

export default function Header({
  language = "en",
  bg = "#0D162B",
  aboutUs = false,
  home = false,
  solutions = false,
  blog = false,
  contact = false,
}: {
  language: string;
  bg?: string;
  aboutUs?: boolean;
  home?: boolean;
  solutions?: boolean;
  blog?: boolean;
  contact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { mobile, tablet, desktop } = useMediaQuery();

  useEffect(() => {
    if (tablet || desktop) {
      onClose();
      setOpen(false);
    }
  }, [tablet, desktop]);

  return (
    <>
      <Flex
        bg={bg}
        w="100%"
        px={[4, 4, 4, 8]}
        py={[8, 8, 8, 10]}
        justifyContent="space-between"
      >
        {desktop && (
          <Flex cursor="pointer" onClick={() => router.push("/")}>
            <NextImage src="/logo.png" alt="logo" width="209" height="34" />
          </Flex>
        )}
        {tablet && (
          <Flex cursor="pointer" onClick={() => router.push("/")}>
            <NextImage src="/logo.png" alt="logo" width="181" height="29" />
          </Flex>
        )}
        {mobile && (
          <Flex cursor="pointer" onClick={() => router.push("/")}>
            <NextImage src="/logo.png" alt="logo" width="136" height="22" />
          </Flex>
        )}
        {!mobile && (
          <Flex>
            <Href title="Cogtive" active={home} href="/" />
            <Href title="About us" active={aboutUs} href="" />
            <Href title="Solutions" active={solutions} href="" />
            <Href title="Blog" active={blog} href="/blog" />
            <Href title="Contact" active={contact} href="" last />
          </Flex>
        )}
        {mobile && (
          <>
            {open ? (
              <Flex
                style={{
                  zIndex: 999,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 20,
                  width: 30,
                }}
              >
                <IoMdClose
                  cursor="pointer"
                  size={25}
                  onClick={() => {
                    onClose();
                    setOpen(!open);
                  }}
                  color="#FFF"
                />
              </Flex>
            ) : (
              <div
                onClick={() => {
                  setOpen(true);
                  onOpen();
                }}
                style={{
                  cursor: "pointer",
                  height: 20,
                  width: 30,
                }}
              >
                <NextImage src="/header.png" height="20" width="30" />
              </div>
            )}
          </>
        )}
      </Flex>

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
            backgroundColor: bg ? bg : "#0D162B",
            paddingBottom: 30,
          }}
        >
          <Flex
            bg={bg ? bg : "#0D162B"}
            w="100%"
            px={[4, 4, 4, 8]}
            py={[8, 8, 8, 10]}
            justifyContent="space-between"
          >
            {mobile && (
              <NextImage src="/logo.png" alt="logo" width="136" height="22" />
            )}

            {mobile && (
              <>
                {open ? (
                  <Flex
                    style={{
                      zIndex: 999,
                      justifyContent: "center",
                      alignItems: "center",
                      height: 20,
                      width: 30,
                    }}
                  >
                    <IoMdClose
                      cursor="pointer"
                      size={25}
                      onClick={() => {
                        onClose();
                        setOpen(!open);
                      }}
                      color="#FFF"
                    />
                  </Flex>
                ) : (
                  <div
                    onClick={() => {
                      setOpen(true);
                      onOpen();
                    }}
                    style={{
                      cursor: "pointer",
                      height: 20,
                      width: 30,
                    }}
                  >
                    <NextImage src="/header.png" height="20" width="30" />
                  </div>
                )}
              </>
            )}
          </Flex>

          <Flex px="6" flexDir="column">
            <a href="/" />
            <Href title="Cogtive" active={home} href="/" drawer />
            <Href title="About us" active={aboutUs} href="" drawer />
            <Href title="Solutions" active={solutions} href="" drawer />
            <Href title="Blog" active={blog} href="/blog" drawer />
            <Href title="Contact" active={contact} href="" last drawer />
            <Href
              title={language === "en" ? "PT" : "EN"}
              href={language === "en" ? "/" : "/en"}
              last
              drawer
            />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
