import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box width="100%" bg="gray.800" p={4} boxShadow="md" position="fixed" top="0" left="0" right="0" zIndex="1000">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg" color="white">Stag Inc. Robotics</Heading>
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