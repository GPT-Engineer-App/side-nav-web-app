import { Box, Flex, Text, VStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="100%"
      w="60px"
      bg={useColorModeValue("gray.100", "gray.900")}
      boxShadow="lg"
      zIndex="1000"
    >
      <VStack spacing={4} mt={8}>
        <IconButton aria-label="Home" icon={<FaHome />} size="lg" />
        <IconButton aria-label="Profile" icon={<FaUser />} size="lg" />
        <IconButton aria-label="Settings" icon={<FaCog />} size="lg" />
      </VStack>
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Flex
      as="header"
      pos="fixed"
      top="0"
      left="60px"
      right="0"
      h="60px"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      align="center"
      justify="space-between"
      px={4}
      zIndex="1000"
    >
      <Text fontSize="xl" fontWeight="bold">
        My Web App
      </Text>
      <IconButton aria-label="Toggle theme" icon={icon} onClick={toggleColorMode} />
    </Flex>
  );
};

const Index = () => {
  return (
    <Box>
      <Sidebar />
      <Navbar />
      <Box
        ml="60px"
        mt="60px"
        p={4}
        height="calc(100vh - 60px)"
        overflowY="auto"
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <Container centerContent maxW="container.md" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <VStack spacing={4}>
            <Text fontSize="2xl">Welcome to My Web App</Text>
            <Text>This is a generic layout with a sidebar and a navbar.</Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;