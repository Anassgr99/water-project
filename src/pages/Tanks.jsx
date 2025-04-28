import { FiDroplet, FiThermometer, FiActivity, FiZap, FiEye } from 'react-icons/fi';
import iconp from '../../public/tank.png'


export default function Tanks() {
  const getLevelColor = (level) => {
    if (level > 60) return 'bg-green-500';
    if (level > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  const tanksData = [
    {
      id: 1,
      name: "Tank 1 ",
      level: 75,
      conductivity: 450,
      temperature: 22.5, // en °C
      pressure: 1.2,     // en bars
      pH: 7.2,
      turbidity: 1.5     // en NTU
    },
    {
      id: 2,
      name: "Tank 2 ",
      level: 45,
      conductivity: 600,
      temperature: 24.0,
      pressure: 1.0,
      pH: 6.8,
      turbidity: 2.1
    },
    {
      id: 3,
      name: "Tank 3 ",
      level: 20,
      conductivity: 800,
      temperature: 25.5,
      pressure: 0.8,
      pH: 7.5,
      turbidity: 3.0
    }
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {tanksData.map(tank => (
        <div key={tank.id} className="bg-white p-6 rounded-xl shadow w-80 flex flex-col items-center space-y-4">
          {/* Icône du réservoir */}
          <div className="text-blue-500 text-5xl">
                <div className="w-24 h-24">
                  <img 
                    src={iconp} 
                    alt="Pompe à eau" 
                    className={`w-full h-full object-contain`} 
                  />
                </div>
          </div>
          {/* Nom du réservoir */}
          <h2 className="text-xl font-bold">{tank.name}</h2>

          {/* Niveau d'eau */}
          <div className="w-full">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Niveau d'eau</span>
              <span>{tank.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className={`${getLevelColor(tank.level)} h-3 rounded-full`} style={{ width: `${tank.level}%` }}></div>
            </div>
          </div>

          {/* Paramètres supplémentaires */}
          <div className="w-full text-sm text-gray-600 space-y-1">
            <div className="flex items-center">
              <FiZap className="mr-2 text-blue-500" />
              <span><strong>Conductivité :</strong> {tank.conductivity} µS/cm</span>
            </div>
            <div className="flex items-center">
              <FiThermometer className="mr-2 text-red-500" />
              <span><strong>Température :</strong> {tank.temperature} °C</span>
            </div>
            <div className="flex items-center">
              <FiActivity className="mr-2 text-green-500" />
              <span><strong>Pression :</strong> {tank.pressure} bar</span>
            </div>
            <div className="flex items-center">
              <FiZap className="mr-2 text-purple-500" />
              <span><strong>pH :</strong> {tank.pH}</span>
            </div>
            <div className="flex items-center">
              <FiEye className="mr-2 text-yellow-500" />
              <span><strong>Turbidité :</strong> {tank.turbidity} NTU</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
