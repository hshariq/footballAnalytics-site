import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import SearchBar from "../SearchBar/SearchBar";
import ResponsiveAppBar from "../NavBar/NavBarNew";
import Typography from "@mui/material/Typography";
import "./Divider.css";
import UploadVid from './UploadVid.jsx'
import EventDetection from "./EventDetection.jsx";
import SearchMatch from "./SearchMatch.jsx";
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { listAll, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { useEffect } from "react";

export default function Divider() {
  const [searchParams] = useSearchParams();
  const bleh  = searchParams.get('id');
  const id = parseInt(bleh, 10);
  const [imageUrls, setImageUrls] = useState([]);

  

  React.useEffect(() => {
      const fetchImages = async () => {
        const listRef = ref(
          storage,
          "gs://uploadimage-2ed90.appspot.com/upload"
        );
  
        try {
          const res = await listAll(listRef);
          const urls = await Promise.all(
            res.items.map((item) => getDownloadURL(item))
          );
          setImageUrls(urls);
          console.log(urls)
        } catch (error) {
          console.error("Error fetching images: ", error);
        }
      };
      fetchImages();
    }, []);
  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="headingdivider">
        <Typography
          variant="h4"
          noWrap
          component="a"
          sx={{
            mx: "auto",
            fontFamily: "monospace",
            fontWeight: 1500,
            letterSpacing: ".5rem",
            textDecoration: "none",
            color: "#ffffff",
            alignContent: "center",
          }}
        >
          FOOTBALL ANALYTICS
        </Typography>
      </div>

      <Tabs defaultValue={id}>
        <TabsList>
          <Tab value={1}>Match Upload</Tab>
          <Tab value={3}>Event Detection</Tab>
          <Tab value={2}>Search any Match</Tab>
        </TabsList>
        <TabPanel
          value={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
          }}
        >
        <div className="searchbareh">
          <SearchMatch/>
          </div>
        </TabPanel>
        <TabPanel
          value={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
          }}
        >
          <UploadVid />
        </TabPanel>
        <TabPanel
          value={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
          }}
        >
        <EventDetection/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #201a2b;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #0c2222;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #201a2b;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #201a2b;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
}
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: #0A172B;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
  };
  `
);
