import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "./actions/listActions";

//imports
import TaskList from "./components/TaskList";
import AddButton from "./components/AddCardButton";

function App(props) {
  console.log(props.lists);
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  return (
    <DragDropContext onDragEnd>
      <div>
        <h1>Taskie</h1>
        <div style={styles.listsContainer}>
          {props.lists.map(item => (
            <TaskList
              listId={item.id}
              key={item.id}
              title={item.title}
              cards={item.cards}
            />
          ))}
          <AddButton list />
        </div>
      </div>
    </DragDropContext>
  );
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(
  mapStateToProps,
  {}
)(App);
