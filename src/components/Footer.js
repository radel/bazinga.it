import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitleAlt
            siteTitle
            siteCopyright
          }
        }
      }
    `
  )

  const now = new Date()
  const year = now.getFullYear()

  return (
    <div className="w-full md:max-w-4xl mx-auto">
      <div className="p-4 flex flex-wrap space-between items-center border-t border-gray-300 dark:border-gray-700 mt-8">
        &copy; {year} {data.site.siteMetadata.siteCopyright}
        <div className="justify-end w-1/5 mr-0 ml-auto text-right"></div>
      </div>
    </div>
  )
}

export default Footer
