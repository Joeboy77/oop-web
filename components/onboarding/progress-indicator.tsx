'use client';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function ProgressIndicator({ currentStep, totalSteps, stepLabels }: ProgressIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    isCompleted
                      ? 'bg-primary border-primary text-white'
                      : isCurrent
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-slate-700 border-slate-600 text-slate-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{stepNumber}</span>
                  )}
                </div>
                {index < stepLabels.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                      isCompleted ? 'bg-primary' : 'bg-slate-700'
                    }`}
                  />
                )}
              </div>
              <span
                className={`text-xs mt-2 text-center transition-colors duration-300 ${
                  isCurrent ? 'text-primary font-medium' : isCompleted ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

