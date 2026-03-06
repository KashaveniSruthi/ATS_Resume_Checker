import React from "react";

function ResultPage({ geminiResponse, parseAndDisplayResponse }) {
  if (!geminiResponse) return null;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-success text-white py-3">
          <h3 className="mb-0">AI Generated Results</h3>
        </div>

        <div className="card-body">
          {parseAndDisplayResponse(geminiResponse)}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;