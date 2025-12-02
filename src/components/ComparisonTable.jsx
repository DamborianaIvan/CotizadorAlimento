export default function ComparisonTable({ plans }) {
  if (!plans || plans.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5">
      <h2 className="text-base font-semibold text-slate-800 mb-3">
        Comparación de planes
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-separate border-spacing-y-1">
          <thead>
            <tr className="text-xs uppercase text-slate-500">
              <th className="text-left px-3 py-2">Plan</th>
              <th className="text-center px-3 py-2">Gramos / día</th>
              <th className="text-center px-3 py-2">Comidas / día</th>
              <th className="text-center px-3 py-2">Gramos / comida</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr
                key={plan.id}
                className="bg-slate-50 hover:bg-slate-100 transition"
              >
                <td className="px-3 py-2 rounded-l-xl font-medium text-slate-800">
                  {plan.nombre}
                </td>
                <td className="px-3 py-2 text-center text-slate-700">
                  {plan.gramosDia}
                </td>
                <td className="px-3 py-2 text-center text-slate-700">
                  {plan.comidas}
                </td>
                <td className="px-3 py-2 text-center text-slate-700 rounded-r-xl">
                  {plan.gramosPorComida}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
