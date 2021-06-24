import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


 class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        
        } 
  //  we dont need arrow functions when using //componentDidMount because its a javascript function...
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then( users => this.setState({ robots: users })); 
    
}
    //this was made up to create an eventfunction
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //(event.target.value) will give us the value of what we input on the seacrhbox.  
    }

    render() {
        const { robots , searchfield} = this.state;
        const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (robots.length === 0)
            return <h2> Loading.... </h2>   
        else {
           return (
            <div className ='tc'>  
                <h1 className='f1'>Gentle Bots</h1>
                <SearchBox searchChange = {this.onSearchChange }/>
                <Scroll>
                    <CardList robots={ filteredRobots } />      
                </Scroll>                     
                
            </div>
                  );
         }       
        }
    }
    
 



export default App;