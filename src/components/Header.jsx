import React from "react";
import NoteIcon from "@material-ui/icons/Note";
import Edit from "@material-ui/icons/Edit";

function Header() {
  return (
    <header>
      <h1>
        <Edit /> StickyNote <NoteIcon />
      </h1>
    </header>
  );
}

export default Header;
