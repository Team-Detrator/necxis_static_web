"use client";
import { Box, Paper, Typography } from "@mui/material";
import { ParallaxLayer } from '@react-spring/parallax'
import Image from "next/image";

export default function FifthScreen() {

    return (
        <ParallaxLayer
            // sticky={{ start: 1, end: 2 }}
            offset={4}
            style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: 'flex-center',
                backgroundColor: "#e4f5ff",
            }}
        >

            <Box display={"flex"} width={"inherit"} component={"section"}>
                <Paper
                    elevation={0}
                    sx={{
                        width: "inherit",
                        p: 8,
                        m: 1,
                        fontSize: '7rem',
                        fontFamily: `"Nunito", sans-serif`,
                        fontWeight: "bolder",
                        backgroundColor: "#d9e4f5",
                        // backgroundImage: "linear-gradient(to right, rgb(199 226 238), rgb(203 255 223))",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent"

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
                            <Box color={"#38ef7d"} component={"h1"} fontSize={'6rem'} m={0}>
                                Win
                            </Box>
                            <Box>
                               <Typography>
                                    Get rewarded for your creativity and participation!
                               </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Image
                                src="/landing_assets/graphics/winner_graphic.png"
                                alt="winner_graphic"
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