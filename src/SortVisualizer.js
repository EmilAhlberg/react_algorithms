import { motion } from 'framer-motion';
import styled from 'styled-components';
import React, { useState } from 'react';
import { insertionSort } from "./InsertionSort.js"

const Element = styled.div(({height, current}) => (`
    background: ${current ? 'red' : 'green'};
    width: 0.3vw;
    height: ${height}px;
    align-self: flex-end;
    margin: 1px;
`));

const ElementWrapper = styled.div`
    display: flex;
    background: white;
    flex-direction: row;
    justify-content: center;
`;

class SortVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            index: 0,
            algorithm: -1
        }
    }

    componentDidMount() {
        const array = Array.from({length: 100}, (x, i) => Math.random()*200);
        
        console.log(array);

        this.setState({
            array: array, 
        });
    }

    change = () => {
        if(this.props.index === 0) {            
            let [index, isSorted, updatedArray] = insertionSort(this.state.array)
            this.setState({
                array: updatedArray, 
                index: index
            });

            if (!isSorted){
                setTimeout(
                    this.change, 8
                );
            }
        }
    };
    


    render() {
        if(this.state.algorithm != this.props.index) {
            this.change()
            this.setState({algorithm: this.props.index})
        }


        return ( 
            <ElementWrapper onClick={this.change}>
                {this.state.array.map((height,i) => <Element height={height} current={this.state.index === i}/>)}
            </ElementWrapper>
        )
    }
}

export default SortVisualizer;
