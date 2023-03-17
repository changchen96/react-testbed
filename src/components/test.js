//for more information about importing: https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx
//note: This is how you import a class to be used

import { Name } from "./getName";
import {Pictures} from "./getPictures"

export default function Testbed(image_link, alt, title, name, year){
    let pictures = new Pictures(image_link, alt, title);
    let myname = new Name(name, year);

    return (
         <section>
            <img src= {pictures.image_link} alt={pictures.alt} title={pictures.title}/>
            <p>Hello, my name is {myname.name} and I was born in {myname.year}</p>
            </section>
    );
}