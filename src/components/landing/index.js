"use client";
import { Box, Container, Typography } from "@mui/material";
import { Parallax } from '@react-spring/parallax'
import { useEffect, useRef, useState } from "react";
import Header from "./header";
import dynamic from 'next/dynamic'


const Screens = [
  dynamic(() => import('./body/FirstScreen'), { ssr: false }),
  // dynamic(() => import('components/landing/body/SecondScreen'), { ssr: false }),
  // dynamic(() => import('components/landing/body/ThirdScreen'), { ssr: false }), // @notForTesting it will be part of final release when public can login
  // dynamic(() => import('components/landing/body/FourthScreen'), { ssr: false }),
  // dynamic(() => import('components/landing/body/FifthScreen'), { ssr: false }),
]

export default function Landing() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null;

  return (
    <Box>
      <Header />

      <Parallax
        pages={Screens.length}
        className="scrollbar scrollbar-transparent-track"
        style={{
          backgroundImage: "linear-gradient(to right, rgb(199 207 248), rgb(203 255 223))"
        }}
      >
        {
          Screens.map((Screen, i)=><Screen key={i} />)
        }
      </Parallax>
    </Box>
  )
}