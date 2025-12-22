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


// Relative coordinates (%) within each area card
const plotsGully = [
  { id: "gu1", top: "35%", left: "40%" },
  { id: "gu2", top: "53%", left: "6%" },
  { id: "gu3", top: "53%", left: "27%" },
  { id: "gu4", top: "57%", left: "65%" },
  { id: "gu5", top: "88%", left: "40%" },
];

const plotsTidepools = [
  { id: "tp1", top: "35%", left: "31%" },
  { id: "tp2", top: "38%", left: "78%" },
  { id: "tp3", top: "65%", left: "51%" },
  { id: "tp4", top: "65%", left: "74%" },
  { id: "tp5", top: "88%", left: "78%" },
];

const plotsConservatory = [
  { id: "cv1", top: "35%", left: "10%" },
  { id: "cv2", top: "35%", left: "29%" },
  { id: "cv3", top: "74%", left: "87%" },
  { id: "cv4", top: "88%", left: "87%" },
  { id: "cv5", top: "74%", left: "29%" },
  { id: "cv6", top: "88%", left: "10%" },
  { id: "cv7", top: "88%", left: "29%" },
  { id: "cv8", top: "88%", left: "48%" },
];

const plotsArchway = [
  { id: "aw1", top: "20%", left: "17%" },
  { id: "aw2", top: "100%", left: "0%" },
  { id: "aw3", top: "40%", left: "44%" },
  { id: "aw4", top: "67%", left: "66%" },
  { id: "aw5", top: "115%", left: "60%" },
];

const plotsDen = [
  { id: "dn1", top: "51%", left: "3%" },
  { id: "dn2", top: "36%", left: "19%" },
  { id: "dn3", top: "102%", left: "13%" },
  { id: "dn4", top: "103%", left: "35%" },
  { id: "dn5", top: "87%", left: "66%" },
];

const plotsDigsite = [
  { id: "ds1", top: "0%", left: "8%" },
  { id: "ds2", top: "82%", left: "3%" },
  { id: "ds3", top: "114%", left: "3%" },
  { id: "ds4", top: "138%", left: "18%" },
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