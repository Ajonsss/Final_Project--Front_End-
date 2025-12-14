import React from 'react';

const PaymentBoard = () => {
  return (
    <div>
      {/* Title */}
      <div>
        <h3>Payment Board</h3>
      </div>

      {/* Input Section */}
      <form>
        {/* Member & Date Selection */}
        <div>
           <label>Select Member</label>
           <select>
              <option>Select Member...</option>
              {/* Map members here later */}
           </select>
           
           <label>Select Date</label>
           <input type="date" />
        </div>

        {/* Payment Type Titles & Textboxes */}
        <div>
           <label>Loan Payment</label>
           <input type="number" placeholder="Enter amount" />

           <label>Insurance</label>
           <input type="number" placeholder="Enter amount" />

           <label>Savings</label>
           <input type="number" placeholder="Enter amount" />
        </div>

        {/* Total Received Indicator */}
        <div>
           <h4>Total Received</h4>
           <div>₱ 0.00</div>
        </div>

        {/* Buttons */}
        <div>
           <button type="button">Payment Reminder</button>
           <button type="submit">Confirm Payment</button>
           <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentBoard;
