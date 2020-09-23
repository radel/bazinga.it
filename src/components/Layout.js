import React from "react"
import "../styles/main.css"
import Footer from "./Footer"
import Header from "./Header"
import { MDXProvider } from "@mdx-js/react"
import Gallery from "react-photo-gallery"

const ImageGallery = ({ images }) => {
  console.log(images)
  return (
    <div className="w-full block">
      <Gallery photos={images} />
    </div>
  )
}

const shortcodes = { Gallery: ImageGallery }

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto max-w-4xl px-4 flex flex-wrap">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
export { ImageGallery }
