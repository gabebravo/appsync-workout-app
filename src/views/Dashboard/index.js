import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { getUserWorkouts } from '../../queries';
import { Mutation } from 'react-apollo'
import { ADD_WORKOUT } from '../../mutations';
import Button from '@material-ui/core/Button';
import Header from '../shared/Header';
import WorkoutList from './components/WorkoutList';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class Dashboard extends Component {

  sortWorkouts = workouts => [...workouts].sort( (a,b) => 
  moment.utc(b.date).valueOf() - moment.utc(a.date).valueOf());

  render() {
    const { match, classes } = this.props
    return (
      <Query query={getUserWorkouts} variables={{ id: match.params.userId }}>
        {({ data }) => (
          <div>
            <Header user={match.params.userId} />
            <div>
              <Mutation mutation={ADD_WORKOUT}
                refetchQueries={() => {
                  return [{ query: getUserWorkouts }];
                }}
              >
                {createWorkout => (
                  <Button color="primary" autoFocus 
                    onClick={() => createWorkout({ 
                      variables: {
                        input: {
                          userId: match.params.userId,
                          date: moment().format('YYYY-MM-DD')
                        }
                      }
                  })}>
                    Add Workout
                  </Button>
                )}
              </Mutation>
            </div>
            {
              data.listWorkouts && data.listWorkouts.items ? 
                <WorkoutList workouts={ this.sortWorkouts(data.listWorkouts.items) } /> : 
                <div className={classes.root}>
                  <LinearProgress color="secondary" /><br />
                  <LinearProgress /><br />
                </div>
            }
          </div>
        )}
      </Query>
    )
  }
}

export default withStyles(styles)(Dashboard);