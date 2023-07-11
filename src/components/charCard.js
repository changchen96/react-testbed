
import { getImageUrl } from "./profile";

export default function CharacterCard({person, size}){
    return (
        <div>
            <h1>{person.name}</h1>
            <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
            />
            <section>
                <ul>
                    <ListItems
                    watched={true}
                    person={person}
                    />
                </ul>
            </section>
        </div>
        
      );

}

function ListItems({watched, person}){
      return (
        <div>
            <li>Media from: {person.from}</li>
            <li>{watched ? person.media + ' ' + '✔' : person.media}</li>
        </div>
       
      );
        
}
