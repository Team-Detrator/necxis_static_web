"use client";
import { Box, Typography } from "@mui/material";
import { ParallaxLayer } from '@react-spring/parallax'
import Image from "next/image";
import { useSpring, animated, useChain, useSpringRef, useInView } from '@react-spring/web';

const images = [
    // "/landing_assets/graphics/multicultural-communities2.png",
    "/landing_assets/graphics/winner_graphic.png",
    "/landing_assets/graphics/ideas-and-inspiration-in-learning-and-education.png",
    // "/landing_assets/graphics/people-talking.png",
    // "/landing_assets/graphics/healthy-life-daily-activity.png",
    // "/landing_assets/graphics/multicultural-communities.png",
]
export default function FirstScreen() {


    return (
        <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                position: "relative",
                // backgroundImage: `${images.map(img => `url("${img}")`).join(",")}`,
                // backgroundPosition: "right center, top left",
                // backgroundSize: "100px 100px, 150px 150px, 50px 50px",
                // backgroundRepeat: no-repeat, no-repeat, no-repeat,
            }}
        >
            <Box component={"section"}>
                <Box
                    sx={{
                        display: "inline-flex",
                        gap: 1,
                        fontSize: '7rem',
                        fontFamily: `"Nunito", sans-serif`,
                        fontWeight: "bolder",
                    }}
                    component={"h1"}
                >

                    <Box sx={{ color: "#667eea" }} component={"span"}>
                        Join
                    </Box>
                    <Box sx={{ color: "#764ba2" }} component={"span"}>
                        Post
                    </Box>
                    <Box sx={{ color: "#38ef7d" }} component={"span"}>
                        Win
                    </Box>


                </Box>
                <Box textAlign={'center'} mt={10}>
                    <Typography color={'green'} component={"h1"} fontSize={30}>Launching Soon...</Typography>
                </Box>
                {/* <Box
                    sx={{
                        position: "absolute",
                        width: "80%",
                        height: "100%",
                        bgcolor: 'red'
                    }}
                >
                    <Box sx={{ position: "absolute", top: 0, left: 0 }}>
                        <Image
                            src="/landing_assets/graphics/healthy-life-daily-activity.png"
                            alt="healthy-life"
                            width={100}
                            height={100}
                        />
                    </Box>

                    <Box sx={{ position: "absolute", right: 0 }}>
                        <Image
                            src="/landing_assets/graphics/ideas-and-inspiration-in-learning-and-education.png"
                            alt="ideas"
                            width={200}
                            height={200}
                        />
                    </Box>

                    <Box sx={{ position: "absolute", bottom: 0 }}>
                        <Image
                            src="/landing_assets/graphics/multicultural-communities.png"
                            alt="multicultural-communities"
                            width={200}
                            height={200}
                        />
                    </Box>

                    <Box sx={{ position: "absolute", left: 0 }}>
                        <Image
                            src="/landing_assets/graphics/multicultural-communities2.png"
                            alt="healthy-life"
                            width={100}
                            height={100}
                        />
                    </Box>

                    <Box>
                        <Image
                            src="/landing_assets/graphics/people-talking.png"
                            alt="healthy-life"
                            width={100}
                            height={100}
                        />
                    </Box>
                </Box> */}

            </Box>

        </ParallaxLayer>

    )
}