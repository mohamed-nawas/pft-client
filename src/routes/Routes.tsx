import Auth from "@pages/Auth";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "src/App";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Auth} />
            </Switch>
        </Router>
    )
}