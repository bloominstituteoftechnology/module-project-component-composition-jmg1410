import React from "react"

export default function Figure({imageURL, caption}) {
    return (
      <figure>
      <img src={imageURL}/>
      <figcaption>Awesome pic Taken on {caption}</figcaption>
    </figure>
    )
  }