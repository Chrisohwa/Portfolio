// components/Footer.jsx
import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const Footer = () => {
  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("white", "gray.200");

  return (
    <MotionBox
      as="footer"
      bg={bg}
      color={color}
      py={10}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Box maxW="6xl" mx="auto" px={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Text mb={{ base: 4, md: 0 }}>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </Text>

          <Flex gap={4}>
            <MotionIconButton
              as="a"
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color={color}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            />
            <MotionIconButton
              as="a"
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color={color}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            />
            <MotionIconButton
              as="a"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color={color}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            />
          </Flex>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default Footer;
