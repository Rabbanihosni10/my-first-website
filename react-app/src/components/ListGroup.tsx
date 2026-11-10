import { Fragment } from "react/jsx-runtime";
const ListGroup = () => {
    let items = ['New Work', 'San Fransisco', 'Tokyo', 'Beijing', 'New Delhi', 'Paris', 'London', 'Moscow', 'Islamabad', 'Ankara'];
    items = [];
    // if (items.length === 0)
    //     return 
    //     <>
    //         <h1>List--</h1>
    //         <p>No Item Found</p>
    //     </>;
    const message=items.length===0?<p>No Items Found</p>:null
    const getMessage=()=>{
        return items.length===0?<p>No Items Found</p>:null
    }
    return (
        <>
            {/* <h1>Hello World!</h1> */}
            <h1>List--</h1>
            {items.length===0?<p>Not a Single Item Found!</p>:null}
            {items.length===0 && <p>Not a Single Item Found!</p>}
            {message}
            {getMessage()}
            <ul className="list-group">
                {/* {items.map(item=><li>{item}</li>)}; */}
                
                {items.map((item) => (
                    <li key={item}>{item}</li>)
                )}
                {/* <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li> */}
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