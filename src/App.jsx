// src/App.jsx
import Header from "./components/Header";
import PetForm from "./components/PetForm";
import PlansList from "./components/PlansList";
import ComparisonTable from "./components/ComparisonTable";
import LastCalculation from "./components/LastCalculation";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-[1.1fr_1.4fr]">
          <section className="space-y-4">
            <PetForm />
            <LastCalculation />
          </section>

          <section className="space-y-4">
            <PlansList />
            <ComparisonTable />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
