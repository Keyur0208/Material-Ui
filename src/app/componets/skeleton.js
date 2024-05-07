import { Skeleton } from "@mui/material";

export default function Skelton_Com() {
    return (
        <>
            <Skeleton  variant="circular" sx={{fontSize:'1rem',backgroundColor:'white',width:"3rem",height:"3rem"
            ,marginBottom:'1rem'}}  
            animation="pulse" />
            <Skeleton variant="text" sx={{fontSize:'1rem',backgroundColor:'white'}} />
            <Skeleton variant="text" sx={{fontSize:'1rem',backgroundColor:'white'}} />
            <Skeleton variant="text" sx={{fontSize:'1rem',backgroundColor:'white',marginBottom:'0.5rem'}} />
            <Skeleton variant="rectangular" sx={{fontSize:'1rem',backgroundColor:'white'}}
            height={60} />
        </>
    )
}