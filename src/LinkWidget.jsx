import { Component, createElement } from "react";

import "./ui/LinkWidget.css";

export default class LinkWidget extends Component {
    render() {
        const {textLink, urlLink, howToOpenUrl, tooltip, icon} = this.props;
        return(

            <a 
                href={urlLink.value} 
                target={howToOpenUrl} 
                title={tooltip} 
                rel="noreferrer noopener">
                <i class={`glyphicon ${JSON.stringify(icon.value.iconClass).replace(/"/g, '')}`}></i> 
                {textLink}
            </a>
        )
    }
}