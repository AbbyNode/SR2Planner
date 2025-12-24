import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Help() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="text.secondary" variant="body2" onClick={handleOpen}>
        Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={style}>
          <Typography variant="body2" fontWeight={600}  paddingLeft={1}>
            This project is a fork.
          </Typography>
          <Divider />
          <br />
          <Typography>
            This fork: https://github.com/AbbyNode/SR2Planner
            <br />
            Original: https://github.com/SR2Planner/SR2Planner
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
