// src/context/PetFoodContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { calculateDailyFood, buildFoodPlans } from "../utils/calculateFood";

const PetFoodContext = createContext();

const LAST_CALC_KEY = "pet_food_simulator_last_calc";

export function PetFoodProvider({ children }) {
  const [plans, setPlans] = useState([]);
  const [petName, setPetName] = useState("");
  const [lastCalc, setLastCalc] = useState(null);

  // cargar último cálculo de localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LAST_CALC_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setLastCalc(parsed);
      setPetName(parsed.petName || "");
      // podrías reconstruir plans si quisieras, pero no es obligatorio
    }
  }, []);

  const handleCalculate = (data) => {
    const baseInfo = calculateDailyFood(data);
    const newPlans = buildFoodPlans(baseInfo);

    setPlans(newPlans);
    setPetName(data.petName);

    const mainPlan = newPlans[1]; // normalito
    const toStore = {
      ...data,
      ...baseInfo,
      date: new Date().toISOString(),
      mainPlan,
    };

    localStorage.setItem(LAST_CALC_KEY, JSON.stringify(toStore));
    setLastCalc(toStore);
  };

  const handleFullReset = () => {
    setPlans([]);
    setPetName("");
    setLastCalc(null);
    localStorage.removeItem(LAST_CALC_KEY);
  };

  const value = {
    plans,
    petName,
    lastCalc,
    handleCalculate,
    handleFullReset,
  };

  return (
    <PetFoodContext.Provider value={value}>
      {children}
    </PetFoodContext.Provider>
  );
}

export function usePetFood() {
  const ctx = useContext(PetFoodContext);
  if (!ctx) {
    throw new Error("usePetFood debe usarse dentro de PetFoodProvider");
  }
  return ctx;
}
