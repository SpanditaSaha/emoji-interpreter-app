import "./styles.css";
import React, { useState } from "react";

var heading = "Welcome";
var color1 = "blue";

var userName = "Spandita";

var emojiDictionary = {
  "😊": "Smiling face with smiling eyes",
  "😂": "Laughing face with tears of joy",
  "🤣": "Rolling on the floor laughing",
  "😍": "Smiling face with heart-eyes",
  "😒": "Unamused face",
  "😘": "Face blowing a kiss",
  "😁": "Beaming face with smiling eyes",
  "😉": "Winking face",
  "😎": "Smiling face with sunglasses",
  "😢": "Crying face",
  "😔": "Pensive face",
  "😣": "Persevering face",
  "😯": "Hushed face",
  "😮": "Face with open mouth"
};
var emojiesWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have it in our database yet!";
    }

    setMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: color1 }}>{heading + " " + userName}</h1>
      <input onChange={inputChangeHandler}></input>

      <h2>{emojiMeaning}</h2>

      <h5>Emojies We Know </h5>
      {emojiesWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
