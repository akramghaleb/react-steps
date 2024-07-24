import { useState } from "react";

export default function Counter() {


  const [step, setStep] = useState(1)
  const [counter, setCounter] = useState(0)

  const date = new Date();
  date.setDate(date.getDate() + counter);

  const buttonStyle = {
    backgroundColor: '#7950f2',
    color: '#ffffff',
    marginBottom: '10px'
  }

  function handleStepPrevious() {
    if (step > 1) setStep(s => s - 1);
  }

  function handleStepNext() {
    setStep(s => s + 1);
  }

  function handleCounterPrevious() {
    setCounter(c => c - step);
  }

  function handleCounterNext() {
    setCounter(c => c + step);
  }

  return (
    <div className="steps">
      <p className="message">Step {step}</p>
      <p className="message">Counter {counter}</p>
      <p className="message">
        {counter === 0
          ? "Today is "
          : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        {date.toDateString()}
      </p>
      <div className="buttons">
        <button style={buttonStyle}
          onClick={handleStepNext}
        >
          + Step
        </button>
        <button style={buttonStyle}
          onClick={handleStepPrevious}
        >
          - Step
        </button>
      </div>
      <div className="buttons">
        <button style={buttonStyle}
          onClick={handleCounterNext}
        >
          + Counter
        </button>
        <button style={buttonStyle}
          onClick={handleCounterPrevious}
        >
          - Counter
        </button>
      </div>
    </div>
  );
}
