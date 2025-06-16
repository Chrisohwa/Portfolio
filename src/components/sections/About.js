// components/About.jsx
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { viewResume } from "../../utils/helpers";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const About = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box id="about" pt={24} pb={20} px={4} bg={bg} color={color}>
      <Box maxW="6xl" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <MotionBox
            flex="1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            mr={{ md: 8 }}
            mb={{ base: 8, md: 0 }}
          >
            <Heading as="h2" size="xl" mb={6}>
              About Me
            </Heading>
            <Text fontSize="lg" mb={4}>
              Hi, i am Christopher. <br />A versatile Front-End Developer and
              Data Analyst with seven years of business experience in the
              financial industry, I specialize in building scalable,
              user-friendly, and solution-driven web applications while
              leveraging data-driven insights to optimize business processes..
            </Text>
            <Text fontSize="lg" mb={6}>
              Beyond technical expertise, I excel at translating complex data
              into actionable business insights, bridging the gap between
              analytics and strategic decision-making. My ability to communicate
              findings effectively enables stakeholders to make informed choices
              that drive business growth.
            </Text>
            <MotionButton
              colorScheme="primary"
              size="lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={viewResume}
            >
              View Resume
            </MotionButton>
          </MotionBox>

          <MotionFlex
            flex="1"
            justify="center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box
              borderRadius="full"
              overflow="hidden"
              boxSize={{ base: 250, md: 350 }}
              boxShadow="xl"
            >
              <Image
                src="./selfie.jpeg"
                alt="Profile picture"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          </MotionFlex>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
