"use client";
import { Box, Paper, Typography } from "@mui/material";
import { ParallaxLayer } from '@react-spring/parallax'
import Image from "next/image";

export default function ThirdScreen() {

    return (
        <ParallaxLayer
            // sticky={{ start: 1, end: 2 }}
            offset={2}
            style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: 'flex-center',
                backgroundAttachment: "fixed"

            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
                component={"section"}
            >
                <Paper
                    sx={{
                        p: 8,
                        m: 1,
                        // fontSize: '5rem',
                        fontFamily: `"Nunito", sans-serif`,
                        fontWeight: "bolder",
                        // backgroundColor: "rgb(199 207 248)",
                        backgroundImage: "linear-gradient(to right, rgb(199 207 248), rgb(203 255 223))",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent"

                    }}
                    elevation={0}
                >
                    <Box component={"h1"}>
                        What is Pursuit? 🤔
                    </Box>
                    <Box
                        sx={{
                            fontSize: '1rem',
                            maxWidth: 800,
                        }}
                    >
                        <Typography>
                            Pursuit is an exciting activity uploaded by an user or entity, where you and others can join in
                            (e.g., capturing and uploading a beautiful sunset in your area or an adorable pic of your lovely pet, etc.).
                            It's a friendly feud where the users with the most engagements on their uploads will receive the pursuit price.
                        </Typography>
                    </Box>
                </Paper>
            </Box>


        </ParallaxLayer>
    )
}