import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectLayout from "../Layouts/ProjectLayout";
import { useTab } from "../../store/tabContext";
import { frontEnd, dataAnalysis } from "../common/constant";
import { Link } from "@chakra-ui/react";

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const ProjectCard = ({ image, title, description, link }) => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Link
      href={link}
      isExternal
      target="_blank"
      rel="noopener noreferrer"
      _hover={{ textDecoration: "none" }}
    >
      <MotionBox
        bg={bg}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        whileHover={{ translateY: -5 }}
        transition={{ duration: 0.3 }}
        cursor="pointer"
      >
        <Box h="200px" overflow="hidden">
          <Skeleton isLoaded={true} width="100%" height="100%">
            <Box
              as="img"
              src={image}
              alt={`Screenshot of ${title}`}
              w="100%"
              h="auto"
              objectFit="contain"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.05)" }}
              px="10px"
            />
          </Skeleton>
        </Box>
        <Box p={6}>
          <Heading as="h3" size="md" mb={2}>
            {title}
          </Heading>
          <Text mb={1}>{description}</Text>
        </Box>
      </MotionBox>
    </Link>
  );
};

const ProjectGrid = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const hasMore = projects.length > 5;

  return (
    <Box>
      <MotionSimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {displayedProjects.map(({ image, title, description, id, link }) => (
          <ProjectCard
            key={id}
            image={image}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </MotionSimpleGrid>

      {hasMore && (
        <Box textAlign="center" mt={8}>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

const FeProjects = () => <ProjectGrid projects={frontEnd} />;

const DaProjects = () => (
  <MotionBox
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <ProjectGrid projects={dataAnalysis} />
  </MotionBox>
);

const Projects = () => {
  const { tab } = useTab();
  const color = useColorModeValue("gray.800", "white");

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
          {tab === 1 && <FeProjects />}
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
