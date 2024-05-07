import { Slider } from "@mui/material";

export default function Slider_com()
{
    const marks = [
        {
          value: 0,
          label: '0°C',
        },
        {
          value: 20,
          label: '20°C',
        },
        {
          value: 37,
          label: '37°C',
        },
        {
          value: 100,
          label: '100°C',
        },
      ];

    return(
        <>
            <Slider
            size="small"
            step={marks.value}
            defaultValue={37}
            marks={marks}
            color="error"
            valueLabelDisplay="on"
            shiftStep={30}
            />
        </>
    )
}