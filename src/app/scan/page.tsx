"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/auth/protected-route";
import { DiseaseResultCard } from "@/components/scanner/disease-result-card";

type DiagnosisResult = {
  diseaseName: string;
  confidence: number;
  severity: string;
  recommendation: string;
};

export default function ScanPage() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
    setResult(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/diagnose", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setResult({
        diseaseName: data.diseaseName,
        confidence: data.confidence,
        severity: data.severity,
        recommendation: data.recommendation,
      });

      await fetch("/api/diagnoses", {
        method: "POST",
        body: JSON.stringify({
          diseaseName: data.diseaseName,
          confidence: data.confidence,
          severity: data.severity,
          imageUrl: null,
        }),
      });
    }

    setLoading(false);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          🌿 Disease Scanner
        </h1>

        <div className="rounded-xl bg-white p-6 shadow">
          <input type="file" accept="image/*" onChange={handleImage} />

          {image && (
            <img
              src={image}
              alt="Leaf Preview"
              className="mt-4 max-w-md rounded-lg border"
            />
          )}

          {loading && (
            <p className="mt-3 text-sm text-green-700">
              Analyzing leaf image with AI...
            </p>
          )}
        </div>

        {result && (
          <DiseaseResultCard
            diseaseName={result.diseaseName}
            confidence={result.confidence}
            severity={result.severity}
            recommendation={result.recommendation}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}