import React, { useContext, useState, useCallback } from "react";
// import app from './../../base'
import { AuthContext } from "../../Auth";
// import {database} from "../../base"
// import { formStyle } from "../../styles";
// import { withRouter } from "react-router";

import { Box, Text } from "grommet";

const AccountPage = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <Box>
        <Text>Something went wrong. Please reload page.</Text>
      </Box>
    );
  }

  return (
    <Box fill align="center" justify="center">
      <Text>your email: {currentUser.email}</Text>
      <Text> your username: {currentUser.displayName}</Text>
      <Text>{console.log(currentUser)}</Text>
    </Box>
  );
};

export default AccountPage;
