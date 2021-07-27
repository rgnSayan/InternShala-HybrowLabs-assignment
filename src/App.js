import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { useQuery } from 'react-query';
import Data from './Components/Data'
import Users from './Components/Users'
import axios from 'axios'

function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      'https://swapi.dev/api/people/'
    );
    return data;
  });
}

function App() {

  const { status, data, isLoading } = usePosts();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/users/:name">
            <Users data={data?.results} />
          </Route>
          <Route path="/">
            {isLoading ? "Loading" : <Data data={data?.results} status={status} />}
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
