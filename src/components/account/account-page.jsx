import React, { useContext } from "react";
import { AuthContext } from "../../Auth";
import { boxStyle } from "../../styles";
import { Checkbox, CheckboxSelected } from 'grommet-icons';


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
        <Box fill align="center" justify="center" style={boxStyle}>
      <Box border={{ color: 'brand', size: 'medium' }} pad='xlarge' style={{boxShadow: '2px 2px 17px 10px magenta'}}>
        <Text>email: {currentUser.email}</Text>
        <Text> username: {currentUser.displayName}</Text>
        <Text>{console.log(currentUser)}</Text>
      </Box>
    </Box>
   
  );
};

export default AccountPage;
