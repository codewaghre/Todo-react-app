import './Tag.css'

const Tag = (Props) => {
    //  console.log("props", Props);

    const { TagName, selecttag, selected } = Props
    
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (

        <button
            type='button'
            onClick={() => selecttag(TagName)}
            className='tag'
            style={selected ? tagStyle[TagName] : tagStyle.default}
        > {TagName} </button>
    )
}

export default Tag
