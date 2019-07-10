import React from 'react';


const list = (props) =>{

    let items = props.name;

    let toDisplay = (items) =>{
        for(let i =0; i< items.length; i++){
            console.log(items[i]);
        }
    }
    
    let eachPerson  = toDisplay(items);


    return(
        <div>
            Name: {eachPerson['name']}
        </div>
    )
}

export default list;