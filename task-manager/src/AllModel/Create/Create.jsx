import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import TestContext from "../../State/Test/TestContext";

const Create = () => {
  const { data, setData, id } = useContext(UseContext);
  const { handleCreate } = useContext(TestContext);
  return (
    <div>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25rem",
          height: "33rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
          display: "flex",
        }}
      >
        <form
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            display: "flex",
          }}
          hidden
          method="post"
        >
          <Stack
            style={{ width: "95%", margin: "0.5rem", textAlign: "center" }}
          >
            <Typography variant="body2" fontSize={"1rem"} color="GrayText">
              Create Task
            </Typography>
          </Stack>
          <Divider
            variant="fullWidth"
            sx={{ width: "100%" }}
            orientation="horizontal"
          />
          <Stack width={"100%"}>
            <Stack width={"100%"} justifyContent={"center"}>
              <Stack alignItems={"center"}>
                <TextField
                  value={data.title}
                  required
                  minRows={2}
                  onClick={(e) => e.target.select()}
                  onChange={(event) => {
                    setData({
                      ...data,
                      title: event.target.value,
                    });
                  }}
                  sx={{
                    margin: "0.5rem 0rem",
                    width: "90%",
                    backgroundColor: "#80808057",
                    input: {
                      color: "white",
                    },
                  }}
                  id="Title"
                  label="Title"
                  variant="filled"
                />
              </Stack>
              <Stack alignItems={"center"}>
                <TextField
                  value={data.description}
                  required
                  minRows={2}
                  onClick={(e) => e.target.select()}
                  onChange={(event) => {
                    setData({
                      ...data,
                      description: event.target.value,
                    });
                  }}
                  sx={{
                    margin: "0.5rem 0rem",
                    width: "90%",
                    backgroundColor: "#80808057",
                    input: {
                      color: "white",
                    },
                  }}
                  id="Title"
                  label="Description"
                  variant="filled"
                />
              </Stack>
            </Stack>
          </Stack>

          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              height: "3rem",
              ":last-child": {
                padding: "0px",
              },
            }}
          >
            <Button
              disabled={!data.title}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "0px 0px 4px 4px",
              }}
              type={"submit"}
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                handleCreate(data.title, data.description);
              }}
            >
              Post
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default Create;
