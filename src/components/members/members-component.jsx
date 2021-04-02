import React, {useContext} from 'react';
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import MembersDashboard from "./members-dashboard";

export const MembersComponent = () => {
const {currentUser} = useContext(AuthContext);
return(
<div>
Inside Members route
{currentUser === null ? <Redirect to="/login" /> : <Redirect to="/members" />}
<div>{currentUser && console.log('from members', currentUser.uid, currentUser.email)}</div>
<MembersDashboard></MembersDashboard>
</div>
)};
