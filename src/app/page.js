"use client"

import { AccountCircle, AddAPhoto, CheckBox, CloudUpload, DeleteForever, Favorite, LockClockOutlined, } from "@mui/icons-material";
import {  Button, ButtonGroup, Divider, Fab, IconButton, Input, InputAdornment, Rating, Skeleton, TextField, Typography, alertClasses } from "@mui/material";
import React, { useState } from "react";
import HoverRating from "./componets/rating";
import Custome_Icon from "./componets/custome_icon";
import FormControl_com from "./componets/formcontrol";
import Select_com from "./componets/select";
import Slider_com from "./componets/slider";
import TransferList from "./componets/listbox";
import Toogle_Com from "./componets/toggle";
import Avtar_com from "./componets/avtar";
import List_com from "./componets/lists";
import Alert_com from "./componets/alert_com";
import Backdrop_com from "./componets/backdrop";
import DaiLog_Com from "./componets/dialog";
import Skelton_Com from "./componets/skeleton";
import Sanckbar_com from "./componets/snackbar";
import Drawer_com from "./componets/drawer";
import Speed_Dial from "./componets/sppeddial";
import BasicSpeedDial from "./componets/sppeddial";
import HorizontalNonLinearStepper from "./componets/stepper";


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

export default function Home() {

  const [value, setValue] = useState();
  const [hover, Hover] = useState(-1);

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
          <h1 className="text-white text-4xl" >Rating</h1>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5  justify-around " >
          <Rating value={5} color="error" className="bg-white" />
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} disabled className="bg-white" />
          <div className="bg-white" >
            <HoverRating />
          </div>
          <div className="bg-white">
            <Custome_Icon />
          </div>
        </div>
      </div>
      <div>
        <div className="text-center  p-5" >
          <h1 className="text-black bg-white text-4xl" >Select</h1>
        </div>
        <div className="p-5 flex flex-row text-black bg-white flex-wrap gap-5  justify-around">
          <div className="m-5">
            <FormControl_com />
          </div>
          <div className="m-5" >
            <Select_com />
          </div>
        </div>
      </div>
      <div  >
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Slider</h1>
        </div>
        <div className="p-5 text-black bg-white flex flex-row flex-wrap gap-5 justify-around">
          <Slider_com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Text Field</h1>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5  justify-around bg-white">
          <TextField label="Outline" variant="outlined" />
          <TextField label="standard" variant="standard" />
          <TextField error label="Filled" variant="filled" type="password" helperText="Incorrect entry." multiline />
          <Input
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            } />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Tansfer List</h1>
        </div>
        <div className="p-5 flex flex-row flex-wrap gap-5  justify-center">
          <TransferList />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Toogle Button</h1>
        </div>
        <div className="p-5 flex flex-col flex-wrap  items-center  justify-center">
          <Toogle_Com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Avtar</h1>
        </div>
        <div className="p-5">
          <Avtar_com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Divider</h1>
        </div>
        <div className="p-5 bg-white">
          <p>Keyur Pansuriya</p>
          <Divider />
          <p>Keyur Pansuriya</p>
          <Divider />
          <p>Keyur Pansuriya</p>
          <Divider />
          <p>Keyur Pansuriya</p>
          <Divider />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Lists</h1>
        </div>
        <div className="p-5 ">
          <List_com />
        </div>
      </div>
      <Typography className="text-white" >H1 Heading</Typography>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Alert</h1>
        </div>
        <div className="p-5 ">
          <Alert_com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >BackDrop</h1>
        </div>
        <div className="p-5 ">
          <Backdrop_com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Dialog</h1>
        </div>
        <div className="p-5 ">
          <DaiLog_Com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >Skelton</h1>
        </div>
        <div className="p-5 ">
          <Skelton_Com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >
            Snackbar</h1>
        </div>
        <div className="p-5 ">
          <Sanckbar_com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >
            Drawer</h1>
        </div>
        <div className="p-5 ">
          <Drawer_com />
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >
           Speed Dial</h1>
        </div>
        <div className="p-5 ">
          <BasicSpeedDial/>
        </div>
      </div>
      <div>
        <div className="text-center text-white p-5" >
          <h1 className="text-4xl" >
           Stepper</h1>
        </div>
        <div className="p-5 ">
          <HorizontalNonLinearStepper/>
        </div>
      </div>
    </main>
  );
}
