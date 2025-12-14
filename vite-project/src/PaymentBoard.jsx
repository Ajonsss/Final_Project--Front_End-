import React from 'react';

const PaymentBoard = () => {
  return (
    // Main Container with Glass Effect classes defined in Day 7
    <div className="payboard-container">
      
      {/* --- TITLE SECTION --- */}
      <div className="mb-6 border-b border-white/20 pb-2">
        <h3 className="payboard-title">Payment Board</h3>
      </div>

      <form className="space-y-4">
        {/* --- SELECTION ROW (Member & Date) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="flex flex-col">
             <label className="payboard-label">Select Member</label>
             {/* Using existing glass input styles */}
             <select className="payboard-input">
                <option value="">Select Member...</option>
             </select>
           </div>
           
           <div className="flex flex-col">
             <label className="payboard-label">Select Date</label>
             <input type="date" className="payboard-input" />
           </div>
        </div>

        {/* --- PAYMENT INPUTS ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
           {/* Loan Payment */}
           <div>
             <label className="payboard-label">Loan Payment</label>
             <input type="number" className="payboard-input" placeholder="₱0.00" />
           </div>

           {/* Insurance */}
           <div>
             <label className="payboard-label">Insurance</label>
             <input type="number" className="payboard-input" placeholder="₱0.00" />
           </div>

           {/* Savings */}
           <div>
             <label className="payboard-label">Savings</label>
             <input type="number" className="payboard-input" placeholder="₱0.00" />
           </div>
        </div>

        {/* --- TOTALS INDICATOR --- */}
        <div className="bg-white/10 p-4 rounded-[15px] text-center border border-white/20 mt-6">
           <h4 className="text-white/70 text-sm uppercase tracking-widest">Total Received</h4>
           <div className="text-3xl font-bold text-white mt-1">₱ 0.00</div>
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="flex flex-col md:flex-row gap-3 mt-6 pt-4 border-t border-white/20">
           <button type="button" className="payboard-btn-reminder">
             Payment Reminder
           </button>
           <div className="flex-1"></div>
           <button type="button" className="payboard-btn-cancel">
             Cancel
           </button>
           <button type="submit" className="payboard-btn-confirm">
             Confirm Payment
           </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentBoard;
