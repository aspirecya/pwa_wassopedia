import { Route, Switch } from "react-router-dom";
import * as Pages from "../pages"

const Router = ({children, ...props}) => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Pages.Home />
                </Route>

                <Route exact path="/register">
                    <Pages.Register />
                </Route>

                <Route exact path="/login">
                    <Pages.Login />
                </Route>

                <Route exact path="/logout">
                    <Pages.Logout />
                </Route>

                <Route exact path="/articles">
                    <Pages.Articles />
                </Route>

                <Route exact path="/articles/:id">
                    <Pages.Articles />
                </Route>

                <Route exact path="/article">
                    <Pages.Article />
                </Route>
            </Switch>
        </>
    )
}

export default Router;