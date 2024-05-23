import CoreConcept from "./CoreConcept.jsx";
import { core } from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { core.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>)) }
            {/* <CoreConcept 
              title={core[0].title} 
              description={core[0].description} 
              image={core[0].image} 
            />
            <CoreConcept {...core[1]} />
            <CoreConcept {...core[2]} />
            <CoreConcept {...core[3]} /> */}
          </ul>
        </section>
    )
}