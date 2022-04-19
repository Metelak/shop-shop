import { reducer } from '../utils/reducers';
// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from '../utils/actions';
  
  // create a sample of what our global state will look like
  const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
  };

// test for updating the products list
  test('UPDATE_PRODUCTS', () => {
      // create a new state object
      // reducer function accepts the current state object and action to update state with type and value
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      products: [{}, {}]
    });
  
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });
// test for updating the categories array
  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });
  
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
  });
// test for updating the state of currentCategory to a new string value instead of an array
  test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });