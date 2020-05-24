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


        <div className="project1-a"> <Img fluid={props.data.room.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Renovated casual living room</p> {Data.room}</p>
       
        <div className="chair2-d"> <Img fluid={props.data.int2.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.int3.childImageSharp.fluid} /></div>
        <div className="halfl"> <Img fluid={props.data.int1.childImageSharp.fluid} /></div>
        <div className="halfr"> <Img fluid={props.data.int4.childImageSharp.fluid} /></div>




      </div >

      <Footer />

    </ div >




  )
}


export const query = graphql`
  query {
   room : file(relativePath: {eq: "room-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:1500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    int1 : file(relativePath: {eq: "int1.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      int2 : file(relativePath: {eq: "int2.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      int3 : file(relativePath: {eq: "int3.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      int4 : file(relativePath: {eq: "int4.jpg"}){
        childImageSharp {
          fluid(maxWidth:1400, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`

