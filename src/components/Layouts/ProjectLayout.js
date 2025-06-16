import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ProjectTabs } from "../common/constant";
import { useTab } from "../../store/tabContext"; // adjust the import path

const ProjectLayout = ({ children, title }) => {
  const { tab, setTab } = useTab(); // using context

  const handleTabChange = (newTab) => {
    setTab(newTab); // update via context
  };
console.log(tab)
  return (
    <Box>
      <Flex
        borderBottom="4px solid #E2E5DC"
        w="full"
        align="center"
        justifyContent="center"
        gap="30px"
        pb="10px"
      >
        {ProjectTabs.map((item, i) => (
          <Box
            key={i}
            bg={tab === item.value ? "#2d3748" : "#F1F8FB"}
            color={tab === item.value ? "#ffffff" : "#2d3748"}
            py="11px"
            fontSize="12px"
            cursor="pointer"
            fontWeight={600}
            px="15px"
            onClick={() => handleTabChange(item.value)}
            _hover={{ color: "#080761" }}
            transition=".3s ease-in-out"
            borderBottom={tab === item.value ? "2px solid #080761" : "none"}
            borderRadius="6px"
          >
            {item.label}
          </Box>
        ))}
      </Flex>

      <Box mt="50px">{children}</Box>
    </Box>
  );
};

export default ProjectLayout;
