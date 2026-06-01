"use client";

import { useEffect, useState } from "react";

type Diagnosis = {
  id: string;
  diseaseName: string;
  confidence: number;
  severity: string;
  createdAt: string;
};

export default function HistoryPage() {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    fetch("/api/diagnoses")
      .then((res) => res.json())
      .then((data) => setDiagnoses(data.diagnoses || []));
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="mb-6 text-3xl font-bold text-green-900">
        Diagnosis History
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">
        {diagnoses.length === 0 ? (
          <p>No diagnosis records found.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3">Disease</th>
                <th>Confidence</th>
                <th>Severity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {diagnoses.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-3">{item.diseaseName}</td>
                  <td>{item.confidence}%</td>
                  <td>{item.severity}</td>
                  <td>{new Date(item.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}