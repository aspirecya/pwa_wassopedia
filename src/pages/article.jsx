import { ArticleForm } from "../components";
import { Redirect } from "react-router-dom";
import { isLogged } from "../utils/user";


const Article = ({ children, ...props }) => {
    if(isLogged()) {
        return (
            <ArticleForm/>
        )
    }

    return (
        <Redirect to="/login"/>
    );
}

export default Article;