"use client"
import { Button, Snackbar } from "@mui/material";
import { useState } from "react";

export default function Sanckbar_com() {

    const [open, setOpen] = useState(false);

    function handleClike() {
        setOpen(open)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
        </>

    );


    return (
        <>
            <Button onClick={handleClike} >Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
            />
        </>
    )
}