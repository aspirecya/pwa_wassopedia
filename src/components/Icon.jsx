import PropTypes from "prop-types";
import classNames from "classnames";

const icons = [
    {
        name: "test",
        content: `<path d="m380.343 4.393c-5.857-5.858-15.355-5.858-21.213 0l-63.64 63.64c-5.858 5.858-5.858 15.355 0 21.213l10.606 10.606-284.164 284.166c-29.242 29.243-29.242 76.824 0 106.066 29.237 29.238 76.819 29.246 106.065 0l284.165-284.165 10.607 10.607c5.857 5.857 15.355 5.858 21.213 0l63.64-63.64c5.858-5.858 5.858-15.355 0-21.213-7.332-7.332-119.656-119.656-127.279-127.28zm-10.607 116.674 42.427-42.427 21.213 21.213-42.427 42.427zm0-84.854 21.214 21.213-42.427 42.427-21.213-21.213zm-106.066 148.492 21.214 21.214-167.493 167.492-21.213-21.213zm-156.885 284.166c-17.546 17.545-46.095 17.545-63.64 0-17.545-17.546-17.545-46.094 0-63.64l31.82-31.82 31.82 31.82c5.857 5.858 15.355 5.859 21.213 0l188.706-188.705c5.858-5.858 5.858-15.355 0-21.213l-31.82-31.82 42.426-42.426c8.023 8.023 54.019 54.019 63.64 63.64zm326.591-284.165c-7.107-7.107-13.334-13.334-21.214-21.214l42.427-42.427 21.214 21.214z"/>`,
        viewBox : "0 0 512.016 512.016",
        fill: "black",
    }
];

const Icon = ({ children, className, name, ...props }) => {
    const icon = icons.find(icon => icon.name === name);
    const content = icon ? icon.content : "";
    const viewBox = icon.viewBox ? icon.viewBox : "0 0 24 24";
    const fill = icon.fill ? icon.fill : "none";
    const classes = classNames(className, name);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={viewBox}
                className={classes}
                fill={fill}
                {...props}
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            ></svg>
        </>
    )
};

Icon.propTypes = {
    name: PropTypes.string.isRequired
}

export default Icon;