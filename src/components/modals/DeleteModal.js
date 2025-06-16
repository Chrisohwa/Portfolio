import React from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";
import ModalLayout from "./ModalLayout";
import { TextInput } from "../common/Inputs";

const DeleteModal = ({
  isOpen,
  handleSubmit,
  onClose,
  title,
  subTitle,
  isLoading,
  btnColor = "",
  reason,
  setReason,
  headerColor = "#242628",
}) => {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <Box>
        <Flex justifyContent="center" align="center" flexDir="column">
          <Text
            mb="14px"
            color={headerColor}
            fontWeight={700}
            fontSize="24px"
            lineHeight="100%"
            textTransform="capitalize"
          >
            {title}
          </Text>
          <Text
            color="#646668"
            display={title === "deactivate Client" ? "none" : "flex"}
          >
            {subTitle}
          </Text>

          <Box
            display={title === "deactivate Client" ? "block" : "none"}
            w="full"
          >
            <Text mb="12px" color="#091E42" fontSize="14px" fontWeight={600}>
              Reason?
            </Text>
            <TextInput
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Box>
        </Flex>

        <Flex gap={4} mt={10}>
          <Button
            fontWeight={500}
            onClick={onClose}
            lineHeight="100%"
            w="45%"
            py="17px"
            variant="secondary"
          >
            No
          </Button>

          <Button
            fontWeight={500}
            isLoading={isLoading}
            isDisabled={title === "deactivate Client" ? !reason : false}
            onClick={handleSubmit}
            lineHeight="100%"
            w="55%"
            py="17px"
            bg={
              title.includes("deact") || title.includes("dele")
                ? "#D92D20"
                : btnColor
            }
          >
            Yes
          </Button>
        </Flex>
      </Box>
    </ModalLayout>
  );
};

export default DeleteModal;
