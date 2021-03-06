// @flow
import React from 'react'

const getOffset = (offset) => {
  return {
    left: offset[0] + 'px',
    top:  offset[1] + 'px',
  }
}

type GridProperties = {
  size: number,
  weight?: string,
  vertical?: number,
  horizontal?: number,
  offset?: Array<number>,
  sub?: number,
}

const Grid = (props: GridProperties) => {

  let size       = props.size || '2px'
  let weight     = props.weight || '1px'
  let vertical   = props.vertical || size
  let horizontal = props.horizontal || size
  let sub        = props.sub || 1
  let parts      = Array(sub).fill(horizontal / sub)

  return <div className='background-grid' style={getOffset(props.offset)}>
    <svg className='grid-pattern' width="100%" height="100%">

      <defs>
        <pattern id='ptgrid' x="0"  y="0" width={horizontal} height={vertical} patternUnits="userSpaceOnUse">
          <rect className='line horizontal' x="0" y="0" width={horizontal} height={weight} />
          {parts.map((w, n) => {
            let x = w * n
            let className = 'line vertical'
            if (n === 0)
              className += ' major'
            else
              className += ' minor'
            return <rect key={n} className={className} x={x} y="0" width={weight} height={vertical} />
          })}
        </pattern>
      </defs>

      <rect fill="url(#ptgrid)" width="100%" height="100%" />

    </svg>
  </div>
}

export default Grid
