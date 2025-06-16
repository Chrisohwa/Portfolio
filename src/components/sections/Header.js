// components/Header.jsx
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  useColorModeValue,
  IconButton,
  useDisclosure,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const NavLink = ({ children, href }) => (
  <MotionLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </MotionLink>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionBox
      as="header"
      position="fixed"
      w="100%"
      zIndex="1000"
      bg={useColorModeValue(
        scrolled ? "white" : "rgba(255, 255, 255, 0.8)",
        scrolled ? "gray.800" : "rgba(26, 32, 44, 0.8)"
      )}
      backdropFilter="blur(10px)"
      boxShadow={scrolled ? "md" : "none"}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box px={4} maxW="6xl" mx="auto">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <MotionBox whileHover={{ scale: 1.05 }}>
            <Heading
              size="md"
              color={useColorModeValue("primary.500", "white")}
            >
              My Portfolio
            </Heading>
          </MotionBox>

          <Flex alignItems={"center"}>
            <Stack
              direction={"row"}
              spacing={7}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <IconButton
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                aria-label="Toggle color mode"
                variant="ghost"
              />
            </Stack>

            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <MotionBox
            pb={4}
            display={{ md: "none" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Stack as={"nav"} spacing={4}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <IconButton
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                aria-label="Toggle color mode"
                variant="ghost"
                w="fit-content"
              />
            </Stack>
          </MotionBox>
        ) : null}
      </Box>
    </MotionBox>
  );
};

export default Header;
