import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { UserMenuNavBar } from "../components/ui/UserMenuNavBar";
import { Cart } from "../screens/private/Cart";
import { CreateRaffle } from "../screens/private/CreateRaffle";
import { Dashboard } from "../screens/private/Dashboard";
import { EditRaffle } from "../screens/private/EditRaffle";
import { MyCollaborations } from "../screens/private/MyCollaborations";
import { MyParticipations } from "../screens/private/MyParticipations";
import { MyRaffles } from "../screens/private/MyRaffles";
import { Contact } from "../screens/public/Contact";
import { Home } from "../screens/public/Home";
import { Login } from "../screens/public/Login";
import { Raffle } from "../screens/public/Raffle";
import { RaffleList } from "../screens/public/RaffleList";
import { PrivateRoute } from "./PrivateRouter";

export const AppRouter = () => {
  const { uid } = useSelector((state) => state.auth);
  

  return (
    <Router>
      <Navbar />
      <UserMenuNavBar />
      <div className="container mt-5">
        <Switch>
          <Route path="/login" component={Login} />

          <PrivateRoute
            exact
            path="/cart"
            component={Cart}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/raffle/create"
            component={CreateRaffle}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/raffle/edit/:alias"
            component={EditRaffle}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/myRaffles"
            component={MyRaffles}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/raffles/collaborations"
            component={MyCollaborations}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/raffles/participations"
            component={MyParticipations}
            isAuthenticated={!!uid}
          />

          <Route path="/raffle/:alias/list/:listNumber" component={RaffleList} />
          <Route path="/raffle/:alias" component={Raffle} />

          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
