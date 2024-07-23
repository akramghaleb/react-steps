const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1
  const buttonStyle = {
    backgroundColor: '#7950f2',
    color: '#ffffff',
  }

  function handlePrevious() {
    alert('Previous')
    // if (step < 3) {
    //   setStep(step + 1);
    // } else {
    //   alert('You have completed all steps');
    // }
  }
  function handleNext() {
    alert('Next')
    // if (step < 3) {
    //   setStep(step + 1);
    // } else {
    //   alert('You have completed all steps');
    // }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 && "active"}`}>1</div>
        <div className={`${step >= 2 && "active"}`}>2</div>
        <div className={`${step >= 3 && "active"}`}>3</div>
      </div>
      <p className="message">Step {step} {messages[step - 1]}</p>
      <div className="buttons">
        <button style={buttonStyle}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button style={buttonStyle}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
