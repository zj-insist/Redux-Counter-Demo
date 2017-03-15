/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(counter)

export default class ReduxTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <App />
        </View>
      </Provider>
    );
  }
}

class Counter extends Component {
  render() {
    const { value, onIncreaseClick,onSubtractClick } = this.props
    return (
      <View>
        <Text>{value}</Text>
        <TouchableOpacity onPress={onIncreaseClick}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubtractClick}>
          <Text>Subtract</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onSubtractClick: () => dispatch(subtractAction)
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter) 

// Action Creator
const INREASE = 'INREASE';
const SUBTRACT = 'SUBTRACT';
const increaseAction = { type: INREASE }
const subtractAction = { type: SUBTRACT }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case INREASE:
      return { count: count + 1 }
    case SUBTRACT:
      return { count: count - 1 }
    default:
      return state
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReduxTest', () => ReduxTest);
