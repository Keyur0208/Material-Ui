"use client"
import { Label } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";


export default function Select_com() {
    const [age, setAge] = useState("")

    function handleChange(event) {
        setAge(event.target.value);
    }

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 80 }} required  >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    autoWidth
                    label="Age"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={17} >17</MenuItem>
                    <MenuItem value={18} >18</MenuItem>
                    <MenuItem value={19} >19</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}