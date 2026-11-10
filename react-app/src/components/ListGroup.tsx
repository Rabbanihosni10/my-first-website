import { Fragment } from "react/jsx-runtime";
const ListGroup = () => {
    return(
    <>
        <h1>Hello World!</h1>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
    
    // using div------ 
    
    // <div>
    //     <h1>Hello World!</h1>
    //     <ul className="list-group">
    //         <li className="list-group-item">An item</li>
    //         <li className="list-group-item">A second item</li>
    //         <li className="list-group-item">A third item</li> 
    //         <li className="list-group-item">A fourth item</li>
    //         <li className="list-group-item">And a fifth one</li>
    //     </ul>
    // </div>

    // using Fragment 

    // <Fragment>
    //     <h1>Hello World!</h1>
    //     <ul className="list-group">
    //         <li className="list-group-item">An item</li>
    //         <li className="list-group-item">A second item</li>
    //         <li className="list-group-item">A third item</li>
    //         <li className="list-group-item">A fourth item</li>
    //         <li className="list-group-item">And a fifth one</li>
    //     </ul>
    // </Fragment>
    );
}

export default ListGroup;