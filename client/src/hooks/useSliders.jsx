import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function useSliders() {
  const [sliders, setSliders] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSliders() {
      try {
        const docRef = doc(db, 'sliders', 'main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSliders(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching sliders:', error);
      }
      setLoading(false);
    }

    fetchSliders();
  }, []);

  return { sliders, loading };
}
