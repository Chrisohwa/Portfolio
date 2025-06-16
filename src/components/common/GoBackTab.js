import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const GoBackTab = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="fit-content"
      py={2}
      mb={3}
      color="#242628"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Flex
        align="center"
        fontWeight="500"
        lineHeight="100%"
        cursor="pointer"
        gap="8px"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft size={20} />
        Go Back
      </Flex>
    </Box>
  );
};

export default GoBackTab;
