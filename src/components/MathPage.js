const MathPage = () => {
  const checkResult = event => {
    event.preventDefault()
    const firstValue = document.querySelector('#firstValue').innerText
    const secondValue = document.querySelector('#secondValue').innerText
    const sumOfValues = Number(firstValue) + Number(secondValue)
    const result = document.querySelector('.result-box').value
    const correctMessage = document.querySelector('#correctMessage')
    const wrongMessage = document.querySelector('#wrongMessage')

    if (sumOfValues == result) {
      correctMessage.style.display = 'block'
    } else {
      wrongMessage.style.display = 'block'
    }
  }

  return (
    <>
      <h1>YAH! LET'S PRACTISE OUR MATH ADDITION</h1>
      <div className="content">
        <p id="correctMessage">correct</p>
        <p id="wrongMessage">wrong</p>
        <span id="firstValue">2</span>
        <span className="plus sign">+</span>
        <span id="secondValue">2</span>
        <span className="equals sign">=</span>
        <form className="input-form" onSubmit={(event) => checkResult(event)}>
          <input type="number" className="result-box" placeholder="result..." required></input>
          <button type="submit" id="confirmButton">Check</button>
        </form>
        <div className="button-container">
          <button type="button" id="repeatButton">Try Again</button>
          <button type="button" id="answerButton">Show Answer</button>
          <button type="button" id="nextButton">Next Question</button>
        </div> 
      </div>
    </>
  )
}

export default MathPage
