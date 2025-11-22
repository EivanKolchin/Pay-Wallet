import { useMemo } from "react";

import "./index.css";

function App() {
  const buildInfo = useMemo(() => new Date().toLocaleString(), []);

  return (
    <main className="app-container">
      <section className="card">
        <p className="eyebrow">Swift Wallet</p>
        <h1>Frontend shell is running</h1>
        <p>
          The original project files were missing. This lightweight shell uses the
          existing dependencies to start the Vite + React + TypeScript stack so
          the app can run again.
        </p>
        <div className="status">
          <span className="dot" aria-hidden />
          <span>Development server ready</span>
        </div>
        <p className="meta">Last refreshed: {buildInfo}</p>
      </section>
    </main>
  );
}

export default App;
