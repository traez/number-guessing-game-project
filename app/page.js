"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function generateRandomNumber() {
  return Math.floor(Math.random() * (100 - 1) + 1);
}

export default function Home() {
  const [numTyped, setNumTyped] = useState("");
  const [randomNum, setRandomNum] = useState(generateRandomNumber());
  const [array, setArray] = useState([]);
  const [remainNum, setRemainNum] = useState(7);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [checkGuessOutcome, setCheckGuessOutcome] = useState("nil");
  const [applyEffect, setApplyEffect] = useState(false);

  function handleChange(event) {
    const { value } = event.target;
    const twoDigitValue = value.slice(0, 2);
    setNumTyped(twoDigitValue);
  }

  function disableButton() {
    setButtonDisabled(true);
  }

  function arrayPush() {
    if (array.length < 7) {
      setArray((prevArray) => [...prevArray, numTyped]);
    } else {
      disableButton();
    }
  }

  function populateRemain() {
    setRemainNum(7 - array.length);
  }

  function checkGuess() {
    const last = Number(array[array.length - 1]);
    if (array.length === 7 && last !== randomNum) {
      setCheckGuessOutcome("lose");
    } else if (last === randomNum) {
      setCheckGuessOutcome("win");
      disableButton();
    } else if (last < randomNum) {
      setCheckGuessOutcome("low");
    } else if (last > randomNum) {
      setCheckGuessOutcome("high");
    }
  }

  useEffect(() => {
    populateRemain();
    checkGuess();

    if (checkGuessOutcome === "win") {
      disableButton();
    }

    setApplyEffect(true);

    const timer = setTimeout(() => {
      setApplyEffect(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [array, checkGuessOutcome, remainNum]);

  function handleClick() {
    if (numTyped) {
      arrayPush();
      populateRemain();
      checkGuess();
      console.log(randomNum);
    }
    setNumTyped("");
    if (array.length === 6) {
      disableButton();
    }
  }

  function startNew() {
    setNumTyped("");
    setArray([]);
    setRemainNum(7);
    setButtonDisabled(false);
    setCheckGuessOutcome("nil");
    setRandomNum(generateRandomNumber());
  }

  return (
    <main>
      <Header />
      <Section
        onChangeFunc={handleChange}
        onClickFunc={handleClick}
        inputDigits={numTyped}
        disabled={isButtonDisabled}
        array={array}
        remainNum={remainNum}
        checkGuessOutcome={checkGuessOutcome}
        randomNum={randomNum}
        onClickStartFunc={startNew}
        applyEffect={applyEffect}
      />
      <Footer />
    </main>
  );
}
