import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const Homepage = styled.section`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-direction: column;
    >h1{
        font-size: 4rem;
    }
    >div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 5rem;
    }
`

function Home() {
    const nav= useNavigate()
    function handleClick(path:string){
        nav("./"+path)
    }
    return (
    <>
        <Navbar />
        <Homepage>
            <h1>FarmX</h1>
            <div>
                <Button Text="Selling Dashboard" onClick={()=>{console.log("Button Clicked")}}/>
                <Button Text="Buying Profile" onClick={()=>{handleClick("buy")}}/>
            </div>
        </Homepage>
    </>
  )
}

export default Home