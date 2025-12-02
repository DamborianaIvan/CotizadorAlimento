import { useState } from "react";

const initialForm = {
  petName: "",
  species: "perro",
  weight: "",
  size: "mediano",
  ageStage: "adulto",
  activityLevel: "normal",
  bodyCondition: "normal",
};

export default function PetForm({ onCalculate,onFullReset }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.petName.trim()) {
      newErrors.petName = "El nombre es obligatorio.";
    }
    if (!form.weight) {
      newErrors.weight = "El peso es obligatorio.";
    } else if (Number(form.weight) <= 0) {
      newErrors.weight = "El peso debe ser mayor a 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      petName: form.petName.trim(),
      species: form.species,
      weight: Number(form.weight),
      size: form.size,
      ageStage: form.ageStage,
      activityLevel: form.activityLevel,
      bodyCondition: form.bodyCondition,
    };

    onCalculate(payload);
  };

const handleFullResetClick = () => {
  setForm(initialForm);
  setErrors({});
  onFullReset();   // 🔥 ESTA ES LA PARTE QUE QUITA EL WARNING Y LIMPIA TODO
};

  return (
    <form
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5 space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-slate-800">
          Datos de la mascota
        </h2>
        <span className="text-xs text-slate-400">
          Campos obligatorios marcados con *
        </span>
      </div>

      {/* Nombre */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">
          Nombre de la mascota *
        </label>
        <input
          type="text"
          name="petName"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={form.petName}
          onChange={handleChange}
          placeholder="Ej: Lola, Firulais, Mishi"
        />
        {errors.petName && (
          <p className="text-xs text-red-600">{errors.petName}</p>
        )}
      </div>

      {/* Especie y peso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Especie
          </label>
          <select
            name="species"
            value={form.species}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Peso (kg) *
          </label>
          <input
            type="number"
            name="weight"
            min={0.1}
            step="0.1"
            value={form.weight}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ej: 5.5"
          />
          {errors.weight && (
            <p className="text-xs text-red-600">{errors.weight}</p>
          )}
        </div>
      </div>

      {/* Tamaño y edad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Tamaño
          </label>
          <select
            name="size"
            value={form.size}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Etapa de vida
          </label>
          <select
            name="ageStage"
            value={form.ageStage}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="cachorro">Cachorro</option>
            <option value="adulto">Adulto</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </div>

      {/* Actividad y condición */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Nivel de actividad
          </label>
          <select
            name="activityLevel"
            value={form.activityLevel}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="bajo">Bajo</option>
            <option value="normal">Normal</option>
            <option value="alto">Alto</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Condición corporal
          </label>
          <select
            name="bodyCondition"
            value={form.bodyCondition}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="delgado">Delgado</option>
            <option value="normal">Normal</option>
            <option value="sobrepeso">Sobrepeso</option>
          </select>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-wrap gap-2 justify-end pt-2">
        <button
          type="button"
          onClick={handleFullResetClick}
          className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
        >
          Limpiar
        </button>

        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-5 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
        >
          Calcular ración
        </button>
      </div>
    </form>
  );
}
