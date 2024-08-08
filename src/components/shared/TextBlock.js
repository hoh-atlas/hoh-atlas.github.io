import "./TextBlock.css";

const TextBlock = (props) => {

    return <div className="textblock">
        {props.children}
    </div>
}

export default TextBlock;