import React from "react";

function EditGame() {
  return (
    <section id="edit-page" className="auth">
      <form id="edit">
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title1" name="title1" />

          <label htmlFor="category">Category:</label>
          <input type="text" id="category1" name="category1" />

          <label htmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel1" name="maxLevel1" min="1" />

          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl1" name="imageUrl1" />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary1" id="summary1"></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}

export default EditGame;
