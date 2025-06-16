import React, { forwardRef } from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FileUploader } from "react-drag-drop-files";
import { PiBarcode } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";

const Uploads = forwardRef(
  ({ onClick, name, id, onChange, height, label }, ref) => {
    return (
      <Box>
        <Text
          color="#1B2027"
          fontSize="14px"
          fontWeight={500}
          lineHeight="20px"
        >
          {label}
        </Text>
        <Flex
          border="1px solid #E4E6E8"
          borderRadius="6px"
          h={height}
          flexDir="column"
          align="center"
          justifyContent="center"
          p="10px"
        >
          {name ? (
            <Flex align="center" justify="space-between" w="full">
              <Text fontWeight={500} fontSize="14px" color="#1D2939">
                {name}
              </Text>
              <IconButton
                aria-label="Delete file"
                icon={<FaTrash size="14px" />}
                onClick={onClick}
                variant="ghost"
                colorScheme="red"
                size="sm"
              />
            </Flex>
          ) : (
            <FileUploader
              handleChange={(file) =>
                onChange({ target: { files: [file] } }, { name: id })
              }
              name={id}
            >
              <Flex
                align="center"
                justifyContent="space-between"
                w={{ base: "full", md: "350px" }}
              >
                <Box
                  w="40px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#F3F4F6"
                >
                  <PiBarcode size="20px" color="#5D6B82" />
                </Box>
                <Box>
                  <Text fontWeight={600} fontSize="10px" color="#1D2939">
                    Add Documents
                  </Text>
                  <Text fontSize="8px" fontWeight={400} color="#667085">
                    Add documents such as ID, passport, travel docs, receipts.
                  </Text>
                </Box>
                <Box>
                  <FiChevronRight size="18px" />
                </Box>
              </Flex>
            </FileUploader>
          )}
        </Flex>
      </Box>
    );
  }
);

export default Uploads;
