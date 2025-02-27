import React from "react"
import { Navigate } from "react-router-dom"

// const Authmiddleware = ({
//   component: Component,
//   layout: Layout,
//   isAuthProtected,
//   ...rest
// }) => (
//   <Route
//     // {...rest}
    
//     render={props => {

//       if (isAuthProtected && !localStorage.getItem("authUser")) {
//         return (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }

//       return (
        
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       )
//     }}
//   />
// )

// Authmiddleware.propTypes = {
//   isAuthProtected: PropTypes.bool,
//   component: PropTypes.any,
//   location: PropTypes.object,
//   layout: PropTypes.any,
// }

const AppRoute = (props) => {
	if (!localStorage.getItem("authUser")) {
		return (
		  <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
		);
	  }
	  return (<React.Fragment>
		{props.children}
	  </React.Fragment>);
}

export default AppRoute;
