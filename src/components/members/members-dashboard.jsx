import React, {useContext, useState, useCallback} from 'react';
import app from './../../base'
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import {database} from "../../base"
import { formStyle } from "../../styles";
import { withRouter } from "react-router";

import {
    Box,
    Button,
    Form,
    FormField,
    TextInput,
    Paragraph,
    List
  } from "grommet";

const MembersDashboard = ({history}) => {
    const {currentUser} = useContext(AuthContext);
    const [link, setLink] = useState();
    const [links, setLinks] = useState([]);

    const handleLogout = useCallback (async e => {
        e.preventDefault();
        try {
            app.auth().signOut();
            (console.log('out'));
            history.push("/login");
          } catch (err){
           console.log(err)
          } 
        return (
            <Redirect to="/login" />
        )
    }, [history]);

    const addLink = (e) => {
        e.preventDefault();
        console.log(link)
        setLinks(links => [...links, link])
        console.log(links);
        let savedLink = {
            links: [...links, link]
        }
        database.collection("links").doc(currentUser.uid).set(savedLink)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setLink(e.target.value)
    }

    // const renderLinks = (e) => {
    //     database.collection("links").get().then(links => {
    //         links.forEach(doc => {
    //             return (
    //                 <Text>{doc}</Text>
    //             )
    //         })
    //     })
    // }

    return (
        <>
        <Box fill align="center" justify="center" style={formStyle}>
            <Button  onClick={handleLogout} primary>Sign out</Button>
            <Box width="medium">
                <Paragraph>Your saved links</Paragraph>
                <Form onSubmit={addLink}>
                    <FormField value={link} onChange={handleChange}>
                        <TextInput ></TextInput>
                    </FormField>
                    <Box>
                    <Button type="submit" primary>Add new</Button>
                    </Box>
                </Form>
                <List data={links}></List>
                
                {/* <Text>{currentUser.email}</Text> */}
            </Box>
        </Box>
        </>
    )
}

export default withRouter(MembersDashboard);
