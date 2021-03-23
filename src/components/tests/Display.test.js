import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

const testShow = {
  //add in approprate test data structure here.
  name: 'Stranger Things',
  summary: 'Paranormal TV show',
  seasons: [
    {id:1, name:'season 1', episodes: []},
    {id:2, name:'season 2', episodes: []},
    {id:3, name:'season 3', episodes: []},
    {id:4, name:'season 4', episodes: []},
  ],
}

test('renders without errors', ()=>{
  render(<Display />);
});

test('renders show component when button is clicked ', ()=>{
  const mockhandleClick = jest.fn();
  let show = null;
  render(<Display show={show}/>);
  const button = screen.getByRole("button");
  show = testShow;
  userEvent.click(button);
  expect(mockhandleClick).toHaveBeenCalled();
});

test('renders without errors', ()=>{
 
 
  render(<Display />);
});

test('renders without errors', ()=>{
  render(<Display />);



});


///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.