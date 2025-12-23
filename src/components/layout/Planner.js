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
  { id: "tp1", top: "5%", left: "20%" },
  { id: "tp2", top: "10%", left: "58%" },
  { id: "tp3", top: "48%", left: "42%" },
  { id: "tp4", top: "48%", left: "62%" },
  { id: "tp5", top: "75%", left: "58%" },
];

const plotsConservatory = [
  { id: "cv1", top: "8%", left: "6%" },
  { id: "cv2", top: "8%", left: "26%" },
  { id: "cv3", top: "58%", left: "24%" },
  { id: "cv4", top: "58%", left: "75%" },
  { id: "cv5", top: "78%", left: "6%" },
  { id: "cv6", top: "78%", left: "24%" },
  { id: "cv7", top: "78%", left: "42%" },
  { id: "cv8", top: "78%", left: "75%" },
];

const plotsArchway = [
  { id: "aw1", top: "15%", left: "25%" },
  { id: "aw2", top: "26%", left: "52%" },
  { id: "aw3", top: "45%", left: "75%" },
  { id: "aw4", top: "58%", left: "8%" },
  { id: "aw5", top: "68%", left: "68%" },
];

const plotsDen = [
  { id: "dn1", top: "24%", left: "30%" },
  { id: "dn2", top: "32%", left: "10%" },
  { id: "dn3", top: "52%", left: "72%" },
  { id: "dn4", top: "60%", left: "24%" },
  { id: "dn5", top: "60%", left: "44%" },
];

const plotsDigsite = [
  { id: "ds1", top: "5%", left: "38%" },
  { id: "ds2", top: "48%", left: "35%" },
  { id: "ds3", top: "65%", left: "35%" },
  { id: "ds4", top: "82%", left: "48%" },
];

const freeRange = [
  { id: "frGu", top: "2%", left: "80%" },
  { id: "frTp", top: "2%", left: "80%" },
  { id: "frCv", top: "2%", left: "80%" },
  { id: "frAw", top: "2%", left: "80%" },
  { id: "frDn", top: "2%", left: "80%" },
  { id: "frDs", top: "2%", left: "80%" },
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