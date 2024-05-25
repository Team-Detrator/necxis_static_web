"use client";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Sticky from 'react-stickynode';
import AppBar from '@mui/material/AppBar';
// import Link from "next/link";

export default function Header() {

    return (
        <Sticky
            innerZ={999}

        >
            <AppBar
                style={{
                    backgroundImage: "linear-gradient(to right, rgb(199 207 248), rgb(203 255 223))",
                    color: "#000"
                }}
                elevation={0}
            >
                <Box display={'flex'} justifyContent={"space-between"} px={1} alignItems={"flex-end"} pb={2}>
                    <Box>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1, }}>Necxis</Typography>
                    </Box>
                    
                    {/* <Box display={'flex'} gap={3}>
                        {
                            [
                                // { label: "blog" },
                                { label: "privacy", href: "/public/privacy_policy" },
                                { label: "terms", href: "/public/terms_conditions" },
                                // { label: "careers" },
                            ].map((section)=>{
                                return (
                                    <Box key={section.label}>
                                        <Link
                                            // color={"GrayText"}
                                            href={section.href}
                                        >
                                            { section.label}
                                        </Link>
                                    </Box>
                                )
                            })
                        }
                    </Box> */}
                </Box>
            </AppBar>
        </Sticky>
    );
}
