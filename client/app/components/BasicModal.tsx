import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface BasicModal {
  children: React.ReactNode;
  startIcon: React.ReactNode;
  buttonText: string;
  title: string;
  btnSize: "small" | "medium" | "large";
  btnVariant: "text" | "contained" | "outlined";
}

export default function BasicModal({
  children,
  // onClose,
  startIcon,
  buttonText = "Modal Button",
  title = "Title Here",
  btnSize = "medium",
  btnVariant = "outlined",
}: BasicModal) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size={btnSize}
        variant={btnVariant}
        onClick={handleClickOpen}
        startIcon={startIcon}
      >
        {buttonText}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
