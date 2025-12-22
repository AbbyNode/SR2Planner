import * as React from "react";
import { useState, useEffect } from "react";
import Plot from "../planning/Plot";
import FreeRange from "../planning/FreeRange";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const plotsGully = [
  { id: "gu1", top: "5%", left: "50%" },
  { id: "gu2", top: "30%", left: "10%" },
  { id: "gu3", top: "30%", left: "35%" },
  { id: "gu4", top: "35%", left: "75%" },
  { id: "gu5", top: "75%", left: "50%" },
];

const plotsTidepools = [
  { id: "tp1", top: "10%", left: "35%" },
  { id: "tp2", top: "10%", left: "75%" },
  { id: "tp3", top: "40%", left: "50%" },
  { id: "tp4", top: "40%", left: "70%" },
  { id: "tp5", top: "75%", left: "75%" },
];

const plotsConservatory = [
  { id: "cv1", top: "10%", left: "15%" },
  { id: "cv2", top: "10%", left: "30%" },
  { id: "cv3", top: "55%", left: "85%" },
  { id: "cv4", top: "75%", left: "85%" },
  { id: "cv5", top: "55%", left: "30%" },
  { id: "cv6", top: "75%", left: "15%" },
  { id: "cv7", top: "75%", left: "30%" },
  { id: "cv8", top: "75%", left: "50%" },
];

const plotsArchway = [
  { id: "aw1", top: "10%", left: "25%" },
  { id: "aw2", top: "75%", left: "10%" },
  { id: "aw3", top: "30%", left: "50%" },
  { id: "aw4", top: "55%", left: "70%" },
  { id: "aw5", top: "75%", left: "65%" },
];

const plotsDen = [
  { id: "dn1", top: "35%", left: "10%" },
  { id: "dn2", top: "20%", left: "25%" },
  { id: "dn3", top: "75%", left: "20%" },
  { id: "dn4", top: "75%", left: "40%" },
  { id: "dn5", top: "65%", left: "70%" },
];

const plotsDigsite = [
  { id: "ds1", top: "5%", left: "20%" },
  { id: "ds2", top: "60%", left: "15%" },
  { id: "ds3", top: "75%", left: "15%" },
  { id: "ds4", top: "90%", left: "25%" },
];

const freeRange = [
  { id: "frGu", top: "0%", left: "85%" },
  { id: "frTp", top: "0%", left: "85%" },
  { id: "frCv", top: "0%", left: "85%" },
  { id: "frAw", top: "0%", left: "85%" },
  { id: "frDn", top: "0%", left: "85%" },
  { id: "frDs", top: "0%", left: "85%" },
];

const areas = [
  {
    name: "The Gully",
    image: "areas/gully.png",
    areaMap: "./gully.png",
    color: "rgba(212, 128, 35, 1)",
    plots: plotsGully,
    freeRange: freeRange.filter(fr => fr.id === "frGu"),
  },
  {
    name: "The Tidepools",
    image: "areas/tidepools.png",
    areaMap: "./tidepools.png",
    color: "rgba(241, 93, 155, 1)",
    plots: plotsTidepools,
    freeRange: freeRange.filter(fr => fr.id === "frTp"),
  },
  {
    name: "The Conservatory",
    image: "areas/conservatory.png",
    areaMap: "./conservatory.png",
    color: "rgba(5, 92, 163, 1)",
    plots: plotsConservatory,
    freeRange: freeRange.filter(fr => fr.id === "frCv"),
  },
  {
    name: "The Archway",
    image: "areas/archway.png",
    areaMap: "./archway.png",
    color: "rgba(204, 212, 250, 1)",
    plots: plotsArchway,
    freeRange: freeRange.filter(fr => fr.id === "frAw"),
  },
  {
    name: "The Den",
    image: "areas/den.png",
    areaMap: "./den.png",
    color: "rgba(123, 104, 255, 1)",
    plots: plotsDen,
    freeRange: freeRange.filter(fr => fr.id === "frDn"),
  },
  {
    name: "The Digsite",
    image: "areas/digsite.png",
    areaMap: "./digsite.png",
    color: "rgba(145, 126, 171, 1)",
    plots: plotsDigsite,
    freeRange: freeRange.filter(fr => fr.id === "frDs"),
  },
];

const STORAGE_KEY = 'sr2-planner-data';

const saveToLocalStorage = (plotPlans) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plotPlans));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return {};
  }
};


const AreaCard = ({ area, index, plotPlans, updatePlotPlan }) => (
  <Grid item xs={4} key={area.name}>
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          background: area.color,
          pb: index === 0 ? "0px" : undefined,
          position: "relative",
        }}
      >
        <Container sx={{
          display: "flex",
          flexDirection: "row",
          background: area.color,
        }}>
          <CardMedia
            component="img"
            alt={area.name}
            sx={{ padding: "0", width: "40px", objectFit: "contain", marginRight: "10px" }}
            image={require(`../../../public/images/${area.image}`)}
          />
          <Typography
            variant="body1"
            align="center"
            sx={{
              background: "rgba(255, 255, 255, .5)",
              padding: "2px",
              lineHeight: 2,
              alignContent: "center",
              width: "150px",
            }}
          >
            {area.name}
          </Typography>
        </Container>
        <Box
          sx={{
            position: "relative",
            width: "300px",
            alignSelf: index === 0 ? "center" : undefined,
            marginRight: index === 0 ? undefined : "10px",
          }}
        >
          <CardMedia
            component="img"
            alt={`${area.name} area map`}
            sx={{ 
              padding: "0", 
              width: "100%", 
              objectFit: "contain",
              display: "block",
            }}
            image={require(`${area.areaMap}`)}
          />
          {/* Render plots for this area */}
          {area.plots.map((plot) => (
            <Plot 
              key={plot.id} 
              plot={plot} 
              savedPlan={plotPlans[plot.id]}
              onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
            />
          ))}
          {/* Render free range for this area */}
          {area.freeRange.map((plot) => (
            <FreeRange 
              key={plot.id} 
              plot={plot} 
              savedPlan={plotPlans[plot.id]}
              onPlanUpdate={(planData) => updatePlotPlan(plot.id, planData)}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  </Grid>
);

export default function Planner() {
  const [plotPlans, setPlotPlans] = useState({});

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedPlans = loadFromLocalStorage();
    setPlotPlans(savedPlans);
  }, []);

  // Save to localStorage whenever plotPlans changes
  useEffect(() => {
    saveToLocalStorage(plotPlans);
  }, [plotPlans]);

  // Function to update a plot's plan
  const updatePlotPlan = (plotId, planData) => {
    setPlotPlans(prev => ({
      ...prev,
      [plotId]: planData
    }));
  };

  return (
    <div>
      {/* Area Cards with embedded plots */}
      <div>
        <Grid
          container
          spacing={1}
          sx={{
            width: "1000px",
          }}
        >
          {areas.map((area, index) => (
            <AreaCard 
              key={area.name} 
              area={area} 
              index={index} 
              plotPlans={plotPlans}
              updatePlotPlan={updatePlotPlan}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}