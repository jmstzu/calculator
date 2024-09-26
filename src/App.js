import './App.css';


function Key({label, clickHandler}) {
  return(
    <button onClick={clickHandler}>
      {label}
    </button>
  )
}

function Display(label) {
  return(
    <div className="Display">
      CalcHub
    </div>
  )
}

function App() {

  const genericClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    alert(value)
    console.log(value);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <div className="DispContainer">
          <Display />
       </div>
       <div className="ButtonsContainer">
        <Key label={7} clickHandler={genericClickHandler}/>
        <Key label={8}  clickHandler={genericClickHandler}/>
        <Key label={9}  clickHandler={genericClickHandler}/>
        <Key label={"÷"}  clickHandler={genericClickHandler}/>
        <Key label={4}  clickHandler={genericClickHandler}/>
        <Key label={5}  clickHandler={genericClickHandler}/>
        <Key label={6}  clickHandler={genericClickHandler}/>
        <Key label={"*"}  clickHandler={genericClickHandler}/>
        <Key label={3}  clickHandler={genericClickHandler}/>
        <Key label={2}  clickHandler={genericClickHandler}/>
        <Key label={1}  clickHandler={genericClickHandler}/>
        <Key label={"-"}  clickHandler={genericClickHandler}/>
        <Key label={"c"}  clickHandler={genericClickHandler}/>
        <Key label={1}  clickHandler={genericClickHandler}/>
        <Key label={"="}  clickHandler={genericClickHandler}/>
        <Key label={"+"}  clickHandler={genericClickHandler}/>
      </div>
      </div>
    </div>
  );
}

export default App;
