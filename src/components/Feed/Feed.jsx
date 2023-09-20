import "./Feed.css"
import Share from "../Share/Share"
import Post from "../Post/Post"
import {Posts} from "../../dummyData"

export default function Feed() {
    return (
        <div className="Feed">
            <div className="feedwrapper">
                <Share />
                {Posts.map (p=>(
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
};

/*

Trying to esacpe the darkness, I walked deeper into the woods..
Now I'm loosing the hope to ever get out.

There might be a way to get out of here, but I'm not looking.
I'm not waiting for the hand I heard, will pull me out of atrocious pictures.
Now..
I'm enjoying the tranquility of this place.
I'm falling in love with the repose these woods has offered.
I'm accepting the emptiness.
I'm not tired anymore.
This place is not cold anymore, I can feel the warmth of my thoughts.
These woods are my home now.

*/