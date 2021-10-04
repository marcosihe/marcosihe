import React from "react";
import { Avatar } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";

const style = {
  border: "1px solid grey",
  p: 2,
  minWidth: 80,
  minWidth: 80,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const ItemList = (props) => {
  const { name } = props;
  return (
    <ListItem sx={{ width: 150 }}>
      <Box sx={style}>
        <ListItemAvatar>
          <Avatar alt={name} sx={{ bgcolor: "white" }}>
            <img
              src={`${process.env.PUBLIC_URL}/img/tech-icons/${name}.svg`}
              alt={`${name} logo`}
              width={24}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} />
      </Box>
    </ListItem>
  );
};

export default ItemList;
