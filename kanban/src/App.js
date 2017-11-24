import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TestCard from './TestCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//
//           <h1 className="App-title">Welcome Kanban</h1>
//         </header>
// 		<TestCard />
// 		<TestCard />
// 		<TestCard />
//       </div>
//     );
//   }
// }
//
// export default App;

const cardarray = [];

cardarray.push(<TestCard/>);

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;
const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  background: isDragging ? 'lightgreen' : 'grey',

  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
		items: getItems(10),
      // items: <TestCard/>
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map(item => (
                <Draggable key={item.id} draggableId={item.id}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                          provided.draggableStyle,
                          snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                      >
                        {item.content}
                      </div>
                      {provided.placeholder}
                    </div>
                   )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
export default App;
