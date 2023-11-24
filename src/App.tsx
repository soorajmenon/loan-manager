

export default function App() {
  
  function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    
    //code here
   
  }

  return (
    <div className="loan-calculator">
      <form
        className="loan-calculator-form"
        onSubmit={onSubmit}>
        <div>
          <label>
            Loan Amount:{' '}
            <input
              name="loan-amount"
            />
          </label>
        </div>
        <div>
          <label>
            Loan Term (months):{' '}
            <input
              name="loan-term"
            />
          </label>
        </div>
        <div>
          <label>
            Interest Rate (%):{' '}
            <input
              name="interest-rate"
            />
          </label>
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>
      <hr />
      <div
        aria-live="polite"
        className="mortgage-calculator-results">
        <div>
          Monthly Payment Amount:{' '}
          <strong>{/*add your variable here*/}</strong>
        </div>
        <div>
          Total Payment Amount:{' '}
          <strong>{/*add your variable here*/}</strong>
        </div>
        <div>
          Total Interest Paid:{' '}
          <strong>{/*add your variable here*/}</strong>
        </div>
      </div>
    </div>
  );
  }
