import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "react-photo-gallery"

export default () => {
  const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            fluid(maxHeight: 700) {
              src
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes.map((photo) => {
    return {
      src: photo.childImageSharp.fluid.src,
      width: photo.childImageSharp.fluid.presentationWidth,
      height: photo.childImageSharp.fluid.presentationHeight,
    }
  })
  console.log(images)
  return (
    <div className="w-full block">
      <Gallery photos={images} />
    </div>
  )
}
