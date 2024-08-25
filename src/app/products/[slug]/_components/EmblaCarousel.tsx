'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index: number) => {
        if (!emblaMainApi || !emblaThumbsApi) return
        emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="embla max-md:w-full" style={{margin: '0px'}}>
            <div className="embla__viewport w-[21rem] max-md:w-full" ref={emblaMainRef}>
                <div className="embla__container">
                {slides.map((index) => (
                    <div className="embla__slide" key={index}>
                    <div style={{borderRadius: '4px'}} className="embla__slide__number border-[1px]">{index + 1}</div>
                    </div>
                ))}
                </div>
            </div>

            <div className="embla-thumbs" style={{width: '21rem'}}>
                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                <div style={{transform: 'translateX(12px)'}} className="flex space-x-1 gap-2 w-full">
                    {slides.map((index) => (
                        <Thumb
                            key={index}
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                            index={index}
                        />
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
