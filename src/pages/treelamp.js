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


        <div className="project1-a"> <Img fluid={props.data.a.childImageSharp.fluid} /></div>
        <p className="text1"> <p className="project1H"> Outdoor treelamp</p> {Data.treelamp1}</p>

        <div className="chair2-d"> <Img fluid={props.data.t5.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t10.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t2.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t3.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t4.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t6.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t7.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t8.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t9.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t11.childImageSharp.fluid} /></div>


      </div >

      <Footer />

    </ div>




  )
}


export const query = graphql`
  query {
   a: file(relativePath: {eq: "treelamp-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t1: file(relativePath: {eq: "treelamp1.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t2: file(relativePath: {eq: "treelamp2.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t3: file(relativePath: {eq: "treelamp3.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t4: file(relativePath: {eq: "treelamp4.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t5: file(relativePath: {eq: "treelamp5.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t6: file(relativePath: {eq: "treelamp6.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t7: file(relativePath: {eq: "treelamp7.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t8: file(relativePath: {eq: "treelamp8.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t9: file(relativePath: {eq: "treelamp9.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t10: file(relativePath: {eq: "treelamp10.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    t11: file(relativePath: {eq: "treelamp11.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    b: file(relativePath: {eq: "background2.png"}){
        childImageSharp {
          fluid(maxWidth:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`


