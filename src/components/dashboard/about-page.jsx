import React from "react";
import RegisterPopup from "./popup";
import {
  Box,
  Text,
  Paragraph,
  Heading,
  Carousel,
  Image,
  ResponsiveContext,
} from "grommet";
import { boxStyle } from "../../styles";
import promo1 from "./promo1.jpeg";
import promo2 from "./promo2.jpeg";
import promo3 from "./promo3.jpeg";

export const AboutPage = () => {
  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <>
              <Box
                fill
                align="center"
                justify="center"
                style={boxStyle}
                pad="small"
              >
                <Box
                  height={size}
                  width="345px"
                  align="center"
                  border={{ color: "brand", size: "medium" }}
                  style={{ boxShadow: "2px 2px 17px 10px magenta" }}
                >
                  <Carousel fill initialChild={1} play={3000}>
                    <Box fill>
                      <Image fill src={promo1} alt="Promo 1" />
                    </Box>
                    <Box fill>
                      <Image fill src={promo2} alt="Promo 2" />
                    </Box>
                    <Box fill>
                      <Image fill src={promo3} alt="Promo 1" />
                    </Box>
                  </Carousel>
                </Box>
                <Box
                  margin={{ vertical: "xlarge" }}
                  width="345px"
                  border={{ color: "brand", size: "medium" }}
                  style={{
                    boxShadow: "2px 2px 17px 10px magenta",
                    minHeight: "400px",
                  }}
                >
                  <Box pad="small">
                    <Heading level="2" margin={{ vertical: "medium" }}>
                      Do you like saving money?
                    </Heading>
                    <Heading level="3" margin={{ vertical: "small" }}>
                      Well, who doesn’t?
                    </Heading>
                    <Heading level="3" margin={{ vertical: "small" }}>
                      Maybe you are a professional discount hunter?
                    </Heading>
                    <Text textAlign="start" margin={{ vertical: "small" }}>
                      With us, your hunts will always be easier! Register on our
                      website to receive a notification each time price of your
                      dreamed product drops. Follow your favorite stores, sales
                      and campaigns we prepare for you.
                      <Paragraph
                        textAlign="start"
                        margin={{ vertical: "small" }}
                        style={{ maxWidth: "555px" }}
                      >
                        Sounds cool? It is! All you have to do is follow few
                        simple steps:
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        1. Register on our site
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        {" "}
                        2. Copy link to your desired product
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        3. Save your link in our search bar
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        {" "}
                        4. Get a notification from us when price drops.
                      </Paragraph>
                      <Paragraph
                        width="xlarge"
                        margin={{ vertical: "xsmall" }}
                        style={{ maxWidth: "455px" }}
                      >
                        {" "}
                        5. Be happy with your new goods and saved money!
                      </Paragraph>
                    </Text>
                  </Box>
                </Box>
                <Box
                  height={size}
                  width="345px"
                  align="center"
                  border={{ color: "brand", size: "medium" }}
                  style={{ boxShadow: "2px 2px 17px 10px magenta" }}
                >
                  <Carousel fill initialChild={1} play={2800}>
                    <Box fill>
                      <Image fill src={promo2} alt="Promo 2" />
                    </Box>
                    <Box fill>
                      <Image fill src={promo3} alt="Promo 3" />
                    </Box>
                    <Box fill>
                      <Image fill src={promo1} alt="Promo 1" />
                    </Box>
                  </Carousel>
                </Box>
              </Box>
              <RegisterPopup />
            </>
          ) : (
            <>
              <Box
                fill
                align="center"
                justify="center"
                style={boxStyle}
                pad="small"
              >
                <Box
                  height="medium"
                  width="xlarge"
                  align="center"
                  border={{ color: "brand", size: "medium" }}
                  style={{ boxShadow: "2px 2px 17px 10px magenta" }}
                >
                  <Carousel fill initialChild={0} play={3000}>
                    <Box fill>
                      <Image
                        fill
                        style={{ minWidth: "1134px" }}
                        src={promo1}
                        alt="Promo 1"
                      />
                    </Box>
                    <Box fill>
                      <Image
                        fill
                        style={{ minWidth: "1134px" }}
                        src={promo2}
                        alt="Promo 2"
                      />
                    </Box>
                    <Box fill>
                      <Image
                        fill
                        style={{ minWidth: "1134px" }}
                        src={promo3}
                        alt="Promo 3"
                      />
                    </Box>
                  </Carousel>
                </Box>
                <Box
                  margin={{ vertical: "xlarge" }}
                  width="large"
                  border={{ color: "brand", size: "medium" }}
                  style={{
                    boxShadow: "2px 2px 17px 10px magenta",
                    minHeight: "400px",
                  }}
                >
                  <Box pad="small">
                    <Heading level="2" margin={{ vertical: "medium" }}>
                      Do you like saving money?
                    </Heading>
                    <Heading level="3" margin={{ vertical: "small" }}>
                      Well, who doesn’t?
                    </Heading>
                    <Heading level="3" margin={{ vertical: "small" }}>
                      Maybe you are a professional discount hunter?
                    </Heading>
                    <Text textAlign="start" margin={{ vertical: "small" }}>
                      With us, your hunts will always be easier! Register on our
                      website to receive a notification each time price of your
                      dreamed product drops. Follow your favorite stores, sales
                      and campaigns we prepare for you.
                      <Paragraph
                        textAlign="start"
                        margin={{ vertical: "small" }}
                        style={{ maxWidth: "555px" }}
                      >
                        Sounds cool? It is! All you have to do is follow few
                        simple steps:
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        1. Register on our site
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        {" "}
                        2. Copy link to your desired product
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        3. Save your link in our search bar
                      </Paragraph>
                      <Paragraph margin={{ vertical: "xsmall" }}>
                        {" "}
                        4. Get a notification from us when price drops.
                      </Paragraph>
                      <Paragraph
                        width="xlarge"
                        margin={{ vertical: "xsmall" }}
                        style={{ maxWidth: "455px" }}
                      >
                        {" "}
                        5. Be happy with your new goods and saved money!
                      </Paragraph>
                    </Text>
                  </Box>
                </Box>
                <Box
                  height="medium"
                  width="xlarge"
                  align="center"
                  border={{ color: "brand", size: "medium" }}
                  style={{ boxShadow: "2px 2px 17px 10px magenta" }}
                >
                  <Carousel fill initialChild={1} play={3000}>
                    <Box fill>
                      <Image
                        fill
                        style={{ minWidth: "1134px" }}
                        src={promo2}
                        alt="Promo 2"
                      />
                    </Box>
                    <Box fill>
                      <Image
                        fill
                        style={{ minWidth: "1134px" }}
                        src={promo3}
                        alt="Promo 3"
                      />
                    </Box>
                    <Box fill>
                      <Image
                        fill
                        style={{ minWidth: "1134px" }}
                        src={promo1}
                        alt="Promo 1"
                      />
                    </Box>
                  </Carousel>
                </Box>
              </Box>
              <RegisterPopup />
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};
