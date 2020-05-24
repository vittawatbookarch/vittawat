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


        <div className="project1-a"> <Img fluid={props.data.treehouse.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Kids treehouse</p> {Data.treehouse1}</p>
      
        <div className="halfl"> <Img fluid={props.data.th1.childImageSharp.fluid} /></div>
        <div className="halfr"> <Img fluid={props.data.th2.childImageSharp.fluid} /></div>
        <div className="halfl"> <Img fluid={props.data.th3.childImageSharp.fluid} /></div>
        <div className="halfr"> <Img fluid={props.data.th4.childImageSharp.fluid} /></div>
        <div className="halfl"> <Img fluid={props.data.th5.childImageSharp.fluid} /></div>
        <div className="halfr"> <Img fluid={props.data.th6.childImageSharp.fluid} /></div>





      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   treehouse: file(relativePath: {eq: "treehouse-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    th1 : file(relativePath: {eq: "treehouse1.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      th2: file(relativePath: {eq: "treehouse2.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      th3 : file(relativePath: {eq: "treehouse3.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      th4: file(relativePath: {eq: "treehouse4.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      th5 : file(relativePath: {eq: "treehouse5.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      th6: file(relativePath: {eq: "treehouse6.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`