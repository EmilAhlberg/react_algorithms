import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useState } from 'react';


const Element = styled.div(({height}) => (`
    background: green;
    width: 10px;
    height: ${height}px;
    align-self: flex-end;
    margin: 1px;
`));

const ElementWrapper = styled.div`
    display: flex;
    background: yellow;
    flex-direction: row;
    justify-content: center;
`;

class SortVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            viz: []
        }
    }

    componentDidMount() {
        const array = Array.from({length: 50}, (x, i) => Math.random()*200);
        
        console.log(array);

        this.setState({
            array: array, 
        });
    }

    chane = () => {
        this.setState(state => {
          const array = state.array.concat(this.state.array[this.state.array.length-1] + 1);
     
          return {
            array   
          };
        });
      };
    


    render() {
        return ( 
            <ElementWrapper onClick={this.chane}>
                {this.state.array.map(height => <Element height={height}/>)}
            </ElementWrapper>
        )
    }
}



const SortVisualizer2 = (viz) => {
const [count, setCount] = useState([<Element height={100}/>,<Element height={200}/>,<Element height={300}/>]);
  return(
  <ElementWrapper>
    {viz.map((x) => x)}
  </ElementWrapper>)
}




export default SortVisualizer;
