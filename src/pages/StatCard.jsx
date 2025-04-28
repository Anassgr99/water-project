import { FiDroplet, FiThermometer, FiWind, FiCloudRain } from 'react-icons/fi';

export default function StatCard({ icon, label, value, unit, bgColor }) {
  const Icon = icon;

  return (
    <div className={`flex items-center p-4 rounded-lg shadow text-white ${bgColor}`}>
      <div className="text-4xl mr-4">
        <Icon />
      </div>
      <div>
        <div className="text-sm uppercase">{label}</div>
        <div className="text-2xl font-bold">{value} {unit}</div>
      </div>
    </div>
  );
}
