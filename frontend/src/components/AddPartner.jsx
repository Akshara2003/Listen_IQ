import React, { useState } from "react";
import axios from "axios";

const AddPartner = ({ onSuccess }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contactPerson: "",
    phone: "",
    tier: "",
    region: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7002/api/auth/register",
        {
          ...formData,
          role: "user",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage(res.data.message);
      setFormData({
        username: "",
        email: "",
        password: "",
        contactPerson: "",
        phone: "",
        tier: "",
        region: "",
      });
      setShowForm(false);

      if (onSuccess) onSuccess(); // refresh parent table if needed
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-start">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded text-xl"
        >
          +
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg p-8 rounded w-full max-w-md mx-4 relative overflow-y-auto max-h-screen">
            {/* Close (X) Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Add New Partner</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              />

              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person"
                value={formData.contactPerson}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              />

              <select
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              >
                <option value="">Select Tier</option>
                <option value="Bronze">Bronze</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </select>

              <input
                type="text"
                name="region"
                placeholder="Region"
                value={formData.region}
                onChange={handleChange}
                className="border px-3 py-2 w-full rounded"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-6"
            >
              Register Partner
            </button>

            {message && (
              <div className="mt-4 text-green-600 text-center">{message}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPartner;
