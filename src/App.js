import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';

 class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        
    } 
    //we dont need arrow functions when using //componentDidMount because its a javascript function...
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())

    .then( users => this.setState({ robots: users })); 
    
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

        if (this.state.robots.length === 0 ){
            return <h2> Loading.... </h2>
        }else {
            return (
                <div className ='tc'>  
                    <h1 className='f1'>Robodash  Bots</h1>
                    <SearchBox searchChange = {this.onSearchChange }/>
                    <Scroll>
                        <CardList robots={ filteredRobots } />
                    </Scroll>    
                     <h2>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </h2>            
                </div>
                  );
            }
        }
    }
 



export default App;