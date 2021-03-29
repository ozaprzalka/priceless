import React from 'react';
import app from './../../base'
import { Redirect } from "react-router";


export const MembersComponent = () => (
<div>
Inside Members route
<button onClick={() => app.auth().signOut()}>Sign out</button>
<Redirect to="/members" />
</div>
);
