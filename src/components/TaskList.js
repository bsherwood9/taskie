import React from "react";
import Taskcard from "./Taskcard";
import AddButton from "./AddCardButton";
import { Droppable } from "react-beautiful-dnd";

const TaskList = ({ title, cards, listId }) => {
  //droppable takes an id that must be string. Also needs a render function
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <Taskcard
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}
          <AddButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
const styles = {
  container: {
    background: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};
export default TaskList;
