import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

const AddButton = props => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleAddList = () => {
    const dispatch = props.dispatch;
    if (text) {
      setText("");
      dispatch(addList(text));
    }
    return;
  };
  const handleAddCard = () => {
    const dispatch = props.dispatch;
    const listId = props.listId;
    if (text) {
      setText("");
      dispatch(addCard(listId, text));
    }
  };

  const renderAddButton = () => {
    const list = props.list;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          background: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  const renderForm = () => {
    const list = props.list;
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleChange}
            style={{
              resize: "none",
              width: "100%",
              border: "none",
              outline: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
};

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};
export default connect()(AddButton);
