import React, { useContext } from "react";
import { AuthContext } from "../../Auth";


import { Box, Text } from "grommet";

const AccountPage = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <Box fill>
        <Text>Something went wrong. Please reload page.</Text>
      </Box>
    );
  }

  return (
        <Box fill align="center" justify="center">
      <Box>
        <Text>your email: {currentUser.email}</Text>
        <Text> your username: {currentUser.displayName}</Text>
        <Text>{console.log(currentUser)}</Text>
      </Box>
    </Box>
   
  );
};

export default AccountPage;
