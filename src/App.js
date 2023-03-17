import { Name } from "./components/getName";
import {Pictures} from "./components/getPictures"
import Testbed from "./components/test"

//note: this is how you import an export default function from a class
import Gallery from "./components/profile"

function App() {

    //my first react component
    //let gallery = new Gallery();
    let test = new Testbed("https://i.imgur.com/X7bZXRv.jpeg", 'Comic', "Sarah's Scribbles", 'Harry', 1995);

    return (
        <Gallery/>
    );
}

export default App;