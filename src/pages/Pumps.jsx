import { useState } from 'react';
import { FiPower, FiMapPin } from 'react-icons/fi';
import iconp from '../../public/icon_pompes.png'
const pumpsData = [
  { id: 1, name: "Pompe 1", location: "Barrage Oum Rabi3", flow: 65, status: true },
  { id: 2, name: "Pompe 2", location: "Rabat", flow: 40, status: false },
];

export default function Pumps() {
  const [pumps, setPumps] = useState(pumpsData);

  const togglePumpStatus = (id, newState) => {
    setPumps(pumps.map(p => p.id === id ? { ...p, status: newState } : p));
  };

  const PumpCard = ({ pump }) => (
    <div className={`p-6 rounded-xl shadow flex flex-col space-y-4 w-full md:w-1/2 lg:w-1/3 ${pump.status ? 'bg-white' : 'bg-red-100'}`}>
  <div className="flex items-center">
    {/* Image Pompe */}
    <div className="w-24 h-24">
      <img 
        src={iconp} 
        alt="Pompe à eau" 
        className={`w-full h-full object-contain ${pump.status ? '' : 'grayscale'}`} 
      />
    </div>

    {/* Infos */}
    <div className="flex-1 pl-4">
      <h2 className="text-lg font-bold">{pump.name}</h2>
      <div className="flex items-center text-sm text-gray-500">
        <FiMapPin className="mr-1" /> {pump.location}
      </div>
      <div className="mt-2">
        <div className="text-xs text-gray-400 mb-1">Débit</div>
        <input type="range" min="0" max="100" value={pump.flow} readOnly className="w-full accent-blue-500" />
        <div className="text-right text-xs text-gray-400">{pump.flow}%</div>
      </div>
    </div>
  </div>

  {/* Boutons */}
  <div className="flex justify-between items-center">
    <div className="flex space-x-4">
      <button
        onClick={() => togglePumpStatus(pump.id, true)}
        className={`px-4 py-1 rounded ${pump.status ? 'bg-green-600' : 'bg-green-400'} text-white`}
      >
        ON
      </button>
      <button
        onClick={() => togglePumpStatus(pump.id, false)}
        className={`px-4 py-1 rounded ${!pump.status ? 'bg-red-600' : 'bg-red-400'} text-white`}
      >
        OFF
      </button>
    </div>
    <div className={`text-2xl ${pump.status ? 'text-green-500' : 'text-red-500'}`}>
      <FiPower />
    </div>
  </div>
</div>

  );

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {pumps.map(pump => (
        <PumpCard key={pump.id} pump={pump} />
      ))}
    </div>
  );
}
