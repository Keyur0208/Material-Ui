"use client"
import { Box, FormControl, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";



export default function FormControl_com() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Box  sx={{ minWidth: 120 }} >
                <FormControl fullWidth   >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        variant="standard"
                        className="bg-white"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    )

}