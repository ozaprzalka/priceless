import React, { useContext, useState, useEffect, useCallback } from "react";
import app, { db } from "./../../base";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import { database } from "../../base";
import { formStyle } from "../../styles";

import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Paragraph,
  List,
} from "grommet";

const MembersDashboard = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [link, setLink] = useState();
  const [links, setLinks] = useState([]);

  const handleLogout = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        app.auth().signOut();
        console.log("out");
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
      return <Redirect to="/login" />;
    },
    [history]
  );

  const addLink = (e) => {
    if (link && link !== undefined) {
      database.collection("links").doc(currentUser.uid).set({
        link: link
      });
    }
  };

  const getLinks2 = () => {
    if (currentUser && database.collection("links") && database.collection("links").doc(currentUser.uid)) {
      let myLinks = database.collection("links").doc(currentUser.uid);
      myLinks.onSnapshot((doc) => {
        console.log("current data", doc.data());
        console.log("current data", doc.data().links);
        setLinks(doc.data().links);
      });
    } else {
      setLinks([])
    }
  };

  const getLinks = () => {
    if (currentUser && database.collection("links").doc(currentUser.uid)) {
      let myLinks = database.collection("links").doc(currentUser.uid);
      myLinks.get().then((doc) => {
          if (doc.exists) {
            console.log("Doc data: " + doc.data());
          }
          else {
            console.log("Nie ma");
          }
        } 
      )
    } else {
      return;
    }
  };

  useEffect(() => {
    getLinks();
    return () => links;
  }, []);


  return (
    <>
      <Box
        fill
        align="center"
        justify="center"
        style={formStyle}
        onLoad={getLinks}
      >
        <Button onClick={handleLogout} primary>
          Sign out
        </Button>
        <Box width="medium">
          <Paragraph>Your saved links</Paragraph>
          <Form onSubmit={addLink}>
            <FormField>
              <TextInput value={link} onChange={(e) => setLink(e.target.value)} />
            </FormField>
            <Box>
              <Button type="submit" primary>
                Add new
              </Button>
            </Box>
          </Form>
          <Button type="submit" onClick={getLinks}>
            Refresh
          </Button>
          <List data={links}></List>
        </Box>
      </Box>
    </>
  );
};

export default MembersDashboard;
