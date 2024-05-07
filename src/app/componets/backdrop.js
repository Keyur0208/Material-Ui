import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useState } from "react"


export default function Backdrop_com()
{
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };

    return(
        <>  
          <Button onClick={handleOpen}
          variant="outlined" color="success" >Show backdrop</Button>

          <Backdrop
          open={open}
          sx={{ color:'red', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          onClick={handleClose}
          >
            <CircularProgress color="success"  />
          </Backdrop>

        </>
    )
}