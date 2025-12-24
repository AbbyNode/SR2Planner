import * as React from "react";
import { useState, useEffect } from "react";
import Plot from "../planning/Plot";
import FreeRange from "../planning/FreeRange";
import { areas } from "../../data/gameData";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
            width: "300px"
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
            image={require(`../../../public/images/${area.image}`)}
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
          {areas.map((area) => (
            <AreaCard 
              key={area.name} 
              area={area}
              plotPlans={plotPlans}
              updatePlotPlan={updatePlotPlan}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}