import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" bg="white" p={4} boxShadow="md">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" color="red.500">Stag Inc. Robotics</Heading>
        </Flex>
      </Box>
      <VStack spacing={4} mt={8}>
        <Text fontSize="2xl">Welcome to Stag Inc. Robotics</Text>
        <Text>Innovating the future, one robot at a time.</Text>
      </VStack>
    </Container>
  );
};

export default Index;