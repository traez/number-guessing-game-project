import Image from "next/image";

export default function Section({
  onChangeFunc,
  onClickFunc,
  inputDigits,
  disabled,
  array,
  remainNum,
  checkGuessOutcome,
  randomNum,
  onClickStartFunc,
  applyEffect,
}) {
  const feedbackClassName = applyEffect ? "effect" : "";
  return (
    <section>
      <article>
        <h4>Guess a number</h4>
        <form>
          <input
            type="number"
            placeholder="00"
            maxLength="2"
            onChange={onChangeFunc}
            name="digit"
            value={inputDigits}
          />
          <button
            type="button"
            id="submit"
            onClick={onClickFunc}
            disabled={disabled}
          >
            Submit guess
          </button>
        </form>
        <div id="dmn">
          <menu>
            <li id="previous">Previous Guesses:</li>
            <li id="previous-g">
              {array.length > 0 ? array.join(" , ") : "00 00 00 00 00 00 00"}
            </li>
          </menu>
          <nav>
            <strong>Guesses Remaining: </strong>
            {array.length > 0 ? <small>{remainNum}</small> : <small>7</small>}
          </nav>
        </div>
      </article>
      <aside>
        {checkGuessOutcome === "nil" && (
          <div id="feedback">
            Feedback from <span style={{ color: "gray" }}>your guess</span> will
            appear here
          </div>
        )}
        {checkGuessOutcome === "low" && (
          <div id="feedback" className={feedbackClassName}>
            Number guessed <span style={{ color: "blue" }}>too Low!</span> Try
            again!
          </div>
        )}
        {checkGuessOutcome === "high" && (
          <div id="feedback" className={feedbackClassName}>
            Number guessed <span style={{ color: "brown" }}>too High!</span> Try
            again!
          </div>
        )}
        {checkGuessOutcome === "win" && (
          <div id="feedback" className={feedbackClassName}>
            <span style={{ color: "green" }}>Congratulations!</span> You guessed
            correctly, with{" "}
            <span style={{ color: "green" }}>{array.length}</span> tries!
          </div>
        )}
        {checkGuessOutcome === "lose" && (
          <div id="feedback" className={feedbackClassName}>
            <span style={{ color: "red" }}>Game Over!</span> Chosen number was{" "}
            <span style={{ color: "red" }}>{randomNum}</span> You guessed
            wrongly.
          </div>
        )}
        <button type="button" id="start" onClick={onClickStartFunc}>
          Start New Game
        </button>
      </aside>
    </section>
  );
}

/*
<div id="feedback"><span style={{ color: "yellow" }}>Game Over!</span> Chosen number was <span>{randomNum}</span>You guessed wrongly.</div> 
*/
