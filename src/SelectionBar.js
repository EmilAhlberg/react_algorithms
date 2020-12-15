import styled from 'styled-components';
import React from 'react';
import { Button } from '@material-ui/core';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import PopupState, { bindHover, bindTrigger, bindMenu } from 'material-ui-popup-state';


const Header = styled.div`
      display: flex;
      background: blue;
      width: 60%;
      height: 10%;
    `;

class SelectionBar extends React.Component {

  
  close = () => {

  }

  /*
  import * as React from "react";
import { motion } from "framer-motion";

export function Example() {
  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: "#fff"
      }}
      whileHover={{ scale: 0.8 }}
    />
  );
}
  */

  render = () => { 
    return(
      <AppBar position="fixed">
         <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">

            <PopupState variant="contained" popupId="popup-menu">
            {(popupState) => (
                <React.Fragment>
                  <MenuIcon {...bindHover(popupState)}>
                    Open Menu
                  </MenuIcon>
                  <Menu {...bindMenu(popupState)}>
                    {this.props.options.map((option) => (  
                      <React.Fragment>
                        <MenuItem onClick={() => this.props.toggle(option)}>{option}</MenuItem>
                      </React.Fragment>
                    ))}
                  </Menu>
                </React.Fragment>
              )} 
            </PopupState>


          </IconButton>
          <Typography variant="h6" color="inherit">
            Visualizations
          </Typography>
        </Toolbar>
    </AppBar>
   
    )
  }
}



export default SelectionBar;