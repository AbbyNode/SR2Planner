import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { SLIMES, FOOD_TYPES, getSlimesByFoodType } from "../../data/gameData";

const rowsFruit = getSlimesByFoodType(FOOD_TYPES.FRUIT).map((slime) => ({
  slime: slime.name,
  slimeImage: slime.image,
  food: slime.favoriteFood.name,
  foodImage: slime.favoriteFood.image,
}));

const rowsVeggie = getSlimesByFoodType(FOOD_TYPES.VEGGIE).map((slime) => ({
  slime: slime.name,
  slimeImage: slime.image,
  food: slime.favoriteFood.name,
  foodImage: slime.favoriteFood.image,
}));

const rowsMeat = getSlimesByFoodType(FOOD_TYPES.MEAT).map((slime) => ({
  slime: slime.name,
  slimeImage: slime.image,
  food: slime.favoriteFood.name,
  foodImage: slime.favoriteFood.image,
}));

const rowsNoFav = getSlimesByFoodType(FOOD_TYPES.OTHER).map((slime) => ({
  slime: slime.name,
  slimeImage: slime.image,
  food: slime.favoriteFood.name,
  foodImage: slime.favoriteFood.image,
}));


export default function FavFoods() {
  return (
    <div>
      <Typography variant="body2" align="center" sx={{"marginBottom": "10px"}}>
        Favorite Foods
      </Typography>
      <TableContainer component={Paper} sx={{"marginBottom": "5px"}}>
        <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableBody>
            {rowsFruit.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{"marginBottom": "5px"}}>
      <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableBody>
            {rowsVeggie.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{"marginBottom": "5px"}}>
      <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableBody>
            {rowsMeat.map((row) => (
              <TableRow key={row.slime} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
                <TableCell>
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    witdh="20"
                    height="20"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{"marginBottom": "5px"}}>
      <Table size="small" aria-label="fav foods table" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableBody>
            {rowsNoFav.map((row) => (
              <TableRow key={row.slime} sx={{display:"flex", "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="center">

                  <img
                    srcSet={require(`../../../public/images/${row.slimeImage}`)}
                    src={require(`../../../public/images/${row.slimeImage}`)}
                    alt={row.slime}
                    height="20"
                  />
                </TableCell>
                <TableCell align="center" >
                  <img
                    srcSet={require(`../../../public/images/${row.foodImage}`)}
                    src={require(`../../../public/images/${row.foodImage}`)}
                    alt={row.slime}
                    height="20"
                  />{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
