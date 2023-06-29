import store from './store/store';
import TodoApp from './components/TodoApp';
import { fetchTodos } from './store/actions';
import "./style.css";

function render(component, container) {
  var children = container.childNodes;
  for(var i = 0; i < children.length; i++)
    container.removeChild(children[i]);
    container.appendChild(component)
}

const renderApp = () =>render(TodoApp(), document.getElementById('app'));
store.subscribe(() => {
  renderApp();
});
store.dispatch(fetchTodos())


