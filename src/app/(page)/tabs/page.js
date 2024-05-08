"use client"

import Alert_com from "@/app/componets/alert_com";
import Skelton_Com from "@/app/componets/skeleton";
import VerticalTabs from "@/app/componets/vartical_tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";


export default function page() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1',backgroundColor:'white' }}   >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList 
                        onChange={handleChange} 
                        textColor="secondary"
                        indicatorColor="secondary"
                        centered={true}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Alert_com/>
                    </TabPanel>
                    <TabPanel value="2">
                        <Skelton_Com  />
                    </TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
            <VerticalTabs/>
        </>
    );

}