import { useState, useEffect, useCallback, useRef } from "react";

const useInfiniteScroll = () => {
    const [renderIndex, setRenderIndex] = useState()
    const [shouldRenderMore, setShouldRenderMore] = useState()
    const isInViewPort = useRef()
    const cardGridRef = useRef()

    //
    //Infinite scroll
    const createObserver = ()=> {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.5, 1]
        };

        let observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(isInViewPort.current);
    }

    const handleIntersect = (entries, observer)=> {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio >= 0.5) {
                    setShouldRenderMore(true)
                }
            }
        })
    }

    //add the observer tot the ref
    useEffect(()=> {
        if(isInViewPort.current) {
            isInViewPort.current = createObserver()
        }
    }, [isInViewPort.current])


    useEffect(()=> {
        const maxCardsPerRow = Math.floor(cardGridRef.current.offsetWidth/280);
        const maxCardsPerColumn = Math.floor(cardGridRef.current.offsetHeight/430) + 1

        if(renderIndex === undefined && shouldRenderMore === undefined) {
            //this is our first render, calculate how many cards should be render based on how many fit
            //on the container, the divisors are based on the height of each card.
            // The result is also  how many card to add every time infinite scrolling load function is triggered
            let cardsPerInfiniteScrollLoad = maxCardsPerRow*maxCardsPerColumn
            console.log("will set render index to", renderIndex, maxCardsPerRow, maxCardsPerColumn)
            setRenderIndex(cardsPerInfiniteScrollLoad)
        }

        if(shouldRenderMore) {
            //increase the index used in the slice method
            setRenderIndex(renderIndex + maxCardsPerRow)
            setShouldRenderMore(false)
        }

    }, [shouldRenderMore, renderIndex])

    return {
        isInViewPort,
        cardGridRef,
        renderIndex,
    }

}

export default useInfiniteScroll;