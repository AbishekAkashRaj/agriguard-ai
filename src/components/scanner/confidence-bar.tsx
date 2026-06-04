import { Progress } from "@/components/ui/progress";

type ConfidenceBarProps = {
  value: number;
};

export function ConfidenceBar({ value }: ConfidenceBarProps) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-sm">
        <span>Confidence Score</span>
        <span>{value}%</span>
      </div>

      <Progress value={value} />
    </div>
  );
}