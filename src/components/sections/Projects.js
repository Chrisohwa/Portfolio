import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Skeleton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectLayout from "../Layouts/ProjectLayout";
import { useTab } from "../../store/tabContext"; // import context hook
import { frontEnd, dataAnalysis } from "../common/constant";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);
console.log(dataAnalysis, frontEnd);

const ProjectCard = ({ image, title, description, technologies }) => {
  const bg = useColorModeValue("white", "gray.700");
  const hoverBg = useColorModeValue("gray.50", "gray.600");

  return (
    <MotionBox
      bg={bg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      whileHover={{ translateY: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Box h="200px" overflow="hidden">
        <Skeleton isLoaded={true} width="100%" height="100%">
          <Box
            as="img"
            src={image}
            alt={`Screenshot of ${title}`}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Skeleton>
      </Box>
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        <Box display="flex" flexWrap="wrap">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              mr={2}
              mb={2}
              colorScheme="primary"
              variant="subtle"
            >
              {tech}
            </Badge>
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
};

const FeProjects = () => (
  <MotionSimpleGrid
    columns={{ base: 1, md: 2, lg: 3 }}
    spacing={8}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {frontEnd.map(({ image, title, description, technologies, id }) => (
      <ProjectCard
        key={id}
        image={image}
        title={title}
        description={description}
        technologies={technologies}
      />
    ))}
  </MotionSimpleGrid>
);

const DaProjects = () => (
  <MotionBox
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <MotionSimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={8}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {dataAnalysis.map(({ image, title, description, technologies, id }) => (
        <ProjectCard
          key={id}
          image={image}
          title={title}
          description={description}
          technologies={technologies}
        />
      ))}
    </MotionSimpleGrid>
  </MotionBox>
);

const Projects = () => {
  const { tab } = useTab(); // 🔄 use context
  const color = useColorModeValue("gray.800", "white");
  console.log(tab);
  return (
    <Box id="projects" py={20} px={4} bg="gray.50" color={color}>
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
            My Projects
          </Heading>
          <Text maxW="2xl" mx="auto">
            Here are some of the projects I've worked on recently.
          </Text>
        </MotionBox>

        <ProjectLayout>
          {tab === 1 && <FeProjects projects={frontEnd} />}
          {tab === 2 && <DaProjects />}
          {![1, 2].includes(tab) && (
            <Box textAlign="center" py={10}>
              <Text>No projects to display for this tab</Text>
            </Box>
          )}
        </ProjectLayout>
      </Box>
    </Box>
  );
};

export default Projects;
