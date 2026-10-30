import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const shortCommit = (import.meta.env.VITE_BERCEL_COMMIT_SHA || "local")
  .slice(0, 12);
const deploymentId =
  import.meta.env.VITE_BERCEL_DEPLOYMENT_ID || "local-development";

function App() {
  return (
    <main>
      <section className="card">
        <span className="eyebrow">Real AWS deployment</span>
        <h1>Bercel Demo Application</h1>
        <p>This website was built and deployed through Bercel.</p>
        <dl>
          <div>
            <dt>Deployment</dt>
            <dd>{deploymentId}</dd>
          </div>
          <div>
            <dt>Commit</dt>
            <dd>{shortCommit}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
