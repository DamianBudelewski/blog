/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
        <p>
          Hi! I'm Damian, I work as Infrastructure Engineer. I manage AWS/Azure cloud, automate deploy with CI/CD pipelines and other stuff. I post here my thoughts on interesting topics or explanaition on how things work that I reasearch recently.
        </p>
    </div>
  )
}

export default Bio
