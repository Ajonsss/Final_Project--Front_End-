import React from 'react';

const MetricsBoard = ({ members }) => {
  return (
    /* --- SECTION: MAIN CONTAINER --- */
    /* This container applies the glassmorphism background and blur */
    <div className="metrics-container">
      
      {/* --- SECTION: BOARD HEADER --- */}
      <div className="mb-6 border-b border-white/20 pb-4 flex justify-between items-center">
        <h3 className="metrics-title">Cluster Metrics Board</h3>
        <span className="metrics-badge">Week 4</span>
      </div>

      {/* --- SECTION: TABLE HEADERS (Desktop Only) --- */}
      {/* Hidden on mobile (hidden), shown on medium screens (md:grid) */}
      <div className="hidden md:grid grid-cols-7 gap-4 mb-4 px-4">
        <div className="metrics-header">Member Name</div>
        <div className="metrics-header">Loan Balance</div>
        <div className="metrics-header">Weekly Due</div>
        <div className="metrics-header text-red-200">Shortage</div>
        <div className="metrics-header">Prev. Lates</div>
        <div className="metrics-header">Status</div>
        <div className="metrics-header text-center">Actions</div>
      </div>

      {/* --- SECTION: MEMBER ROWS LIST --- */}
      <div className="space-y-3">
        {members.map((member) => (
          
          /* --- INDIVIDUAL ROW START --- */
          <div key={member.id} className="metrics-row">
            
            {/* 1. Name Column */}
            <div className="md:col-span-1 font-bold text-white truncate">
              {member.full_name}
            </div>

            {/* 2. Loan Balance Column */}
            <div className="md:col-span-1 text-white/90">
              {/* Mobile Label */}
              <span className="md:hidden text-xs text-white/50 uppercase mr-2">Balance:</span>
              ₱{member.activeLoan ? member.activeLoan.current_balance : '0.00'}
            </div>

            {/* 3. Weekly Due Column */}
            <div className="md:col-span-1 text-white/90">
               {/* Mobile Label */}
               <span className="md:hidden text-xs text-white/50 uppercase mr-2">Due:</span>
               ₱{member.activeLoan ? member.activeLoan.weekly_amount : '0.00'}
            </div>

            {/* 4. Shortage Column (Highlighted Red) */}
            <div className="md:col-span-1 text-red-300 font-medium">
               {/* Mobile Label */}
               <span className="md:hidden text-xs text-white/50 uppercase mr-2">Shortage:</span>
               ₱{member.shortage || '0.00'}
            </div>

            {/* 5. Lates Count Column */}
            <div className="md:col-span-1 text-white/80 pl-4">
               {/* Mobile Label */}
               <span className="md:hidden text-xs text-white/50 uppercase mr-2">Lates:</span>
               {member.late_count}
            </div>

            {/* 6. Status Badge Column */}
            <div className="md:col-span-1">
               <span className={`metrics-status ${member.status === 'paid' ? 'bg-green-500/40 text-green-100' : 'bg-yellow-500/40 text-yellow-100'}`}>
                 {member.status || 'Pending'}
               </span>
            </div>

            {/* 7. Action Buttons Column */}
            <div className="md:col-span-1 flex justify-center gap-2">
               <button className="metrics-btn-view">View</button>
               <button className="metrics-btn-remind">Msg</button>
            </div>

          </div>
          /* --- INDIVIDUAL ROW END --- */
        ))}
      </div>
    </div>
  );
};

export default MetricsBoard;

