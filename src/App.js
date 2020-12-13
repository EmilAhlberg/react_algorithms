//import './App.css';
import SortVisualizer from './SortVisualizer.js'

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
  background: red;
  width: 150px;
  height: 150px;
`;


const variants = {
  visible: { opacity: 1, transition: { duration: 3 } },
  hidden: { opacity: 0 }
};

function App() {
  return (
  <>
    <BoxStyled animate="visible"/>
    <Box/>
    <SortVisualizer/>
  </>
  )
}

export default App;
