// components/Contact.jsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Contacts = () => {
  const bg = useColorModeValue("white", "gray.700");
  const inputBg = useColorModeValue("gray.100", "gray.600");

  return (
    <Box id="contact" py={20} px={4} bg={bg}>
      <Box maxW="2xl" mx="auto">
        <MotionBox
          textAlign="center"
          mb={12}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="xl" mb={4}>
            Get In Touch
          </Heading>
          <Text>
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form
            action="https://formsubmit.co/obakpororo.ohwavworua@gmail.com"
            method="POST"
          >
            <Flex direction="column" gap={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" bg={inputBg} border="none" />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" bg={inputBg} border="none" />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea bg={inputBg} name="message" border="none" rows={6} />
              </FormControl>
              <MotionButton
                colorScheme="primary"
                size="lg"
                alignSelf="flex-end"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Send Message
              </MotionButton>
            </Flex>
          </form>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Contacts;
