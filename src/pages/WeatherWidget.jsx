// src/components/WeatherWidget.jsx
import Chart from 'react-apexcharts';
import { FiDroplet, FiWind, FiSun, FiCloudRain } from 'react-icons/fi';

export default function WeatherWidget() {
  const hourlyTemp = {
    options: {
      chart: { toolbar: { show: false }, sparkline: { enabled: true } },
      stroke: { curve: 'smooth' },
      xaxis: { categories: ['20:00', '23:00', '02:00', '05:00', '08:00', '11:00', '14:00', '17:00'] },
      tooltip: { enabled: false }
    },
    series: [{ name: 'Température', data: [18, 17, 15, 15, 14, 19, 21, 21] }]
  };

  const forecasts = [
    { day: 'Fri', icon: <FiCloudRain />, temp: '23° / 15°' },
    { day: 'Sat', icon: <FiSun />, temp: '22° / 11°' },
    { day: 'Sun', icon: <FiSun />, temp: '23° / 13°' },
    { day: 'Mon', icon: <FiSun />, temp: '26° / 15°' },
    { day: 'Tue', icon: <FiCloudRain />, temp: '23° / 15°' },
    { day: 'Wed', icon: <FiCloudRain />, temp: '20° / 13°' },
    { day: 'Thu', icon: <FiSun />, temp: '22° / 13°' },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6 w-full">
      {/* Haut - Info actuelle */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-6xl text-yellow-400"><FiSun /></div>
          <div>
            <div className="text-5xl font-bold">18°C</div>
            <div className="text-gray-500">Sunny</div>
          </div>
        </div>
        <div className="space-y-1 text-sm text-gray-600">
          <div><strong>Précipitation:</strong> 0%</div>
          <div><strong>Humidité:</strong> 91%</div>
          <div><strong>Vent:</strong> 11 km/h</div>
        </div>
      </div>

      {/* Milieu - Graph */}
      <div className="w-full">
        <Chart options={hourlyTemp.options} series={hourlyTemp.series} type="area" height={150} />
      </div>

      {/* Bas - Prévisions */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {forecasts.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-gray-600">
            <div className="font-medium">{item.day}</div>
            <div className="text-2xl text-yellow-500">{item.icon}</div>
            <div>{item.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
