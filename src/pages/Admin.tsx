import React from "react";

const AdminPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>
      <p style={styles.subtitle}>Welcome, Admin! You have access to this page.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
};

export default AdminPage;
