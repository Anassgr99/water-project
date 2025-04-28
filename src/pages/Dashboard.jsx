import Chart from "react-apexcharts";
import StatCard from "./StatCard";
import {
  FiActivity,
  FiDroplet,
  FiWind,
  FiThermometer,
  FiCloudRain,
} from "react-icons/fi";
import WeatherWidget from "./WeatherWidget";

export default function Dashboard() {
  const commonOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth" },
  };

  const pressureData = {
    options: {
      ...commonOptions,
      xaxis: { categories: ["15:00", "16:00", "17:00", "18:00", "19:00"] },
    },
    series: [{ name: "Pression (bar)", data: [4, 4.1, 4.3, 4.1, 4] }],
  };
  const pressureData1 = {
    options: {
      ...commonOptions,
      xaxis: { categories: ["15:00", "16:00", "17:00", "18:00", "19:00"] },
    },
    series: [{ name: "Pression (bar)", data: [4.5, 4.6, 4.7, 4.6, 4.5] }],
  };

  const consumptionData = {
    options: {
      ...commonOptions,
      xaxis: { categories: ["Lun", "Mar", "Mer", "Jeu", "Ven"] },
    },
    series: [{ name: "Consommation (m³)", data: [120, 150, 100, 170, 140] }],
  };
  const consumptionData1 = {
    options: {
      ...commonOptions,
      xaxis: { categories: ["Lun", "Mar", "Mer", "Jeu", "Ven"] },
    },
    series: [{ name: "Consommation (m³)", data: [120, 150, 100, 170, 140] }],
  };

  const debitData = {
    options: {
      ...commonOptions,
      xaxis: { categories: ["S1", "S2", "S3", "S4"] },
    },
    series: [{ name: "Débit (L/s)", data: [15, 18, 14, 20] }],
  };

  const temperatureData = {
    options: {
      ...commonOptions,
      xaxis: { categories: ["8h", "12h", "16h", "20h"] },
    },
    series: [{ name: "Température (°C)", data: [22, 26, 24, 20] }],
  };

  const humidityData = {
    options: { labels: ["Humidité"] },
    series: [65], // 65% Humidité
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={FiActivity}
          label="Pression"
          value={4.5}
          unit="bar"
          bgColor="bg-gradient-to-r from-blue-500 to-blue-700"
        />
        <StatCard
          icon={FiDroplet}
          label="Consommation"
          value={150}
          unit="m³"
          bgColor="bg-gradient-to-r from-teal-400 to-teal-600"
        />
        <StatCard
          icon={FiWind}
          label="Débit"
          value={18}
          unit="L/s"
          bgColor="bg-gradient-to-r from-purple-500 to-purple-700"
        />
        <StatCard
          icon={FiThermometer}
          label="Température"
          value={26}
          unit="°C"
          bgColor="bg-gradient-to-r from-red-400 to-red-600"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Pression</h3>
          <WeatherWidget />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Pression</h3>
          <Chart
            options={pressureData.options}
            series={pressureData.series}
            type="line"
            height={350}
          />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">consigne de pression</h3>
          <Chart
            options={pressureData1.options}
            series={pressureData1.series}
            type="line"
            height={250}
          />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Consommation d'eau d'entrée</h3>
          <Chart
            options={consumptionData.options}
            series={consumptionData.series}
            type="bar"
            height={250}
          />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Consommation d'eau de sortie</h3>
          <Chart
            options={consumptionData1.options}
            series={consumptionData1.series}
            type="bar"
            height={250}
          />
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Débit</h3>
          <Chart
            options={debitData.options}
            series={debitData.series}
            type="area"
            height={250}
          />
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Température</h3>
          <Chart
            options={temperatureData.options}
            series={temperatureData.series}
            type="line"
            height={250}
          />
        </div>

        <div className="bg-white p-4 shadow rounded flex items-center justify-center">
          <Chart
            options={humidityData.options}
            series={humidityData.series}
            type="radialBar"
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
