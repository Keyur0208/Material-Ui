"use client"
import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight, FormatBold, FormatColorFill, FormatItalic, FormatUnderlined } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";


export default function Toogle_Com() {

    const [alignment, setalignment] = useState('left')

    const handleAlignment = (event, newAligment) => {
        setalignment(newAligment);
    }

    const [font, setFont] = useState('font-bold')

    const fontStyle=(event,newFont)=>{
        setFont(newFont);
    }

    return (
        <>
            <div className="flex gap-5" >
                 <ToggleButtonGroup
                    className="bg-white"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                >
                    <ToggleButton value="left"  >
                        <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center">
                        <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right">
                        <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify">
                        <FormatAlignJustify />
                    </ToggleButton>
                </ToggleButtonGroup>

                

                <ToggleButtonGroup
                    className="bg-white"
                    value={font}
                    exclusive
                    onChange={fontStyle}
                >
                    <ToggleButton value="font-bold"  >
                        <FormatBold/>
                    </ToggleButton>
                    <ToggleButton value="italic">
                        <FormatItalic/>
                    </ToggleButton>
                    <ToggleButton value="underline">
                        <FormatUnderlined/>
                    </ToggleButton>
                    <ToggleButton value="">
                        <FormatColorFill/>
                    </ToggleButton>
                </ToggleButtonGroup>

            </div>

            <br></br>
            <p className={`text-white  text-${alignment} ${font} w-72`}
            >Enjoying success requires the ability to adapt. Only by being open to change will you have a true opportunity to get the most from your talent.
                Enjoying success requires the ability to adapt. Only by being open to change will you have a true opportunity to get the most from your talent.</p>
        </>

    )
}