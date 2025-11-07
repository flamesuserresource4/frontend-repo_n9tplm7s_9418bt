import React from 'react';

const ProjectCard = ({ title, problem, implementation, tech, repo }) => {
  return (
    <article className="flex flex-col border border-gray-200 bg-white">
      <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center text-gray-500 text-sm uppercase tracking-wide">
        Diagram / Image
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-800"><span className="font-medium">Problem:</span> {problem}</p>
        <p className="text-sm text-gray-800"><span className="font-medium">Core:</span> {implementation}</p>
        <p className="text-sm text-gray-800"><span className="font-medium">Tech:</span> {tech}</p>
        <a href={repo} target="_blank" rel="noreferrer" className="mt-1 text-sm text-gray-900 underline underline-offset-4 hover:no-underline">
          GitHub Repository
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const data = [
    {
      title: "Remote Environmental Node",
      problem: "Collect temperature/humidity in remote areas with low power budget.",
      implementation: "ESP32 deep sleep cycles, BME280 sensor, buffered MQTT publish via Wi-Fi when gateway available; OTA updates via HTTP.",
      tech: "ESP32, BME280, MQTT, HTTP OTA, PlatformIO, AWS IoT",
      repo: "https://github.com/yourusername/remote-env-node",
    },
    {
      title: "LoRaWAN Asset Tracker",
      problem: "Track moving assets over long range with sparse connectivity.",
      implementation: "STM32 low-power firmware with GNSS, uplinks via LoRaWAN Class A; downlinks for configuration; server bridges to WebSocket dashboard.",
      tech: "STM32, LoRaWAN, GNSS, ChirpStack, WebSocket, Docker",
      repo: "https://github.com/yourusername/lorawan-asset-tracker",
    },
    {
      title: "BLE → MQTT Gateway",
      problem: "Stream BLE sensor data to cloud without a phone.",
      implementation: "Raspberry Pi runs containerized gateway scanning BLE advertisements, deduplicates, and publishes structured payloads to MQTT topics.",
      tech: "Raspberry Pi, Docker, BLE, MQTT, Python",
      repo: "https://github.com/yourusername/ble-mqtt-gateway",
    },
  ];

  return (
    <section className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Project Showcase</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
