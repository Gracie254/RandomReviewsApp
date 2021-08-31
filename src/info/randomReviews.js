import React, { useState } from 'react'
import myreviews from './data'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft} from 'react-icons/fa'
const MyReviewsObject = () => {
 const [currentReview, setCurrentReview] = useState(myreviews)
const [index, setIndex] = useState(0)
 let appReview = currentReview[index]
 const getRandomReview = () => {
     
     setIndex((rdm)=>{
         rdm =Math.floor(Math.random() * currentReview.length)
         return rdm
     })
     appReview = currentReview[index]
     setCurrentReview([...currentReview, appReview])
     console.log(appReview)
 }
 
 const prevReview = () => {
    
    setIndex((nxt)=>{
        return nxt - 1
    })
         appReview = currentReview[index]
         setCurrentReview([...currentReview, appReview])
     

    
 }
 const nextReview = () => {
    setIndex((prev)=> {
        return prev + 1
    })
         appReview = currentReview[index]
        setCurrentReview([...currentReview, appReview])
     }
 
    const {id, name, career, image, review} = appReview
 return (
     
     <>
     <h1>Our Reviews</h1>
     <div key={id} id="card">
         <div id="image">
        <img src={image} alt={name}/>
        </div>
        <div id="content">
        <h2>{name}<hr /></h2>
        <h4>{career}</h4>
        <div id="parag">
            <FaQuoteLeft color="white" size="3.0em"/> 
            <p>  {review}</p>
        </div>
        
        <div onClick={prevReview} id="prevReview"><FaAngleLeft size="2.5em"/></div>
        <div onClick={nextReview} id="nextReview"><FaAngleRight size="2.5em"/></div>
        <Button onClick={getRandomReview} id="btn">Surprise Me</Button>
        </div>
     </div>
     </>
 )
}
export default MyReviewsObject