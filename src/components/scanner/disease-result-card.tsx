import { Badge } from "@/components/ui/badge";
import { ConfidenceBar } from "@/components/scanner/confidence-bar";

export function DiseaseResultCard() {
  return (
    <div className="mt-6 rounded-xl border bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-green-950">AI Diagnosis Result</h2>
        <Badge className="bg-orange-500 text-white">Medium Severity</Badge>
      </div>

      <p><strong>Disease:</strong> Leaf Blight</p>

      <ConfidenceBar />

      <div className="mt-4 rounded-lg bg-green-50 p-4">
        <strong>Recommendation:</strong>
        <p className="mt-1">
          Remove infected leaves, avoid overhead watering, and apply a suitable fungicide.
        </p>
      </div>
    </div>
  );
}