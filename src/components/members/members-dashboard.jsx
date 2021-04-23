import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import { EmailListComponent } from "./email-component";
import {
  cardStyle,
  inputStyle,
  buttonStyle,
  smallLMemStyle,
  smallCardStyle,
  largeButtonStyle,
  membersStyle,
} from "../../styles";

import {
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Card,
  CardBody,
  InfiniteScroll,
  ResponsiveContext,
  Heading,
  Image,
} from "grommet";

import { Trash } from "grommet-icons";
import meow from "./meow.png";
import firebase from "firebase/app";

const MembersDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [links, setLinks] = useState([]);

  const addLink = (e) => {
    e.preventDefault();
    let savedLink = {
      name: name,
      link: link,
    };
    if (link && link !== undefined && name && name !== undefined) {
      database
        .collection("links")
        .doc(currentUser.uid)
        .update({
          links: firebase.firestore.FieldValue.arrayUnion(savedLink),
        });
      setName("");
    }
  };

  const removeLink = (data) => {
    database
      .collection("links")
      .doc(currentUser.uid)
      .update({
        links: firebase.firestore.FieldValue.arrayRemove(data),
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLink(e.target.value);
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const getLinks = () => {
    if (currentUser && database.collection("links").doc(currentUser.uid)) {
      let myLinks = database.collection("links").doc(currentUser.uid);
      myLinks.onSnapshot((doc) => {
        if (doc.data() !== undefined) {
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
            <>
              <Box direction="column" fill justify="center">
                <EmailListComponent></EmailListComponent>
                <Image width="370px" src={meow} alt="Meow" />
              </Box>
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
                            className="link-input2"
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
                              <Anchor
                                onClick={() =>
                                  window.location.replace(link.link)
                                }
                              >
                                {link.name}
                              </Anchor>
                              <Button
                                onClick={() => removeLink(link)}
                                style={buttonStyle}
                                plain={true}
                              >
                                <Trash color="brand" />
                              </Button>
                            </Box>
                          </Box>
                        )}
                      </InfiniteScroll>
                    </Box>
                  </CardBody>
                </Card>
              </Box>
            </>
          ) : (
            <>
              <Box direction="row" fill justify="center">
                <EmailListComponent></EmailListComponent>
                <Image height="500px" src={meow} alt="Meow" />
              </Box>

              <Box
                round="xsmall"
                align="center"
                justify="center"
                style={membersStyle}
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
                          <TextInput
                            className="link-input2"
                            placeholder="place your link here"
                          ></TextInput>
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
                              <Anchor onClick={() => window.open(link.link)}>
                                {link.name}
                              </Anchor>
                              <Button
                                onClick={() => removeLink(link)}
                                style={buttonStyle}
                                plain={true}
                              >
                                <Trash size="large" color="brand" />
                              </Button>
                            </Box>
                          </Box>
                        )}
                      </InfiniteScroll>
                    </Box>
                  </CardBody>
                </Card>
              </Box>
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </>
  );
};

export default MembersDashboard;
