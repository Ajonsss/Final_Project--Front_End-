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
    <div className="memberview-container">
      {/* Search & Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="memberview-title">Cluster Members</h2>
        <input 
          type="text" 
          placeholder="Search by name or phone..." 
          className="memberview-search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Member Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(member => (
          <div key={member.id} className="memberview-card">
            {/* Profile Summary */}
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-white/50">
                {member.profile_picture ? (
                   <img src={`http://localhost:8081/images/${member.profile_picture}`} className="w-full h-full object-cover" />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">Img</div>
                )}
              </div>
              <div>
                <h4 className="font-bold text-white leading-tight">{member.full_name}</h4>
                <p className="text-xs text-white/70">{member.role}</p>
              </div>
            </div>
            
            {/* Details */}
            <div className="text-sm text-white/80 space-y-1 mb-4">
              <p>📞 {member.phone_number}</p>
              <p>🎂 {member.birthdate ? new Date(member.birthdate).toLocaleDateString() : 'N/A'}</p>
              <p>💍 Spouse: {member.spouse_name || 'N/A'}</p>
            </div>

            {/* Action */}
            <button 
              onClick={() => navigate(`/member/${member.id}`)}
              className="memberview-btn"
            >
              View Full Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClusterMembers;
