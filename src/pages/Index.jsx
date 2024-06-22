import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" bg="white" p={4} boxShadow="md" position="fixed" top="0" left="0" right="0" zIndex="1000">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Box bg="gold" p={2} borderRadius="full">
              <Image src="/images/logo.png" alt="Stag Inc. Robotics Logo" boxSize="40px" />
            </Box>
            <Heading as="h1" size="lg" color="gold" ml={2}>Stag Inc. Robotics</Heading>
          </Flex>
          <Flex>
            <Link href="#" color="gold" mx={2}>Products</Link>
            <Link href="#" color="gold" mx={2}>Services</Link>
            <Link href="#" color="gold" mx={2}>Company</Link>
            <Link href="#" color="gold" mx={2}>Get Started</Link>
            <Link href="#" color="gold" mx={2}>KhazanaPay</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={4} mt={8} pt={16}>
        <Text fontSize="2xl">Welcome to Stag Inc. Robotics</Text>
        <Text>Innovating the future, one robot at a time.</Text>
      </VStack>
    </Container>
  );
};

export default Index;