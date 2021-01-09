import styled from 'styled-components';
import {useEffect} from "react";
import EditorJS from "@editorjs/editorjs";

const StyledEditorBox = styled.div`
    display: block;
`;

const EditorJs = () => {
    useEffect(() => {
        new EditorJS({
            holder: "editor-div",
        });
    })

    return (
        <>
            <StyledEditorBox id="editor-div"></StyledEditorBox>
        </>
    );
}

export default EditorJs;