import React from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
    style={{padding: '0px', margin: '0px'}}
      className={'border-[1px] rounded-sm w-full h-20'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="flex justify-center items-center w-full h-full font-bold"
      >
        {index + 1}
      </button>
    </div>
  )
}
