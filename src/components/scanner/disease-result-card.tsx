import { Badge } from "@/components/ui/badge";
import { ConfidenceBar } from "@/components/scanner/confidence-bar";

type DiseaseResultCardProps = {
  diseaseName: string;
  confidence: number;
  severity: string;
  recommendation: string;
};

export function DiseaseResultCard({
  diseaseName,
  confidence,
  severity,
  recommendation,
}: DiseaseResultCardProps) {
  return (
    <div className="mt-6 rounded-xl border bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-green-950">AI Diagnosis Result</h2>
        <Badge className="bg-orange-500 text-white">{severity} Severity</Badge>
      </div>

      <p>
        <strong>Disease:</strong> {diseaseName}
      </p>

      <ConfidenceBar value={confidence} />

      <div className="mt-4 rounded-lg bg-green-50 p-4">
        <strong>Recommendation:</strong>
        <p className="mt-1">{recommendation}</p>
      </div>
    </div>
  );
}