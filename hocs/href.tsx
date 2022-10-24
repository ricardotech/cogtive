import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Href({
  title = "",
  href = "",
  last = false,
  active = false,
  drawer = false,
}: {
  title: string;
  href: string;
  last?: boolean;
  active?: boolean;
  drawer?: boolean;
}) {
  const router = useRouter();

  return (
    <Text
      onClick={() => {
        router.push(`${href}`)
      }}
      fontFamily="Work Sans"
      fontSize={[15, 16, 17, 18]}
      color={active ? "#FFF" : "#DADADA"}
      cursor="pointer"
      mr={last ? "0" : "3"}
      mb={drawer ? "3" : "0"}
      fontWeight={active ? "bold" : "normal"}
    >
      {title}
    </Text>
  );
}
