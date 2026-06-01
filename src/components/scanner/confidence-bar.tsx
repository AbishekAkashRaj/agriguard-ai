import { Progress } from "@/components/ui/progress";

export function ConfidenceBar() {
  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-sm">
        <span>Confidence Score</span>
        <span>92%</span>
      </div>

      <Progress value={92} />
    </div>
  );
}