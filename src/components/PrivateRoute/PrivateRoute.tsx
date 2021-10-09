import { Redirect, Route, RouteProps } from "react-router";
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
    render: () => JSX.Element;
    authorizationStatus: AuthorizationStatus;
  }

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to="/login" />
      )}
    />
  );
}

export default PrivateRoute;