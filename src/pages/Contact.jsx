import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useCircuit } from "../context/CircuitContext";

const circuitOptions = [
  "Choisir un circuit",
  "Safari au Parc Kruger",
  "Route des Vins",
  "Route des Jardins",
  "Le Cap & Péninsule",
  "Route Panoramique",
  "Safari en Réserve Privée",
  "Randonnée au Drakensberg",
  "Culture Zouloue & Durban",
  "Johannesburg & Soweto",
  "Pretoria",
  "Sun City",
  "Circuit sur mesure",
];

const infoBlocks = [
  { icon: Phone, title: "Téléphone", lines: ["+27 81 783 9576", "Lun-Ven, 9h-18h (SAST)"] },
  { icon: Mail, title: "Email", lines: ["info@manguissaenafrique.com", "Réponse sous 24h"] },
  { icon: MapPin, title: "Adresse", lines: ["5 Melrose Street, Johannesburg, Afrique du Sud"] },
  { icon: Clock, title: "Horaires", lines: ["Lun - Ven : 9h00 - 18h00", "Sam : 9h00 - 13h00"] },
];

export default function Contact() {
  const { selectedCircuit } = useCircuit();
  const [circuit, setCircuit] = useState("Choisir un circuit");

  // Pre-fill the dropdown when arriving via a "Réserver" button
  useEffect(() => {
    if (selectedCircuit) setCircuit(selectedCircuit);
  }, [selectedCircuit]);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Merci ! Votre demande a bien été envoyée.");
  }

  return (
    <main>
      <section className="pt-40 pb-0 text-center">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="text-[13px] uppercase tracking-wider font-semibold text-gold">Parlons de votre voyage</div>
          <h1 className="text-heading-lg mt-2.5 mb-4.5">Contactez-nous</h1>
          <p className="text-lg opacity-65 max-w-[560px] mx-auto">
            Demandez votre devis personnalisé gratuit. Notre équipe vous répond sous 24 heures.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            {infoBlocks.map((b) => (
              <div key={b.title} className="flex gap-4 py-5 border-b border-navy/10 last:border-0">
                <div className="w-10 h-10 rounded-full bg-sand flex-shrink-0 flex items-center justify-center">
                  <b.icon className="w-[18px] h-[18px] text-navy" strokeWidth={1.7} />
                </div>
                <div>
                  <h4 className="font-semibold text-[15px] mb-0.5">{b.title}</h4>
                  {b.lines.map((line, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? "opacity-65" : "opacity-50 text-[12.5px]"}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-sand rounded-brand p-10">
            <h3 className="text-2xl font-medium mb-1.5">Demande de devis gratuit</h3>
            <p className="opacity-60 text-[15px] mb-7">
              Remplissez ce formulaire et nous vous préparerons un itinéraire sur mesure.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4.5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-2">Nom complet *</label>
                  <input required type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-brand border border-navy/10 bg-white text-[15px]" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-2">Email *</label>
                  <input required type="email" placeholder="vous@exemple.com" className="w-full px-4 py-3 rounded-brand border border-navy/10 bg-white text-[15px]" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-2">Téléphone</label>
                  <input type="tel" placeholder="+33 ..." className="w-full px-4 py-3 rounded-brand border border-navy/10 bg-white text-[15px]" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-2">Nombre de voyageurs</label>
                  <select className="w-full px-4 py-3 rounded-brand border border-navy/10 bg-white text-[15px]">
                    <option>Sélectionner</option>
                    <option>1 personne</option>
                    <option>2 personnes</option>
                    <option>3-4 personnes</option>
                    <option>5-8 personnes</option>
                    <option>8+ personnes</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-2">Circuit souhaité</label>
                <select
                  value={circuit}
                  onChange={(e) => setCircuit(e.target.value)}
                  className="w-full px-4 py-3 rounded-brand border border-navy/10 bg-white text-[15px]"
                >
                  {circuitOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-2">Votre message *</label>
                <textarea required placeholder="Parlez-nous de votre projet de voyage..." className="w-full px-4 py-3 rounded-brand border border-navy/10 bg-white text-[15px] min-h-[100px]" />
              </div>
              <button type="submit" className="w-full bg-gold hover:bg-golddark text-white font-semibold py-[15px] rounded-brand transition-colors">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
