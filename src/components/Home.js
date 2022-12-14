import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        title="Model 3"
        description= "Order Online for Touchless Delivery"
        bgImg= "model-3.jpg"
        leftBtnText= "Custom Order"
        rightBtnText= "Existing Inventory"
      />
      <Section 
        title="Model Y"
        description= "Order Online for Touchless Delivery"
        bgImg= "model-y.jpg"
        leftBtnText= "Custom Order"
        rightBtnText= "Existing Inventory"
       />
      <Section 
        title="Model S"
        description= "Order Online for Touchless Delivery"
        bgImg= "model-s.jpg"
        leftBtnText= "Custom Order"
        rightBtnText= "Existing Inventory"
      />
      <Section 
        title="Model X"
        description= "Order Online for Touchless Delivery"
        bgImg= "model-x.jpg"
        leftBtnText= "Custom Order"
        rightBtnText= "Existing Inventory"
      />
      <Section 
        title="Solar Panels"
        description= "Lowest Cost Panels in America"
        bgImg= "solar-panel.jpg"
        leftBtnText= "Order Now"
        rightBtnText= "Learn More"
      />
      <Section 
        title="Solar Roof"
        description= "Produce Clean Energy From Your Roof"
        bgImg= "solar-roof.jpg"
        leftBtnText= "Order Now"
        rightBtnText= "Learn More"
      />
      <Section 
        title="Accessories"
        description= ""
        bgImg= "accessories.jpg"
        leftBtnText= "Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`