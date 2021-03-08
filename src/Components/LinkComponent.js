import '../Style/LinkComponent.scss'

function LinkComponent({title, url}){
    return(
        <a href={url} >{title}</a>
    );
}

export default LinkComponent;