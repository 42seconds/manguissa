import { useState } from "react";
import TourCard from "../components/TourCard";
import CircuitDetailModal from "../components/CircuitDetailModal";
import { circuits, filterCategories } from "../data/circuits";

export default function Circuits() {
  const [filter, setFilter] = useState("tous");
  const [activeCircuit, setActiveCircuit] = useState(null);
  const visible = filter === "tous" ? circuits : circuits.filter((c) => c.category === filter);

  return (
    <main>
      <section className="pt-40 pb-16 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">Explorez</div>
          <h1 className="text-heading-lg mt-2.5 mb-4.5">Nos Circuits</h1>
          <p className="text-lg opacity-65 max-w-[560px] mx-auto">
            Du safari au Big Five à la dégustation de vins, trouvez le circuit parfait pour votre aventure
            sud-africaine.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex gap-3 justify-center flex-wrap mb-12">
            {filterCategories.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-5 py-2.5 text-sm border transition-colors ${
                  filter === f.key
                    ? "bg-navy text-white border-navy"
                    : "border-navy/10 opacity-75 hover:border-navy"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((c) => (
              <TourCard key={c.id} circuit={c} showFilterTag onViewDetails={setActiveCircuit} />
            ))}
          </div>
        </div>
      </section>

      <CircuitDetailModal circuit={activeCircuit} onClose={() => setActiveCircuit(null)} />
    </main>
  );
}
