import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useState } from 'react';
import { insertionSort } from "./InsertionSort.js"

const Element = styled.div(({height, current}) => (`
    background: ${current ? 'red' : 'green'} ;
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
            index: 0
        }
    }

    componentDidMount() {
        const array = Array.from({length: 100}, (x, i) => Math.random()*200);
        
        console.log(array);

        this.setState({
            array: array, 
        });

        setTimeout(
           this.change, 100
        );
    }

    change = () => {
        let [index, isSorted, updatedArray] = insertionSort(this.state.array)
        console.log(this.state.index, index, isSorted)
        this.setState({
            array: updatedArray, 
            index: index
        });

        if (!isSorted){
            setTimeout(
                this.change, 10
            );
        }
      };
    


    render() {
        return ( 
            <ElementWrapper onClick={this.change}>
                {this.state.array.map((height,i) => <Element height={height} current={this.state.index === i}/>)}
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
