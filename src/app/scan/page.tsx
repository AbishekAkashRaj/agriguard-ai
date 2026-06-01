"use client";

import { useState } from "react";
import { DiseaseResultCard } from "@/components/scanner/disease-result-card";

export default function ScanPage() {
  const [image, setImage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [saving, setSaving] = useState(false);

  const saveDiagnosis = async () => {
    setSaving(true);

    await fetch("/api/diagnoses", {
      method: "POST",
    });

    setSaving(false);
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setShowResult(true);
      await saveDiagnosis();
    }
  };

  return (
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

        {saving && (
          <p className="mt-3 text-sm text-green-700">
            Saving diagnosis to database...
          </p>
        )}
      </div>

      {showResult && <DiseaseResultCard />}
    </div>
  );
}