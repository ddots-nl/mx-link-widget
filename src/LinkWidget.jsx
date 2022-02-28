import { Component, createElement } from "react";


export default class LinkWidget extends Component {
    render() {
        const {textLink, urlLink, howToOpenUrl, tooltip, icon} = this.props;
        return(
            <a 
                href={urlLink.value} 
                target={howToOpenUrl} 
                title={tooltip ? tooltip : ""} 
                rel="noreferrer noopener">
                <i className={icon ? `glyphicon ${JSON.stringify(icon.value.iconClass).replace(/"/g, '')}` : ""}></i> 
                {textLink.value}
            </a>
        )
    }
}