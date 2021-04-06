import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({component: Component, ...rest}) => {
  const { currentUser } = useContext(AuthContext);
  return (
      <Route {...rest} render={props => (
          currentUser ?
              <Component {...props} />
          : <Redirect to="/login" />
      )} />
  );
};

// const PrivateRoute3 = ({ comp: Component, ...rest }) => {
//   const { currentUser } = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !currentUser ? (
//           <Redirect to="/login" />
//         ) : (
//           <Component {...props}></Component>
//         )
//       }
//     ></Route>
//   );
// };

// const PrivateRoute2 = ({
//   comp: Component, // use comp prop
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !currentUser ? <Redirect to="/login" /> : <Component {...props} />
//     }
//   />
// );

export default PrivateRoute;
