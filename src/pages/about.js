import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavLinks from "../components/navLinks"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>About</h1>
        <p>I am Jenssen Lee Kang Yuan, a Software Engineer in Singapore. 
          I believe that Software is Eating the World and will continue to do so. 
          And I choose to be a part of it.
        </p> 
        <p>This site is meant to consolidate writings of my experience and lessons learnt from doing tech stuff, 
          and to showcase my prior projects. You can contact me at&nbsp; 
          <span>
            <a href="mailto:jenssen.lee@gmail.com">jenssen.lee@gmail.com</a>
          </span>
          , I&nbsp;
          <span>
            <a href="https://jenlky.wordpress.com/">write</a>
          </span>
          &nbsp;for leisure too.
        </p>
        <p className="social-media">
          <span>
            Github: <a href="https://github.com/helplah">@helplah</a>
          </span>
          <span>
            Twitter: <a href="https://twitter.com/Jenlky">@jenlky</a> 
          </span>
          <span>
            LinkedIn: <a href="https://www.linkedin.com/in/jenlky/">@jenlky</a> 
          </span>
        </p>
        <p>I'm familiar with HTML, CSS, SASS, BootStrap, JavaScript, jQuery, React, React-Router, Redux, 
          VueJS, Material-UI, Nodejs, Express, MongoDB and git.</p>
        <p>At the time of writing, I'm on week 3 of&nbsp; 
          <a href="https://www.coursera.org/learn/algorithms-part1/home/welcome">Princeton Algorithms</a> 
          (<a href="https://github.com/helplah/princeton-algorithms">Github repo</a>)
          a Coursera MOOC that teaches in Java;
          while waiting to join ThoughtWorks JumpStart, a three months coding bootcamp, in May. 
        </p>
        <NavLinks />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`