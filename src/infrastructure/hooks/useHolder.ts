import { useEffect } from 'react';

export default function useHolder(): void {
  useEffect(() => {
    window.Holder.run();
  }, []);
}
