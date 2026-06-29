const items = [
  { label: "Safari au Parc Kruger", image: "/images/kruger.jpg" },
  { label: "Route des Vins", image: "/images/stellenbosch.jpg" },
  { label: "Route des Jardins", image: "/images/garden-route.jpg" },
  { label: "Le Cap", image: "/images/cape-town.jpg" },
  { label: "Drakensberg", image: "/images/drakensberg.jpg" },
  { label: "Johannesburg", image: "/images/johannesburg.jpg" },
  { label: "Soweto", image: "/images/soweto.jpg" },
  { label: "Pretoria", image: "/images/pretoria.jpg" },
  { label: "Durban & Culture Zouloue", image: "/images/durban-zulu.jpg" },
];

export default function Gallery() {
  return (
    <main>
      <section className="pt-40 pb-16 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">Galerie</div>
          <h1 className="text-heading-lg mt-2.5 mb-4.5">Nos voyages en images</h1>
          <p className="text-lg opacity-65 max-w-[560px] mx-auto">
            Un aperçu des moments capturés par nos voyageurs et nos guides à travers l'Afrique du Sud.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-[1180px] mx-auto px-8">
          {/* True masonry via CSS columns — no row-span/aspect-ratio conflicts, so
              images keep their natural proportions instead of being squashed. */}
          <div className="columns-2 md:columns-3 gap-5 [column-fill:_balance]">
            {items.map((it) => (
              <div
                key={it.label}
                className="relative mb-5 rounded-brand overflow-hidden bg-gradient-to-br from-gold/70 to-navy/70 break-inside-avoid"
              >
                <img
                  src={it.image}
                  alt={it.label}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-full h-auto block"
                />
                <span className="absolute left-4 bottom-4 text-sm font-semibold text-white bg-black/40 px-4 py-2 rounded-full">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
