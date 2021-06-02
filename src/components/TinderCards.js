import React,{useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import '../Styles/TinderCards.css'
import axios from './axios'
function TinderCards() {
    const [people,setPeople] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/tinder/cards")

            setPeople(req.data);
        }
        fetchData()
    },[])
    console.log(people)
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
      }
    
      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }
    return (
        <div className="TinderCards">
            <div className="tinder_card_container">
            {people.map(person => (
            <TinderCard 
            className='swipe' 
            key={person.name} 
            onSwipe={(dir) => swiped(dir, person.name)} 
            onCardLeftScreen={() => outOfFrame(person.name)}
            preventSwipe={["up","down"]}
            >
            
                 <div style={{ backgroundImage: `url( ${person.imgUrl} )` }} className='card'>
                 <h3>{person.name}</h3>
               </div>
               </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default TinderCards
