import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroMart</Heading>
        <Text fontSize="xl">Your one-stop shop for the latest electronics</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/electronics-banner.jpg" alt="Electronics Banner" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6}>Shop Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;