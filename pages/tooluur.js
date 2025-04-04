import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Countdown = () => {
  const [time, setTime] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (time < 10) {
      const timer = setTimeout(() => {
        setTime(time + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div className="flex justify-center bg-white text-black h-screen items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Tooluur: {time}</h1>
      <button
        className="h-12 w-24 bg-stone-400 text-white px-4 py-2 rounded hover:bg-stone-300 transition duration-300 ease-in-out"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
};

export default Countdown;
