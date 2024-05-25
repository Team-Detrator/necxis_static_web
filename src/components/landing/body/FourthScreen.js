"use client";
import { Box, Paper, Typography } from "@mui/material";
import { ParallaxLayer } from '@react-spring/parallax'
import Image from "next/image";

export default function FourthScreen() {
    return (
        <ParallaxLayer
            // sticky={{ start: 1, end: 2 }}
            offset={3}
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
                        fontSize: '7rem',
                        fontFamily: `"Nunito", sans-serif`,
                        fontWeight: "bolder",
                        backgroundColor: "transparent",
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
                            <Image
                                src="/landing_assets/graphics/share_post.jpeg"
                                alt="share_post"
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
                        <Box>
                            <Box color={"#764ba2"} component={"h1"} fontSize={'6rem'} m={0}>
                                Share your Post
                            </Box>
                            <Box>
                                <Typography>
                                    Share your creation on our platform and let everyone see your work.
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Paper>
            </Box>


        </ParallaxLayer>

    )
}