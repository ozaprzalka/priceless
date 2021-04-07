import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import { formStyle, cardStyle, inputStyle, buttonStyle } from "../../styles";
import { withRouter } from "react-router";

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
} from "grommet";

const MembersDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [link, setLink] = useState('');
  const [links, setLinks] = useState([]);

  const addLink = (e) => {
    e.preventDefault();
    console.log(link);
    setLinks((links) => [...links, link]);
    console.log(links);
    let savedLink = {
      links: [...links, link],
    };
    // database.collection("links").doc(currentUser.uid).set(savedLink);
    if (currentUser && database.collection("links").doc(currentUser.uid)) {
      database.collection("links").doc(currentUser.uid).update(savedLink);
    } else {
      database.collection("links").doc(currentUser.uid).set(savedLink);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setLink(e.target.value);
  };

  const getLinks = () => {
    if (
      currentUser &&
      database.collection("links") &&
      database.collection("links").doc(currentUser.uid)
    ) {
      let myLinks = database.collection("links").doc(currentUser.uid);
      myLinks.onSnapshot((doc) => {
        console.log("current data", doc.data());
        console.log("current data", doc.data().links);
        setLinks(doc.data().links);
      });
    } else {
      setLinks("");
    }
  };

  useEffect(() => {
    getLinks();
    return () => links;
  }, []);

  return (
    <>
      <Box align="center" justify="center" style={formStyle} onLoad={getLinks}>
        <Card width="large">
          <CardBody className="card_body" style={cardStyle} overflow="auto">
            <Box align="center">
              <Text size="large" text-align="center" weight="bold">
                Your saved links
              </Text>
              <Form onSubmit={addLink}>
                <FormField
                  width="medium"
                  style={inputStyle}
                  value={link}
                  placeholder="paste url here"
                  onChange={handleChange}
                >
                  <TextInput></TextInput>
                </FormField>
                <Box width="medium" direction="row">
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
              <InfiniteScroll
                items={links}
                step={100}
              >
                {(link, index) => (
                  <Box
                    flex={false}
                    pad="medium"
                    key={index}
                    border={{ side: "bottom" }}
                  >
                    <Text>{link}</Text>
                  </Box>
                )}
              </InfiniteScroll>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

<Card>
  <CardBody className="card_body">
    <Box direction="row" className="item_box">
      <Text className="text"></Text>
      <Box className="button_box">
        <Button>Delete</Button>
      </Box>
    </Box>
  </CardBody>
</Card>;

export default withRouter(MembersDashboard);
