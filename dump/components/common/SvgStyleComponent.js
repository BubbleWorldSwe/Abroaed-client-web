import { Box } from '@mui/material';
import React from 'react'

function SvgStyleComponent() {
  return (
    <>
     <Box position="absolute" top={0} left={0} >
        <svg width="166" height="418" viewBox="0 0 166 418" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <rect width="138.079" height="138.079" rx="20" transform="matrix(0.706265 0.707947 0.706265 -0.707947 -97.8672 320.248)" fill="#33393e"></rect>
          <rect width="233.133" height="233.133" rx="20" transform="matrix(0.708 0.706213 0.708 -0.706213 -165 164.641)" fill="#33393e"></rect>
        </svg>
      </Box>
      <Box position="absolute" bottom={0} right={0} >
        <svg width="166" height="418" viewBox="0 0 166 418" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(180 83 209)">
            <rect width="138.079" height="138.079" rx="20" transform="matrix(0.706265 0.707947 0.706265 -0.707947 -97.8672 320.248)" fill="#33393e"></rect>
            <rect width="233.133" height="233.133" rx="20" transform="matrix(0.708 0.706213 0.708 -0.706213 -165 164.641)" fill="#33393e"></rect>
          </g>
        </svg>
      </Box>
    </>
  )
}

export default SvgStyleComponent;