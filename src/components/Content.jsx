import React, { useContext, useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { AppContext } from "../context/AppContext";
import Featured from "./Featured";
import StoryBoard from "./StoryBoard";
import KPI from "./KPI";
import Layouts from "./Layout";

const Content = () => {
  return (
    <div className="mt-5">
      <BasicTabs />
    </div>
  )
}

export default Content

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const customTabStyling = () => {
    return {
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "12px",
            color: "black",
            "&.Mui-selected": {
              color: "black",
              backgroundColor:"white",
              borderRadius:"15px"
            }
    }
}

function BasicTabs() {
  const {tabValue, setTabValue} = useContext(AppContext)

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>    
      <Box sx={{ display:'flex', justifyContent:'center' }}>
        <Tabs value={tabValue} onChange={handleChange}
            aria-label="basic tabs"
            sx={{
                width:'377px',
                borderRadius:'15px',
                backgroundColor:"#DEE1E5",
                display:'flex',
                justifyContent:"space-around",
                "& .MuiTabs-indicator": {
                  height: "0px",
                },
              }}
        >
          <Tab label="Featured" {...a11yProps(0)} sx={customTabStyling}/>
          <Tab label="KPI" {...a11yProps(1)} sx={customTabStyling} />
          <Tab label="Layouts" {...a11yProps(2)}  sx={customTabStyling}/>
          <Tab label="Storyboards" {...a11yProps(3)}  sx={customTabStyling}/>

        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <Featured />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <KPI />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Layouts />
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <StoryBoard />
      </TabPanel>
    </Box>
  );
}

