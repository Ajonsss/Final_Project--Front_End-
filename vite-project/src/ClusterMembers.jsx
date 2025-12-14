import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClusterMembers = ({ members = [] }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Filter Logic
  const filtered = members.filter(m => 
    m.full_name.toLowerCase().includes(search.toLowerCase()) || 
    m.phone_number.includes(search)
  );

  return (
    /* --- MAIN CONTAINER --- */
    /* Will receive glass background in Day 11 */
    <div className="memberview-container">
      
      {/* --- SECTION: HEADER & SEARCH --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="memberview-title">Cluster Members</h2>
        
        {/* Search Input with specific class for styling */}
        <input 
          type="text" 
          placeholder="Search by name or phone..." 
          className="memberview-search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* --- SECTION: MEMBER GRID --- */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {filtered.map(member => (
            /* --- INDIVIDUAL MEMBER CARD --- */
            <div key={member.id} className="memberview-card">
              
              {/* Card Header: Avatar & Name */}
              <div className="flex items-center gap-4 mb-3">
                <div className="memberview-avatar-container">
                  {member.profile_picture ? (
                     <img src={`http://localhost:8081/images/${member.profile_picture}`} className="w-full h-full object-cover" />
                  ) : (
                     <div className="memberview-avatar-placeholder">Img</div>
                  )}
                </div>
                <div>
                  <h4 className="memberview-name">{member.full_name}</h4>
                  <p className="memberview-role">{member.role}</p>
                </div>
              </div>
              
              {/* Card Body: Details */}
              <div className="memberview-details">
                <p>📞 {member.phone_number}</p>
                <p>🎂 {member.birthdate ? new Date(member.birthdate).toLocaleDateString() : 'N/A'}</p>
                <p>💍 Spouse: {member.spouse_name || 'N/A'}</p>
              </div>

              {/* Card Footer: Actions */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <button 
                  onClick={() => navigate(`/member/${member.id}`)}
                  className="memberview-btn"
                >
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* --- SECTION: EMPTY STATE --- */
        <div className="text-center py-10 text-white/50">
          <p className="text-lg">No members found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default ClusterMembers;
