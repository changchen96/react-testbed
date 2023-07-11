import React from "react";
class Person extends React.Component{
    constructor(name, imageId, from, media)
    {
        super();
        this.name = name;
        this.imageId = imageId;
        this.from = from;
        this.media = media;
    }

}

export {Person}