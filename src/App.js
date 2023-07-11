import { Name } from "./components/getName";
import {Pictures} from "./components/getPictures"
import { Person } from "./components/person";
import Testbed from "./components/test";
import CharacterCard from "./components/charCard";
import { TestList } from "./components/profile";
import { PeopleFilter } from "./components/profile";

//note: this is how you import an export default function from a class
import Gallery from "./components/profile"

//note: this is how you import a named export from a class
//additional note: https://stackoverflow.com/questions/46913851/why-and-when-to-use-default-export-over-named-exports-in-es6-modules
import { Profile } from "./components/profile";
import { TodoList } from "./components/profile";
import { AvatarProp } from "./components/profile";
import { getImageUrl } from "./components/profile";

export default function App() {

    //my first react component
    //let gallery = new Gallery();
    let pictures = new Pictures("https://i.imgur.com/X7bZXRv.jpeg", "Comic", "Sarah's Scribbles");
    let myname = new Name("Harry", "1995");
    let bocchi = new Person("Hitori Gotou", "FnlRaxH", "Anime", "Bocchi The Rock!");

    return (
        <div>
            <div>
                <Testbed
                pictures={pictures}
                myname={myname}
                />
                <TodoList/>
            </div>
            <div>
                <PeopleFilter
                occupation={'chemist'}
                />
            </div>
        </div>
        
    );
}