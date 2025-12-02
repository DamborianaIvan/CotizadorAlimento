// Lógica de cálculo de ración diaria para perros y gatos

export function calculateDailyFood({
  species,       // "perro" | "gato"
  weight,        // kg
  size,          // "pequeño" | "mediano" | "grande"
  ageStage,      // "cachorro" | "adulto" | "senior"
  activityLevel, // "bajo" | "normal" | "alto"
  bodyCondition, // "delgado" | "normal" | "sobrepeso"
}) {
  // gramos base por kg según especie y tamaño
  let gramsPerKg;

  if (species === "perro") {
    if (size === "pequeño") gramsPerKg = 30;
    if (size === "mediano") gramsPerKg = 25;
    if (size === "grande") gramsPerKg = 20;
  } else {
    // gatos
    gramsPerKg = 35;
    if (size === "pequeño") gramsPerKg = 35;
    if (size === "mediano") gramsPerKg = 30;
    if (size === "grande") gramsPerKg = 28;
  }

  let total = gramsPerKg * weight;

  // etapa de vida
  if (ageStage === "cachorro") total *= 1.3;
  if (ageStage === "adulto") total *= 1.0;
  if (ageStage === "senior") total *= 0.9;

  // actividad
  if (activityLevel === "bajo") total *= 0.9;
  if (activityLevel === "normal") total *= 1.0;
  if (activityLevel === "alto") total *= 1.2;

  // condición corporal
  if (bodyCondition === "delgado") total *= 1.05;
  if (bodyCondition === "normal") total *= 1.0;
  if (bodyCondition === "sobrepeso") total *= 0.9;

  total = Math.round(total);

  // comidas por día
  let mealsPerDay = 2;
  if (ageStage === "cachorro") mealsPerDay = 3;
  if (species === "gato" && ageStage !== "cachorro") {
    mealsPerDay = 3;
  }

  const gramsPerMeal = Math.round(total / mealsPerDay);

  return {
    totalGrams: total,
    mealsPerDay,
    gramsPerMeal,
  };
}

export function buildFoodPlans(foodInfo) {
  const { totalGrams, mealsPerDay, gramsPerMeal } = foodInfo;

  return [
    {
      id: "ligero",
      nombre: "Plan Ligero",
      descripcion: "Para mascotas con baja actividad o tendencia a engordar.",
      gramosDia: Math.round(totalGrams * 0.9),
      comidas: mealsPerDay,
      gramosPorComida: Math.round((totalGrams * 0.9) / mealsPerDay),
    },
    {
      id: "estandar",
      nombre: "Plan Estándar",
      descripcion: "Ración equilibrada para la mayoría de las mascotas.",
      gramosDia: totalGrams,
      comidas: mealsPerDay,
      gramosPorComida: gramsPerMeal,
    },
    {
      id: "energetico",
      nombre: "Plan Energético",
      descripcion: "Para mascotas muy activas o deportistas.",
      gramosDia: Math.round(totalGrams * 1.1),
      comidas: mealsPerDay,
      gramosPorComida: Math.round((totalGrams * 1.1) / mealsPerDay),
    },
  ];
}
