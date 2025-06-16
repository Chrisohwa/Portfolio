import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

const NoData = () => {
  return (
    <Flex
      h="40vh"
      justifyContent="center"
      flexDir="column"
      align="center"
      fontWeight={600}
    >
      <Image src="/assets/no-data.png" w="150px" h="150px" />

      <Text
        my="18px"
        color="#194A44"
        lineHeight="100%"
        fontSize={{ base: "16px", md: "20px" }}
      >
        No Data Found
      </Text>
      <Text
        color="#010E04"
        fontSize={{ base: "14px", md: "16px" }}
        lineHeight="100%"
      >
        Your search didn't match any results.
      </Text>
    </Flex>
  );
};

export default NoData;
