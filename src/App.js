import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/Login'
import NotFound from './views/shared/NotFound'
import Dashboard from './views/Dashboard';
import Workout from './views/Workout';
import WeightChart from './views/Charts/WeightChart';
import BodyWeightChart from './views/Charts/BodyWeightChart';
import CardioChart from './views/Charts/CardioChart';
import ExerciseDef from './views/ExerciseDef';
import AddExercise from './views/AddExercise';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard/:userId" component={Dashboard} />
              <Route exact path="/workout/:workoutId" component={Workout} />
              <Route exact path="/weights/:name/:workoutId" component={WeightChart} />
              <Route exact path="/body-weight/:name/:workoutId" component={BodyWeightChart} />
              <Route exact path="/cardio/:name/:workoutId" component={CardioChart} />
              <Route exact path="/exercise-def" component={ExerciseDef} />
              <Route exact path="/add-exercise/:userId/:workoutId/:date" component={AddExercise} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;