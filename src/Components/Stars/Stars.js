import React from 'react'
import './stars.css'

const Stars = () => {
    let rateing = (event) =>{
        let Element = event.target;
        let ParentNode = event.target.parentNode;
        let IndexElem = Array.from(ParentNode.children).indexOf(Element);
        
        for (const elem of ParentNode.children) {
            elem.classList.remove('active');
        }
        for (let i = 0; i <= IndexElem; i++) {
            ParentNode.children[i].classList.add('active');
        }
    }
    return (
        <>
        {
            Array.from(Array(5).keys()).map((index) => {
                return <span key={index} onClick={rateing} >*</span>
            })
        }
        </>
    )
}

export default Stars
