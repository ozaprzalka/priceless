import React from "react";
import {
  Grommet,
  Box,
  Image,
  Heading,
  Carousel,
  ResponsiveContext,
} from "grommet";
import { boxStyle, customFocus } from "../../styles";
import partner1 from "./partner1.jpeg";
import partner2 from "./partner2.jpeg";
import partner3 from "./partner3.jpeg";

import { Gift, Shop } from "grommet-icons";

export const PartnersPage = () => {
  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Grommet theme={customFocus}>
              <Box style={boxStyle}>
                <Box>
                  <Heading
                    level="2"
                    textAlign="center"
                    margin={{ vertical: "medium", horizontal: "large" }}
                  >
                    <Gift color="white" /> Our partners prepared many discount
                    codes for every user {""}
                  </Heading>
                  <Heading
                    level="3"
                    textAlign="center"
                    margin={{ vertical: "small", horizontal: "large" }}
                  >
                    For sure you can find something for yourself {""}
                    <Shop color="white" />
                  </Heading>
                  <Heading
                    level="4"
                    textAlign="center"
                    margin={{ vertical: "small", horizontal: "large" }}
                  >
                    Main partners: {""}
                  </Heading>
                </Box>
                <Box
                  width="320"
                  height="320"
                  align="center"
                  border={{ color: "brand", size: "medium" }}
                  margin={{ vertical: "xlarge", horizontal: "large" }}
                  style={{ boxShadow: "2px 2px 17px 10px magenta" }}
                >
                  <Carousel fill initialChild={0} play={2800}>
                    <Box>
                      <Image fill src={partner1} alt="Partner1" />
                    </Box>
                    <Box>
                      <Image fill src={partner2} alt="Partner1" />
                    </Box>
                    <Box>
                      <Image fill src={partner3} alt="Partner1" />
                    </Box>
                  </Carousel>
                </Box>
              </Box>
            </Grommet>
          ) : (
            <Grommet theme={customFocus}>
              <Box
                fill
                align="center"
                justify="start"
                style={boxStyle}
                pad="xsmall"
              >
                <Box>
                  <Heading
                    level="2"
                    textAlign="center"
                    margin={{ vertical: "medium" }}
                    fill
                  >
                    <Gift size="large" color="white" /> Our partners prepared
                    many discount codes for every user {""}
                  </Heading>
                  <Heading
                    level="2"
                    textAlign="center"
                    margin={{ vertical: "small" }}
                    fill
                  >
                    For sure you can find something for yourself {""}
                    <Shop color="white" />
                  </Heading>
                  <Heading
                    level="1"
                    textAlign="center"
                    margin={{
                      vertical: "small",
                      horizontal: "large",
                      bottom: "medium",
                    }}
                  >
                    Main partners: {""}
                  </Heading>
                </Box>
                <Box
                  height="large"
                  width="1000px"
                  align="center"
                  border={{ color: "brand", size: "medium" }}
                  style={{ boxShadow: "2px 2px 17px 10px magenta" }}
                >
                  <Carousel fill initialChild={1} play={2800}>
                    <Box>
                      <Image
                        fill
                        style={{ minWidth: "1000px" }}
                        src={partner1}
                        alt="Partner 1"
                      />
                    </Box>
                    <Box>
                      <Image
                        fill
                        style={{ minWidth: "1000px" }}
                        src={partner2}
                        alt="Partner 2"
                      />
                    </Box>
                    <Box>
                      <Image
                        fill
                        style={{ minWidth: "1000px" }}
                        src={partner3}
                        alt="Partner 3"
                      />
                    </Box>
                  </Carousel>
                </Box>
              </Box>
            </Grommet>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};
