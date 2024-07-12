import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
max-width: 400px;

figcaption {
font-style: italic;
}
`

export default function Figure({imageURL, caption}) {
    return (
      <StyledFigure>
      <img src={imageURL}/>
      <figcaption>Awesome pic Taken on {caption}</figcaption>
    </StyledFigure>
    )
  }