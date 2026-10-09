import './Card.css'
import Phase2 from './Phase2';
import Phase3 from './Phase3';

function Card(props) {
    return(
        <>
        <div className="card">
            <Title 
            title="Secret "/>

            <div className="container">
                <Phase 
                name="Safety" 
                 />
                <Phase2 
                name="Privacy"/>
                <Phase3 
                name="Freedom"/>
            </div>

            
        </div>
        </>
    )
}
export default Card;

function Title(props) {
    return(
        <>
        <h2>My- {props.title} <span>Notes</span> </h2>
        </>
    )
}

function Phase(props) {
    return(
        <>
        <div className="guide">
            <h5>{props.name}</h5>
            <p>It is safe to use because access to your inputs is restricted exclusively to you."</p>

        </div>
        </>
    )
}

