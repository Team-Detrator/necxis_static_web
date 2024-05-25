"use client";
import { Box, Paper, Typography } from "@mui/material";
import { ParallaxLayer } from '@react-spring/parallax'
import Image from "next/image";

export default function SecondScreen() {

  return (
    <ParallaxLayer
      // sticky={{ start: 1, end: 2 }}
      offset={1}
      style={{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-center',
        backgroundColor: "#d9e4f5",
      }}
    >

      <Box display={"flex"} width={"inherit"} component={"section"}>
        <Paper
          elevation={0}
          sx={{
            width: "inherit",
            p: 8,
            m: 1,
            fontFamily: `"Nunito", sans-serif`,
            fontWeight: "bolder",
            backgroundColor: "transparent",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >

            <Box>
              <Box color={"#667eea"} component={"h1"} fontSize={'6rem'} m={0}>
                Join Pursuit
              </Box>
              <Box>
                <Typography>
                  Welcome to Pursuit, where fun challenges bring people together!
                </Typography>
              </Box>
            </Box>
            <Box>
              <Image
                src="/landing_assets/graphics/join_graphic.png"
                alt="join_graphic"
                width={400}
                height={400}
                priority={false}
                loading="lazy"
                style={{
                  width: "auto",
                  height: "auto",
                  mixBlendMode: "darken"
                }}
              />
            </Box>
          </Box>
        </Paper>
      </Box>



    </ParallaxLayer>

  )
}