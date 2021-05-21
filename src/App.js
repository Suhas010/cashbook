import React from 'react';
import './App.css';

const getCurrency = (cash) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2, }).format(cash)

// Button Component
const Button = ({name, handleClick, ...rest}) => {
  return (
    <button
      onClick={handleClick}
      className={`${name === "In" ? 'green': 'red'}`}
      {...rest}
    >
      {name}
    </button>
  )
}

// Header component
const Header = ({balance}) => (
  <header>
    <div className="header">
      <h1>My Cashbook</h1>
      <div className="today-balance">
          <h1 data-testid="balance">{getCurrency(balance)}</h1>
          <p>Todays Balance</p>
      </div>
    </div>
  </header>
)

// Modal component
const  Modal = ({handleClose, type, handleSubmit}) => {
  const [state, setState] = React.useState({
    amount: 0,
    note: ''
  })

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(state);
  }

  const handleChange = ({target: {value}}, type) => {
    setState({
      ...state,
      [type]: value,
    })
  }

  const isDisabled = () => {
    const {amount, note} = state;
    if(amount <= 0 ) return true;
    if(!note) return true;
    return false;
  }

  const { amount, note } = state;
  return (
    <div id="myModal" className="model">
      <div className="model-content">
        <button className="close-btn" onClick={handleClose}>X</button>
        <h1>New Entry</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            placeholder="₹0.0"
            type="amount"
            value={amount}
            data-testid="amount"
            min="0.01"
            onChange={(e) => handleChange(e, 'amount')}
          />
          <textarea
            placeholder="Note"
            onChange={(e) => handleChange(e, 'note')}
            value={note}
            data-testid="note"
          />
          <Button
            type="submit"
            name={type}
            data-testid="create-entry-btn"
            disabled={isDisabled()}
          />
        </form>
      </div>
    </div>
  )}

const getEntries = entries => {
  if(!entries || !entries.length) return <div className="empty">No Entry Found!</div>
  return entries.map(({note, amount, type, timeStamp}) => (
    <div className="transaction"  key={timeStamp.toString()}>
      <div className="entry">
        <span className="timestamp">{timeStamp.toLocaleString()}</span>
        <span className="note">{note}</span>
      </div>
      <div className="out">
        <h1>Out</h1>
          {`${type === 'Out' ? amount : '-'}`}
      </div>
      <div className="in">
        <h1>In</h1>
          {`${type === 'In' ? amount : '-'}`}
      </div>
    </div>
  ))
}

const Transactions = ({entries}) => {
  return (
    <div>
      {getEntries(entries)}
    </div>
  )
}

const Footer = ({handleClose}) => (
  <footer>
    <div className="action-group">
      <Button 
        handleClick={() => handleClose("In")}
        name="In"
        id="in"
        data-testid="cashin-btn"
      />
      <Button 
        handleClick={() => handleClose("Out")}
        name="Out"
        id="in"
        data-testid="cashout-btn"
      />
    </div>
  </footer>
)

function App() {
  const [state, setState] = React.useState({
    modal: false,
    entries: [],
    type: ''
  })

  const handleModalClose = (type) => {
    setState({
      ...state,
      modal: !state.modal,
      type,
    })
  }

  const handleSubmit = ({note, amount}) => {
    let { entries, type } = state;
    entries = [...entries, {
      note,
      amount,
      type,
      timeStamp: new Date(),
    }]
    setState({
      ...state,
      entries,
      modal: false,
      type: ""
    })

  }

  const getBalance = (entries) => entries.reduce((acc, {type, amount}) =>{
    if(type === "Out") acc -= parseFloat(amount);
    if(type === "In") acc += parseFloat(amount);
    return acc;
  }, 0)

  const { modal, entries, type } = state;
  return (
    <div className="App">
    <Header balance={getBalance(entries)} />
      {modal && (
        <Modal 
          handleClose={handleModalClose}
          type={type}
          handleSubmit={handleSubmit}
        />
      )}
      <section>
        <Transactions entries={entries} />
      </section>
      <Footer handleClose={handleModalClose} />
    </div>
  );
}

export default App;
