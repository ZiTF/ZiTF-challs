import { Heading, Stack, Box } from "@chakra-ui/react";

const Secret = (props) => {
  return (
    <Stack
      style={{ minHeight: "100vh" }}
      background="url(/images/monkey-money-tr-3.jpg)"
    >
    <div style={{margin:"auto"}}>
      <Box
        {...props}
        p={10}
        w="max"
        margin="auto"
        backgroundColor="green.100"
        boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
        borderRadius="10px"
      >
        <Heading  textAlign="center">
          ZITF{"{"}3e9e04b5b546706f0fe9291ba58a3a9f{"}"}{" "}
        </Heading>
      </Box>

      <Box
        marginTop="10"
        padding="5"
        backgroundColor="red.100"
        boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
        borderRadius="10px"
      >
        <Heading textAlign="center" variant="h6">
          {"https://www.youtube.com/watch?v=4iIFK9sZN_E"}
        </Heading>
      </Box>
    </div>
    </Stack>
  );
};

export default Secret;
