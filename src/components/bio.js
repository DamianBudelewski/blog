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
          Happy to see you on my blog! I'm sure you will find something useful here. If you have any questions, don't hesitate to contact me!
          <hr/>
          linkedin.com/in/damianbudelewski/
          <br/>
          damian.budelewski@gmail.com
        </p>
    </div>
  )
}

export default Bio
