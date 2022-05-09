import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { authSelectors } from "redux/auth";


export default function PublicRoute({
    children,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    
    return (
        <Route {...routeProps}>
            {shouldRedirect ?  <Redirect to='/contacts' /> : children}
        </Route>
    )
}