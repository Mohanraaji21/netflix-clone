import React, {useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRiYmM5YTdhYjc2MzE2ZWZkY2QyMTQxNDFjNDRlOCIsIm5iZiI6MTczNTI5MzAyNS40Mywic3ViIjoiNjc2ZTc4NjEzZGZmMGRlOTliNjE2Y2E4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dfv9cNEpHJ9eJWoepxRBUH_KBnNtjwAjIgerCoE179A'
    }
  };
  

  const handleWheel = (event)=>{
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p> 
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
