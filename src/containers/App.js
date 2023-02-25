import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import axios from 'axios';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchFiled] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [searchfield]);

    const fetchData = async () => {
        try {
            setLoading(true)
            const url = `https://jsonplaceholder.typicode.com/users`;
            const response = await axios.get(url);
            setLoading(false);
            setRobots(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //this was made up to create an eventfunction
    const onSearchChange = (event) => {
        setSearchFiled(event.target.value);
    };

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
        <div className="tc">
            {loading ? (
                <h1> Loading.... </h1>
            ) : (
                <div>
                    <h1 className="f1">Gentle Bots</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )}
        </div>
    );
};

export default App;
