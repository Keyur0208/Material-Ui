import { Button, Dialog, DialogContentText, DialogTitle,DialogActions, TextField } from "@mui/material";
import { useState } from "react";


export default function DaiLog_Com() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="outlined" color="success" onClick={handleClickOpen} >
                Open Alert Dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContentText
                className="p-5" 
                id="alert-dialog-description">
                     <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}