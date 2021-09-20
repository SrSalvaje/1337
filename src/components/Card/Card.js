import React from "react";
import styles from './Card.module.css'
const Card = props => {
    const {image, name, socialMedia, office, reference} = props
    return (
        <div className={styles.card} ref={reference}>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} />
            </div>
            <div>
                <span>{name}</span> <span>{socialMedia}</span>
            </div>
            <div>
                {office}
            </div>
        </div>
    )
}

export default Card;


// const lastCardRef = useCallback((node) => {
//     console.log("called las card ref", observer.current)
//     if(observer.current) {
//         observer.current.disconnect()
//         observer.current = new IntersectionObserver((entries) => {
//             if(entries[Array.lastIndexOf(entries)].isIntersecting) {
//                 console.log("add more cards to the array")
//             }
//         })
//         if(node){
//             observer.current.observe(node)
//         }
//     }
// }, [])
//
// useEffect(() => {
//     if(observer.current) {
//         console.log("inside useEffect", observer.current)
//         observer.current = new IntersectionObserver((entries) => {
//             console.log("emtries", entries)
//             if(entries[Array.lastIndexOf(entries)].isIntersecting) {
//                 let newIndex = employeesToRender.length
//                 let newEmployees = data.slice(newIndex, newIndex+3)
//                 let tempEmployees = [...employeesToRender, ...newEmployees]
//                 setEmployeesToRender(tempEmployees)
//                 console.log(observer.current)
//             }
//         })
//
//     }
//
// }, [observer])