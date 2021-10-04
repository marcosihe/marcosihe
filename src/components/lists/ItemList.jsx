import React from "react";
import { Avatar } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
//import { deepOrange } from '@mui/material/colors';

const ItemList = (props) => {
  const { name } = props;
  return (
    <ListItem sx={{width: 150}}>
      <ListItemAvatar>
        <Avatar alt={name}>
          <img
            src={`${process.env.PUBLIC_URL}/img/tech-icons/${name}.svg`}
            alt={`${name} logo`}
            width={24}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default ItemList;
