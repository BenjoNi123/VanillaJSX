import React from 'react';
import renderer from 'react-test-renderer';
import TodoApp from '../components/TodoApp';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import EditModal from '../components/EditModal';

describe('TodoApp', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodoApp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TodoList', () => {
  it('renders correctly', () => {
    const todos = [
      { id: 1, name: 'Todo 1', description: 'Description 1' },
      { id: 2, name: 'Todo 2', description: 'Description 2' },
    ];
    const tree = renderer.create(<TodoList todos={todos} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TodoItem', () => {
  it('renders correctly', () => {
    const todo = {
      id: 1,
      name: 'Todo 1',
      description: 'Description 1',
      image_url: 'todo1.jpg',
      url: 'https://example.com/todo1',
      votes: 5,
    };
    const tree = renderer.create(<TodoItem todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('EditModal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<EditModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
