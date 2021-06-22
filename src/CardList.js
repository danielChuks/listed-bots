import React from 'react';
import Card from './Card';
// //we the below destructioning because cardlist already has access to rebots so all we need to do is import cards
const CardList = ({ robots }) => {
    return(
        <div>
            {
            robots.map((user, i) => {
                //the key help javascript remember which key is which
                return (
                <Card 
                 id={robots[i].id} 
                 name={robots[i].name} 
                 email={robots[i].email}
                 website={robots[i].website}
                 key={i} 
                 />
                 );
            }
            )}    
         </div> 

    )
        }




export default CardList;


