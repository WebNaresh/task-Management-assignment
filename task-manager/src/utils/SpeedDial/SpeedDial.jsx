import * as React from "react";
import {
  SpeedDialAction,
  SpeedDial,
  Box,
  Badge,
  styled,
  Modal,
} from "@mui/material/";
import {
  AccountCircleOutlined,
  Add,
  Home,
  MarkChatUnread,
  NavigationOutlined,
  NotificationAdd,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { IconButton } from "@mui/material";
import Create from "../../AllModel/Create/Create";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import TestContext from "../../State/Test/TestContext";

const actions = [
  {
    icon: (
      <Link to={"/notification"}>
        {" "}
        <NotificationAdd />
      </Link>
    ),
    name: "Notification",
  },
];

export default function BasicSpeedDial() {
  const { open, setOpen } = useContext(UseContext);
  const { handleCloseCard2, handleOpenCard2 } = useContext(TestContext);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -10,
      top: -10,
      padding: "0 4px",
      background: "#d32f2f",
      color: "white",
    },
  }));
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          zIndex: 12500,
          position: "fixed",
          bottom: 60,
          right: 16,
        }}
      >
        <IconButton
          sx={{
            height: "60px",
            width: "60px",
            backgroundColor: "#b0bec5",
            outline: "4px solid",
          }}
          onClick={handleOpenCard2}
          aria-label=""
        >
          <Add />
        </IconButton>
      </Box>
      <Modal
        open={open.modal2}
        onClose={handleCloseCard2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Create />
      </Modal>
    </>
  );
}
