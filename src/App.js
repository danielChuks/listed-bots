import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';
import { robots } from './robots'
// import Card from './Card'

 class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    } 
componentDidMount(){

}
    //this was made up to create an eventfunction
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //(event.target.value) will give us the value of what we input on the seacrhbox.  
    }

    render() {
        
            const filteredRobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className ='tc'>
                <h1 className='f1'>Robodash  Bots</h1>
                <SearchBox searchChange={this.onSearchChange }/>
                <Scroll>
                    <CardList robots={ filteredRobots } />
                </Scroll>                
            </div>
        );
    }
    }
 



export default App;