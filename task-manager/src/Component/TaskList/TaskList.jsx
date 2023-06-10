import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UseContext from "../../State/UseState/UseContext";
import { useContext } from "react";
import { Modal } from "@mui/material";
import TestContext from "../../State/Test/TestContext";
import Update from "../../AllModel/Update/Update";

export default function TaskList() {
  const { tasks, setTasks, open } = useContext(UseContext);
  const { handleCloseCard, handleOpenCard, handleDelete } =
    useContext(TestContext);
  return (
    <>
      {tasks.map((v) => {
        return (
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {v?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {v?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleDelete(v.id)} size="small">
                Delete
              </Button>
              <Button
                size="small"
                onClick={() => handleOpenCard(v.id, v.title, v.description)}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        );
      })}
      <Modal
        open={open.modal1}
        onClose={handleCloseCard}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Update />
      </Modal>
    </>
  );
}
