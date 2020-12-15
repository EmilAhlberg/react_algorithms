//import './App.css';
import SortVisualizer from './SortVisualizer.js'
import SelectionBar from './SelectionBar.js'
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';



const BoxStyled = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants}))`
    display: flex;
    background: blue;
    width: 150px;
    height: 150px;
  `;

  const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100vw;
  height: 100vh;
`;


const variants = {
  visible: { opacity: 1, transition: { duration: 3 } },
  hidden: { opacity: 0 }
};

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      algorithms : ['insertionsort', 'othersort'],
      active: 'othersort'
    }
  }

  update = (state) => {
    this.setState({active: state})
  }



  render = () => {
    return (
      <Box>
        {this.state.active}
        <SelectionBar options={this.state.algorithms} toggle={this.update}/>
        <BoxStyled animate="visible"/>
        <SortVisualizer index={this.state.active === 'insertionsort' ? 0 : 1}/>
      </Box>
      )
  }

}

export default App;
