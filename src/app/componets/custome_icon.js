import { FavoriteBorderOutlined, FavoriteRounded, HeartBroken, Lock } from "@mui/icons-material";
import { Rating } from "@mui/material";
import styled from "styled-components";

const StyleRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
})

export default function Custome_Icon() {
    return (
        <StyleRating
            name="Custome Icon"
            icon={<FavoriteRounded />}
            defaultValue={2}
            precision={0.5}
            max={10}            className="text-red-500"
            emptyIcon={<FavoriteBorderOutlined/>}
        />
    )
}