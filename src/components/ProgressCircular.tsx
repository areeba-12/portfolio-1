import { useState, useEffect } from 'react';
import { Circle } from 'rc-progress';

function ProgressCircular({ name, value }: { name: string; value: number }) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let currentProgress = 0;
    const increment = value / 100;

    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= value) {
        clearInterval(interval);
        setProgress(value);
      } else {
        setProgress(currentProgress);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="w-[10rem] h-[10rem] relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-custom-gradient"></div>
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <p className="text-lg font-semibold text-[#c7d1ea]">{name}</p>
        <p className="text-[#c7d1ea] text-md">{Math.round(progress)}%</p>
      </div>
      <Circle
        percent={progress}
        strokeWidth={6}
        strokeColor="#06b6d4"
        trailColor="#D3D3D3"
        className="z-20 w-full h-full"
      />
    </div>
  );
}

export default ProgressCircular;