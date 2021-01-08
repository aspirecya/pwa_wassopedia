import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Pages from "../pages"

const Router = ({children, ...props}) => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Pages.Home />
                </Route>
            </Switch>
        </>
    )
}

export default Router;