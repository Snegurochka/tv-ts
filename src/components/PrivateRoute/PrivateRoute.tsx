import { Redirect, Route, RouteProps } from "react-router";
import { AppRoute } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  isAuth: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { exact, path, render, isAuth } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuth
          ? render()
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

export default PrivateRoute;