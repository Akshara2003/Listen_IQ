// src/components/pages/ProfilePage.js
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ProfilePage.css";

const defaultProgress = [
  { month: "Jan", points: 0 },
  { month: "Feb", points: 0 },
  { month: "Mar", points: 0 },
  { month: "Apr", points: 0 },
  { month: "May", points: 0 },
  { month: "Jun", points: 0 },
];

const getTier = (points) => {
  if (points >= 5000) return "Gold";
  if (points >= 2000) return "Silver";
  return "Bronze";
};

const ProfilePage = () => {
  const [partners, setPartners] = useState([
    {
      name: "John Doe",
      company: "Bright Tech Solutions",
      about: "Expert in enterprise solutions.",
      points: 4200,
      progress: [ ...defaultProgress.map((p, i) => ({ ...p, points: (i + 1) * 700 })) ],
    },
  ]);
  const [formData, setFormData] = useState({ name: "", company: "", about: "", points: 0 });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const updatedPartner = {
      ...formData,
      points: Number(formData.points),
      progress: defaultProgress.map((p, i) => ({ ...p, points: (i + 1) * (formData.points / 6) })),
    };

    const updatedList = [...partners];
    if (editingIndex !== null) {
      updatedList[editingIndex] = updatedPartner;
    } else {
      updatedList.push(updatedPartner);
    }

    setPartners(updatedList);
    setFormData({ name: "", company: "", about: "", points: 0 });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const { name, company, about, points } = partners[index];
    setFormData({ name, company, about, points });
  };

  return (
    <div className="profile-page">
      <h2>Partner Profiles</h2>

      {/* Form Section */}
      <div className="form-section">
        <input name="name" value={formData.name} onChange={handleInput} placeholder="Partner Name" />
        <input name="company" value={formData.company} onChange={handleInput} placeholder="Company Name" />
        <input name="about" value={formData.about} onChange={handleInput} placeholder="About" />
        <input name="points" value={formData.points} onChange={handleInput} placeholder="Points" type="number" />
        <button onClick={handleSubmit}>{editingIndex !== null ? "Update" : "Add Partner"}</button>
      </div>

      {/* Cards */}
      <div className="profile-cards-grid">
        {partners.map((partner, idx) => {
          const tier = getTier(partner.points);
          return (
            <div className="partner-card" key={idx}>
              <div className="card-header">
                <h3>{partner.name}</h3>
                <div className={`tier-badge ${tier.toLowerCase()}`}>{tier} Tier ⭐</div>
              </div>
              <p><strong>Company:</strong> {partner.company}</p>
              <p><strong>About:</strong> {partner.about}</p>
              <p><strong>Points:</strong> {partner.points}</p>
              <button onClick={() => handleEdit(idx)} className="edit-btn">Edit</button>

              <div className="chart-container">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={partner.progress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="points" stroke="#004aad" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
