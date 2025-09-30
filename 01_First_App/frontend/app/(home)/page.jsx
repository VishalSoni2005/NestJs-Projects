"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import Error from "next/error";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get("/users");
        if (!res) {
          throw new Error("Error fetching users");
        }
        console.log("helo");

        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 User List</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u._id}>
              <b>{u.name}</b> - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
