import React, { useState } from "react";

import { newstyle, smallNewstyle } from "../../styles";

import {
  Box,
  ResponsiveContext,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Image,
  Paragraph,
} from "grommet";
import news1 from "./news1.jpeg";

import Roll from "react-reveal/Roll";
import { Up, Down, Favorite, ShareOption } from "grommet-icons";

export const NewsDashboard = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const More = ({ ...rest }) => {
    const Icon = open ? Up : Down;
    return <Button icon={<Icon color="magenta" />} {...rest}></Button>;
  };

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <>
              <Roll left delay={200}>
                <Box pad={{ vertical: "xlarge" }} align="center" round="xsmall">
                  <Card elevation="xlarge" style={smallNewstyle} width="large">
                    <CardBody overflow="auto">
                      <Image fit="cover" src={news1} alt="black friday" />
                    </CardBody>
                    <Box pad={{ horizontal: "medium" }}>
                      <Heading level="1" margin={{ vertical: "medium" }}>
                        Black Friday!
                      </Heading>
                      <Paragraph margin={{ top: "none" }}>
                        First Turkey, Then Great Deals. Black Friday is the day
                        after the American holiday of Thanksgiving, which is
                        celebrated on the fourth Thursday of November. Because
                        it is a holiday in the United States, it has long been a
                        popular day for consumers to start shopping for
                        Christmas.
                      </Paragraph>
                    </Box>
                    <CardFooter>
                      <Box direction="row" align="center" gap="small">
                        <Button
                          icon={
                            <Favorite
                              color={favorite ? "magenta" : "#601cff"}
                            />
                          }
                          onClick={() => {
                            setFavorite(!favorite);
                          }}
                        />
                        <Button icon={<ShareOption color="magenta" />} />
                      </Box>
                      <More onClick={() => setOpen(!open)} />
                    </CardFooter>
                    <Collapsible open={open}>
                      <Paragraph margin="medium">
                        Throughout history, Black Friday evolved from simply the
                        day after Thanksgiving to one known for deep discounts
                        and the start of the holiday shopping season.The best
                        Black Friday deals are, surprisingly, not on Black
                        Friday. Many retailers, including Amazon, offer sales
                        earlier and earlier, upstaging Black Friday itself. The
                        competition this year is so fierce, stores are
                        innovating new ways to get your dollar. Did you know
                        about that?
                      </Paragraph>
                    </Collapsible>
                  </Card>
                </Box>
              </Roll>
              <Roll right delay={200}>
                <Box pad={{ vertical: "xlarge" }} align="center" round="xsmall">
                  <Card elevation="xlarge" width="large" style={smallNewstyle}>
                    <CardBody height="410px" overflow="auto">
                      <Image fit="cover" src={news1} alt="black friday" />
                    </CardBody>
                    <Box pad={{ horizontal: "medium" }}>
                      <Heading level="1" margin={{ vertical: "medium" }}>
                        Black Friday!
                      </Heading>
                      <Paragraph margin={{ top: "none" }}>
                        First Turkey, Then Great Deals. Black Friday is the day
                        after the American holiday of Thanksgiving, which is
                        celebrated on the fourth Thursday of November. Because
                        it is a holiday in the United States, it has long been a
                        popular day for consumers to start shopping for
                        Christmas.
                      </Paragraph>
                    </Box>
                    <CardFooter>
                      <Box direction="row" align="center" gap="small">
                        <Button
                          icon={
                            <Favorite
                              color={favorite ? "magenta" : "#601cff"}
                            />
                          }
                          onClick={() => {
                            setFavorite(!favorite);
                          }}
                        />
                        <Button icon={<ShareOption color="magenta" />} />
                      </Box>
                      <More onClick={() => setOpen2(!open2)} />
                    </CardFooter>
                    <Collapsible open={open2}>
                      <Paragraph margin="medium">
                        Throughout history, Black Friday evolved from simply the
                        day after Thanksgiving to one known for deep discounts
                        and the start of the holiday shopping season.The best
                        Black Friday deals are, surprisingly, not on Black
                        Friday. Many retailers, including Amazon, offer sales
                        earlier and earlier, upstaging Black Friday itself. The
                        competition this year is so fierce, stores are
                        innovating new ways to get your dollar. Did you know
                        about that?
                      </Paragraph>
                    </Collapsible>
                  </Card>
                </Box>
              </Roll>
            </>
          ) : (
            <>
              <Box direction="row">
                <Roll left delay={200}>
                  <Box pad="xlarge" align="start" round="xsmall">
                    <Card elevation="xlarge" width="large" style={newstyle}>
                      <CardBody height="410px" overflow="auto">
                        <Image fit="cover" src={news1} alt="black friday" />
                      </CardBody>
                      <Box pad={{ horizontal: "medium" }}>
                        <Heading level="1" margin={{ vertical: "medium" }}>
                          Black Friday!
                        </Heading>
                        <Paragraph margin={{ top: "none" }}>
                          First Turkey, Then Great Deals. Black Friday is the
                          day after the American holiday of Thanksgiving, which
                          is celebrated on the fourth Thursday of November.
                          Because it is a holiday in the United States, it has
                          long been a popular day for consumers to start
                          shopping for Christmas.
                        </Paragraph>
                      </Box>
                      <CardFooter>
                        <Box direction="row" align="center" gap="small">
                          <Button
                            icon={
                              <Favorite
                                color={favorite ? "magenta" : "#601cff"}
                              />
                            }
                            onClick={() => {
                              setFavorite(!favorite);
                            }}
                          />
                          <Button icon={<ShareOption color="magenta" />} />
                        </Box>
                        <More onClick={() => setOpen(!open)} />
                      </CardFooter>
                      <Collapsible open={open}>
                        <Paragraph margin="medium">
                          Throughout history, Black Friday evolved from simply
                          the day after Thanksgiving to one known for deep
                          discounts and the start of the holiday shopping
                          season.The best Black Friday deals are, surprisingly,
                          not on Black Friday. Many retailers, including Amazon,
                          offer sales earlier and earlier, upstaging Black
                          Friday itself. The competition this year is so fierce,
                          stores are innovating new ways to get your dollar. Did
                          you know about that?
                        </Paragraph>
                      </Collapsible>
                    </Card>
                  </Box>
                </Roll>
                <Roll right delay={200}>
                  <Box pad="xlarge" align="start" round="xsmall">
                    <Card elevation="xlarge" width="large" style={newstyle}>
                      <CardBody height="410px" overflow="auto">
                        <Image fit="cover" src={news1} alt="black friday" />
                      </CardBody>
                      <Box pad={{ horizontal: "medium" }}>
                        <Heading level="1" margin={{ vertical: "medium" }}>
                          Black Friday!
                        </Heading>
                        <Paragraph margin={{ top: "none" }}>
                          First Turkey, Then Great Deals. Black Friday is the
                          day after the American holiday of Thanksgiving, which
                          is celebrated on the fourth Thursday of November.
                          Because it is a holiday in the United States, it has
                          long been a popular day for consumers to start
                          shopping for Christmas.
                        </Paragraph>
                      </Box>
                      <CardFooter>
                        <Box direction="row" align="center" gap="small">
                          <Button
                            icon={
                              <Favorite
                                color={favorite ? "magenta" : "#601cff"}
                              />
                            }
                            onClick={() => {
                              setFavorite(!favorite);
                            }}
                          />
                          <Button icon={<ShareOption color="magenta" />} />
                        </Box>
                        <More onClick={() => setOpen2(!open2)} />
                      </CardFooter>
                      <Collapsible open={open2}>
                        <Paragraph margin="medium">
                          Throughout history, Black Friday evolved from simply
                          the day after Thanksgiving to one known for deep
                          discounts and the start of the holiday shopping
                          season.The best Black Friday deals are, surprisingly,
                          not on Black Friday. Many retailers, including Amazon,
                          offer sales earlier and earlier, upstaging Black
                          Friday itself. The competition this year is so fierce,
                          stores are innovating new ways to get your dollar. Did
                          you know about that?
                        </Paragraph>
                      </Collapsible>
                    </Card>
                  </Box>
                </Roll>
              </Box>
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};
