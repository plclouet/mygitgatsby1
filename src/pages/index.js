import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      {data.allStrapiOrdonnance.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.lastName}</Link>
          </h2>
          <Img fixed={document.node.imageOrdo.childImageSharp.fixed}/>
          <p>{document.node.firstName}</p>
          <p>{document.node.lastName}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiOrdonnance {
      edges {
        node {
          id
          firstName
          lastName
          imageOrdo {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`