import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>My site's files</div>
            <table>
                <thead>
                    <tr>
                        <th>absolutePath</th>
                        <th>relativePath</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                        <td>{node.absolutePath}</td>
                        <td>{node.relativePath}</td>
                        <td>{node.extension}</td>
                        <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export const query = graphql`
{
    allFile {
      edges {
        node {
        absolutePath
          relativePath
          extension
          birthTime
        }
      }
    }
  }
`