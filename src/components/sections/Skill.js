// components/Skills.jsx
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Chakra UI", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Bootstrap", level: 75 },
  { name: "SPSS Statistics", level: 70 },
  { name: "SQL", level: 70 },
  { name: "Microsoft Power Tools", level: 70 },
  { name: "Python", level: 70 },
  { name: "Power BI", level: 70 },
  { name: "Tableau", level: 70 },
  { name: "Excel", level: 70 },
];


const SkillCard = ({ skill }) => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <MotionBox
      p={6}
      bg={bg}
      borderRadius="lg"
      boxShadow="md"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Text fontWeight="bold" mb={2}>
        {skill.name}
      </Text>
      {/* <Box h="8px" bg="gray.200" borderRadius="full" overflow="hidden">
        <MotionBox
          h="100%"
          bg={progressBg}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </Box>
      <Text mt={2} textAlign="right" fontSize="sm" color="gray.500">
        {skill.level}%
      </Text> */}
    </MotionBox>
  );
};

const Skill = () => {
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box id="skills" py={20} px={4} bg="white" color={color}>
      <Box maxW="6xl" mx="auto">
        <MotionBox
          textAlign="center"
          mb={12}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="xl" mb={4}>
            My Skills
          </Heading>
          <Text maxW="2xl" mx="auto">
            Here are the technologies and skills I've been working with
            recently.
          </Text>
        </MotionBox>

        <MotionSimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </MotionSimpleGrid>
      </Box>
    </Box>
  );
};

export default Skill;
