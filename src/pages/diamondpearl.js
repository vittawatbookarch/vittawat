import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"


import "../components/style.css"
import Data from "../data/data.yml"
import Header2 from "../components/header2"
import Footer from "../components/footer"


export default (props) => {
  console.log(props.data)
  return (

    <div className="indexcontainer">

      <Header2 />


      <div className="grid-container2">


        <div className="project1-a"> <Img fluid={props.data.diamondpearl.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Diamond pearl</p> {Data.diamondpearl}</p>

        <p className="text2">  <p className="project2H"> Component </p>{Data.diamondpearl2}</p>
        <div className="project1-b"> <Img fluid={props.data.diamondpearl1.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.diamondpearl3.childImageSharp.fluid} /></div>




      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   diamondpearl : file(relativePath: {eq: "diamondpearl-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    diamondpearl1 : file(relativePath: {eq: "diamondpearl1.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      diamondpearl3 : file(relativePath: {eq: "diamondpearl3.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`


