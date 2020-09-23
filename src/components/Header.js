import React from 'react';
import DarkModeToggle from './DarkModeToggle'
import { useStaticQuery, Link, graphql } from "gatsby"

const Header = ({children}) => {
    const data = useStaticQuery(
        graphql`
        query {
        site {
        siteMetadata {
            siteTitleAlt
            siteTitle
        }
        }
    }
    `
  )
    return (
        <div className="w-full md:max-w-4xl mx-auto">
            <div className="p-4 flex flex-wrap space-between items-center border-b border-gray-300 dark:border-gray-700 mb-8">
                <Link className="font-bold font-monospace" to="/">
                    <span className="dark:text-teal-200 text-teal-800">
                    &lt;
                        { data.site.siteMetadata.siteTitle }
                    &nbsp;/&gt;
                    </span>
                </Link>
                <div className="justify-end w-1/5 mr-0 ml-auto text-right">
                    <DarkModeToggle/>
                </div>
            </div>
        </div>
    )
}

export default Header
