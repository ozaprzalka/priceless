import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import {
  cardStyle,
  inputStyle,
  buttonStyle,
  formStyle,
  smallLMemStyle,
  smallCardStyle,
  largeButtonStyle
} from "../../styles";

import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Card,
  CardBody,
  Text,
  InfiniteScroll,
  ResponsiveContext,
  Heading,
} from "grommet";

const input = document.querySelector(".link-input");

const MembersDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  const addLink1 = (e) => {
    e.preventDefault();
    if (link && link !== undefined) {
      database.collection("links").doc(currentUser.uid).set({
        links: link,
      });
    }
  };

  const addLink = (e) => {
    e.preventDefault();
    console.log(link);
    setLinks((links) => [...links, link]);
    console.log(links);
    let savedLink = {
      links: [...links, link],
    };
    database.collection("links").doc(currentUser.uid).set(savedLink);
    input.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLink(e.target.value);
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setLink(e.target.value);
  };

  const getLinks = () => {
    if (currentUser && database.collection("links").doc(currentUser.uid)) {
      let myLinks = database.collection("links").doc(currentUser.uid);
      myLinks.onSnapshot((doc) => {
        console.log("current data", doc.data());
        if (doc.data() !== undefined) {
          console.log("current data", doc.data().links);
          setLinks(doc.data().links);
        }
      });
    } else {
      setLinks("");
    }
  };

  useEffect(() => {
    getLinks();
    return () => links;
  }, []); //eslint-disable-line

  return (
    <>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box
              round="xsmall"
              align="center"
              justify="center"
              style={smallLMemStyle}
              onLoad={getLinks}
            >
              <Card width="large" style={smallCardStyle}>
                <CardBody className="card_body" overflow="auto">
                  <Box align="center">
                    <Heading level="1" size="small" margin="10px">
                      Your saved links
                    </Heading>
                    <Form onSubmit={addLink}>
                    <FormField
                        style={inputStyle}
                        value={link}
                        onChange={handleNameChange}
                      >
                        <TextInput
                          className="link-input"
                          placeholder="place your name here"
                        ></TextInput>
                      </FormField>
                      <FormField
                        style={inputStyle}
                        value={link}
                        onChange={handleChange}
                      >
                        <TextInput
                          className="link-input"
                          placeholder="place your link here"
                        ></TextInput>
                      </FormField>
                      <Box width="100%" direction="row">
                        <Button
                          type="submit"
                          align="center"
                          primary
                          style={buttonStyle}
                        >
                          Add new
                        </Button>
                        <Button
                          type="submit"
                          primary
                          onClick={getLinks}
                          style={buttonStyle}
                        >
                          Refresh
                        </Button>
                      </Box>
                    </Form>
                    <InfiniteScroll items={links} step={100}>
                      {(link, index) => (
                        <Box
                          direction="column"
                          flex={false}
                          pad={size}
                          key={index}
                          border={{ side: "bottom" }}
                        >
                          <Box
                            direction="row"
                            align="center"
                            justify="between"
                            alignContent="center"
                            width={{ min: "70vw", max: "90vw" }}
                          >
                            <Text>{link}</Text>
                            <Button
                              type="submit"
                              onClick={getLinks}
                              style={buttonStyle}
                              plain={false}
                            >
                              Delete
                            </Button>
                          </Box>
                        </Box>
                      )}
                    </InfiniteScroll>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          ) : (
            <Box
              round="xsmall"
              align="center"
              justify="center"
              style={formStyle}
              onLoad={getLinks}
            >
              <Card width="large">
                <CardBody
                  className="card_body"
                  style={cardStyle}
                  overflow="auto"
                >
                  <Box align="center">
                  <Heading level="1" size="small" margin="10px">
                      Your saved links
                    </Heading>
                    <Form onSubmit={addLink}>
                    <FormField
                        style={inputStyle}
                        value={link}
                        onChange={handleNameChange}
                      >
                        <TextInput
                          className="link-input"
                          placeholder="place your name here"
                        ></TextInput>
                      </FormField>
                      <FormField
                        width="medium"
                        style={inputStyle}
                        value={link}
                        onChange={handleChange}
                      >
                        <TextInput placeholder="place your link here"></TextInput>
                      </FormField>
                      <Box width="medium" direction="row" justify="center">
                        <Button
                          type="submit"
                          align="center"
                          primary
                          style={largeButtonStyle}
                        >
                          Add new
                        </Button>
                        <Button
                          type="submit"
                          primary
                          onClick={getLinks}
                          style={largeButtonStyle}
                        >
                          Refresh
                        </Button>
                      </Box>
                    </Form>
                    <InfiniteScroll items={links} step={100}>
                      {(link, index) => (
                        <Box
                        direction="column"
                        flex={false}
                        pad={size}
                        key={index}
                        border={{ side: "bottom" }}
                      >
                        <Box
                          direction="row"
                          align="center"
                          justify="between"
                          alignContent="center"
                          width={{ min: "30vw", max: "40vw" }}
                        >
                          <Text>{link}</Text>
                          <Button
                            type="submit"
                            onClick={getLinks}
                            style={buttonStyle}
                            plain={false}
                          >
                            Delete
                          </Button>
                        </Box>
                      </Box>
                      )}
                    </InfiniteScroll>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

export default MembersDashboard;
