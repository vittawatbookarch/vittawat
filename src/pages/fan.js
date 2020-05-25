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
        <p className="text1"> <p className="project1H"> Extrusion comfort fan</p> {Data.project1}</p>
        <p className="text2">  <p className="project2H"> Problem </p>{Data.fan2}</p>
        <div className="project1-f"> <Img fluid={props.data.fanpb.childImageSharp.fluid} /></div>

        <p className="text2"> Inefficency of natrual wind usability, Uncomfortable thermal condition, Increase electricity cost </p>
        

        <div className="project1-b"> <Img fluid={props.data.fanpb2.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.fanpb3.childImageSharp.fluid} /></div>
        <p className="text2">  <p className="project2H"> Research </p>{Data.fan4}</p>
        <div className="project1-b"> <Img fluid={props.data.fan5.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.fan6.childImageSharp.fluid} /></div>
         <p className="text5">  <p className="project2H"> Best state of comfort </p>{Data.fan5}</p> 
        <p className="text2">  <p className="project2H"> Ideation & Conceptualize </p>{Data.fan7}</p>
        <div className="project1-b"> <Img fluid={props.data.fan9.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.fan10.childImageSharp.fluid} /></div>

        <p className="text2"> {Data.fan6}</p>
        <div className="project1-b"> <Img fluid={props.data.fan7X.childImageSharp.fluid} /></div>
        <div className="project1-c"> <Img fluid={props.data.fan8X.childImageSharp.fluid} /></div>
        
        <p className="text2">  <p className="project2H"> Design </p></p>

        <div className="project1-g"> <Img fluid={props.data.fand4.childImageSharp.fluid} /></div>

        <p className="text2"> {Data.fan8}</p>
        <div className="project1-g"> <Img fluid={props.data.fand3.childImageSharp.fluid} /></div>
        <div className="project1-g"> <Img fluid={props.data.fandx2.childImageSharp.fluid} /></div>
        <p className="text2"> {Data.fan9}</p>
        <div className="project1-g"> <Img fluid={props.data.fandx7.childImageSharp.fluid} /></div>

        <div className="project1-g"> <Img fluid={props.data.fand5.childImageSharp.fluid} /></div>
        <div className="project1-g"> <Img fluid={props.data.fand6.childImageSharp.fluid} /></div>

        
      </div >

      <Footer />

    </ div>




  )
}


export const query = graphql`
  query {
   a: file(relativePath: {eq: "fans-cover.jpg"}){
      childImageSharp {
        fluid(maxWidth:600, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    fanpb: file(relativePath: {eq: "fanproblem.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fanpb2: file(relativePath: {eq: "fanproblem2.jpg"}){
        childImageSharp {
          fluid(maxWidth:1200, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fanpb3: file(relativePath: {eq: "fanproblem3.jpg"}){
        childImageSharp {
          fluid(maxWidth:1200, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fan5: file(relativePath: {eq: "fan5.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fan6: file(relativePath: {eq: "fan6.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fan7X: file(relativePath: {eq: "fan7.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fan8X: file(relativePath: {eq: "fan8.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fan9: file(relativePath: {eq: "fan9.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fan10: file(relativePath: {eq: "fan10.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fandx2: file(relativePath: {eq: "fand2.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fand3: file(relativePath: {eq: "fand3.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fand4: file(relativePath: {eq: "fand4.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fand5: file(relativePath: {eq: "fand5.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fand6: file(relativePath: {eq: "fand6.jpg"}){
        childImageSharp {
          fluid(maxWidth:600, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fandx7: file(relativePath: {eq: "fand7.jpg"}){
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


