import React from 'react';

const SkillGroup = ({ title, items }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900">{title}</h3>
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="px-2.5 py-1 text-sm bg-gray-100 text-gray-900 border border-gray-200">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Skills Overview</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillGroup title="Hardware" items={["ESP32", "STM32", "Arduino", "Raspberry Pi", "Wireless sensor modules"]} />
          <SkillGroup title="Protocols" items={["MQTT", "HTTP", "WebSocket", "LoRaWAN", "BLE"]} />
          <SkillGroup title="Platforms/Tools" items={["PlatformIO", "KiCad", "Docker", "Firebase", "AWS IoT"]} />
          <SkillGroup title="Languages" items={["C/C++", "Python", "JavaScript"]} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
