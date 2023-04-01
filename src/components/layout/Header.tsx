import { Box } from "@chakra-ui/react";
import { NavButtons } from "../navigation/NavButtons";

export const Header = () => {
  return (
    <Box as="header" w="full">
      <nav>
        <NavButtons />
      </nav>
    </Box>
  );
};
