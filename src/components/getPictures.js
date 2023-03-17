import React from "react";

class Pictures extends React.Component{
    constructor(image_link, alt, title){
        super();
        this.image_link = image_link
        this.alt = alt
        this.title = title
    }
}

export {Pictures}