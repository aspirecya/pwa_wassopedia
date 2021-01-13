import {ArticleView, ArticleList} from "../components";
import { useParams } from "react-router-dom";


const Articles = ({ children, ...props }) => {
    const { id } = useParams();

    if(id) {
        return (
            <>
                <ArticleView id={id} />
            </>
        )
    }

    return (
        <>
            <ArticleList />
        </>
    );
};

export default Articles;