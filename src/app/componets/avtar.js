import { Mail } from "@mui/icons-material";
import { Avatar, AvatarGroup, Badge } from "@mui/material";
import styled from "styled-components";

export default function Avtar_com() {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px green`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <>
            <div className="flex flex-row flex-wrap gap-5 justify-around" >
                <Avatar src="/logo.jpeg" />
                <Avatar sx={{ bgcolor: 'green' }} >K</Avatar>
                <Avatar
                    alt="Keyur Pansuriya"
                    sx={{ width: 56, height: 56 }}
                    src="/logo.jpeg"
                />
                <AvatarGroup max={10} >
                    <Avatar sx={{ bgcolor: 'blue' }} >T</Avatar>
                    <Avatar sx={{ bgcolor: 'green' }} >O</Avatar>
                    <Avatar sx={{ bgcolor: 'yellow' }} >F</Avatar>
                    <Avatar sx={{ bgcolor: 'red' }} >O</Avatar>
                    <Avatar sx={{ bgcolor: 'black' }} >R</Avatar>
                    <Avatar sx={{ bgcolor: 'pink' }} >Z</Avatar>
                    <Avatar sx={{ bgcolor: 'black' }} >E</Avatar>
                    <Avatar sx={{ bgcolor: 'red' }} >R</Avatar>
                    <Avatar sx={{ bgcolor: 'yellow' }} >O</Avatar>
                </AvatarGroup>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">
                    <Avatar sx={{ bgcolor: 'green' }} >K</Avatar>
                </StyledBadge>
                <Badge badgeContent={4} color="primary" >
                    <Mail className="text-white" />
                </Badge>
            </div>

        </>
    )
}