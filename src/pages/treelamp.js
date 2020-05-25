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
        <p className="text4">  <p className="project2H"> Problems </p>{Data.treelamp3}</p>
        <div className="project1-c"> <Img fluid={props.data.tx2.childImageSharp.fluid} /></div>
        <p className="text3">  <p className="project2H"> Lost to stakeholders </p>{Data.treelamp6}</p>
        <div className="project1-g"> <Img fluid={props.data.tx4.childImageSharp.fluid} /></div>
      
        <p className="text3">  <p className="project2H"> Ideate & Conceptualize </p>{Data.treelamp7}</p>
        <div className="project1-b"> <Img fluid={props.data.tx5.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.tx6.childImageSharp.fluid} /></div>
        <div className="project1-b"> <Img fluid={props.data.tx7.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.tx8.childImageSharp.fluid} /></div>

        <p className="text3">  <p className="project2H"> Design criteria </p></p>
        <div className="project1-g"> <Img fluid={props.data.tx9.childImageSharp.fluid} /></div>

        <div className="chair2-d"> <Img fluid={props.data.t5.childImageSharp.fluid} /></div>
        <div className="chair2-d"> <Img fluid={props.data.t10.childImageSharp.fluid} /></div>
        <p className="text2">  <p className="project2H"> 2Axis rotatable </p>{Data.treelamp5}</p>

        <div className="project1-g"> <Img fluid={props.data.t2.childImageSharp.fluid} /></div>
        <p className="text2">  <p className="project2H"> Changable mask </p>{Data.treelamp4}</p>
        <div className="project1-g"> <Img fluid={props.data.t4.childImageSharp.fluid} /></div>
        <div className="halfl"> <Img fluid={props.data.t6.childImageSharp.fluid} /></div>
        <div className="halfr"> <Img fluid={props.data.t7.childImageSharp.fluid} /></div>
        <div className="halfl"> <Img fluid={props.data.t8.childImageSharp.fluid} /></div>
        <div className="halfr"> <Img fluid={props.data.t9.childImageSharp.fluid} /></div>

        <p className="text2">  <p className="project2H"> Lighting effects </p>{Data.treelamp8}</p>
        <div className="project1-g"> <Img fluid={props.data.tx10.childImageSharp.fluid} /></div>
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
    tx2: file(relativePath: {eq: "treelampx2.png"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx4: file(relativePath: {eq: "treelampx4.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx5: file(relativePath: {eq: "treelampx5.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx6: file(relativePath: {eq: "treelampx6.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx7: file(relativePath: {eq: "treelampx7.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx8: file(relativePath: {eq: "treelampx8.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx9: file(relativePath: {eq: "treelampx9.png"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    tx10: file(relativePath: {eq: "treelampx10.png"}){
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


