"use client"

import { AddAPhoto, CheckBox, CloudUpload, DeleteForever, Favorite, FavoriteBorder, FileCopyOutlined, LockClockOutlined, SaveAlt, TravelExplore } from "@mui/icons-material";
import { Button, ButtonGroup, Fab, IconButton, Rating } from "@mui/material";
import styled from "styled-components";

export default function Home() {

  const VisullyHidden = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  })

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <main>
      <div>
        <div className="text-center p-5" >
          <h1 className="text-white text-4xl" >Button</h1>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5  justify-around " >
          <Button variant="text" >Simple Button</Button>
          <Button variant="contained" >Contained</Button>
          <Button variant="outlined" >Outline</Button>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5 justify-around " >
          <Button color="error" variant="contained">success</Button>
          <Button color="success" variant="contained">Error</Button>
          <Button color="info" variant="contained">info</Button>
          <Button color="primary" variant="contained">Primary</Button>
          <Button color="secondary" variant="contained">secondary</Button>
          <Button color="warning" variant="contained">warning</Button>
          <Button color="inherit" variant="contained">inherit</Button>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5 justify-around " >
          <Button size="lg" color="error" startIcon={<DeleteForever />} variant="contained" >Start Icon</Button>
          <Button size="lg" color="error" endIcon={<DeleteForever />} variant="contained" >End Icon</Button>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5 justify-around " >
          <IconButton size="large">
            <LockClockOutlined color="success" />
          </IconButton>
          <IconButton size="large" >
            <DeleteForever color="error" />
          </IconButton>
          <Button startIcon={<CloudUpload />} variant="contained" size="lg"  >
            UPLOAD FILE
          </Button>
        </div>
      </div>
      <div>
        <div className="text-center p-5" >
          <h1 className="text-white text-4xl" >Button Group</h1>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5  justify-around " >
          <ButtonGroup color="error" variant="contained" >
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
          <ButtonGroup color="success" variant="outlined" >
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
          <ButtonGroup color="secondary" orientation="vertical" variant="outlined" >
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <div className="text-center p-5" >
          <h1 className="text-white text-4xl" >Checkbox</h1>
          <div className="p-5 flex flex-row flex-wrap gap-5  justify-around " >
            <CheckBox color="success" aria-label='Checkbox demo' />
            <CheckBox {...label} color="error" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </div>
        </div>
      </div>
      <div>
        <div className="text-center p-5" >
          <h1 className="text-white text-4xl" >Floating Action Button</h1>
          <div className="p-5 flex flex-row flex-wrap gap-5  justify-around " >
            <Fab color="info" >
              <AddAPhoto />
            </Fab>
            <Fab color="error" >
              <Favorite />
            </Fab>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center p-5" >
          <h1 className="text-white text-4xl" >Floating Action Button</h1>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5  justify-around " >
          <Rating value={5} color="error" />
        </div>
      </div>
    </main>
  );
}
