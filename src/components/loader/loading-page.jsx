import React, { useEffect, useState } from "react";

import { Box, Text, Spinner } from "grommet";
import { loadingStyle } from "../../styles";

const gradient =
  "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";

export const Loading = () => {
  const [loadingValue, setLoadingValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loadingValue < 100) setLoadingValue(loadingValue + 0.02);
    });
    return () => {
      clearTimeout(timer);
    };
  }, [loadingValue]);

  return (
    <Box fill pad="50vh 50vw" style={loadingStyle}>
      <Spinner
        align="center"
        justify="center"
        background={gradient}
        size="xlarge"
        pad="10vh"
        round="full"
        animation={[
          { type: "fadeIn", duration: 1900, size: "xlarge" },
          { type: "pulse", duration: 1450, size: "xlarge" },
        ]}
        border={false}
      >
        <Text
          pad="xlarge"
          round="full"
          size="xlarge"
          alignSelf="center"
          color="magenta"
        >
          Loading...
        </Text>
      </Spinner>
    </Box>
  );
};

Loading.parameters = {
  chromatic: { disable: true },
};
