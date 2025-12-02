import { useEffect, useState } from "react";
import Header from "./components/Header";
import PetForm from "./components/PetForm";
import PlansList from "./components/PlansList";
import ComparisonTable from "./components/ComparisonTable";
import LastCalculation from "./components/LastCalculation";
import { calculateDailyFood, buildFoodPlans } from "./utils/calculateFood";

const LAST_CALC_KEY = "pet_food_simulator_last_calc";

function App() {
  const [plans, setPlans] = useState([]);
  const [petName, setPetName] = useState("");
  const [lastCalc, setLastCalc] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(LAST_CALC_KEY);
    if (stored) {
      setLastCalc(JSON.parse(stored));
    }
  }, []);

  const handleCalculate = (data) => {
    const baseInfo = calculateDailyFood(data);
    const newPlans = buildFoodPlans(baseInfo);

    setPlans(newPlans);
    setPetName(data.petName);

    const mainPlan = newPlans[1];

    const toStore = {
      ...data,
      ...baseInfo,
      date: new Date().toISOString(),
      mainPlan,
    };

    localStorage.setItem(LAST_CALC_KEY, JSON.stringify(toStore));
    setLastCalc(toStore);
  };

  // 🔥 NUEVO:
  const handleFullReset = () => {
    setPlans([]);
    setPetName("");
    setLastCalc(null);
    localStorage.removeItem(LAST_CALC_KEY);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1.4fr]">
          <section className="space-y-4">
            <PetForm onCalculate={handleCalculate} onFullReset={handleFullReset} />
            <LastCalculation lastCalc={lastCalc} />
          </section>

          <section className="space-y-4">
            <PlansList plans={plans} petName={petName} />
            <ComparisonTable plans={plans} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
