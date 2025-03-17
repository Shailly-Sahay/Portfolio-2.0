import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = [
    {
      name: "About Me",
      content:
        "THi there! I'm Shailly Sahay, your friendly front-end web developer from Patna, Bihar. I have done my bachelors in Physics from St. Xavier's College in Mumbai. I love making websites look great and work well. Let's create something amazing together!",
    },
    { name: "Work Experience", content: "This is content for Tab 2" },
    { name: "Education", content: "This is content for Tab 3" },
  ];

  return (
    <section className="">
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        <div className="w-1/2">
          <img
            src="/public/assets/me.jpg"
            alt=""
            className="w-full object-cover"
          />
        </div>

        <div className="flex w-1/2 section-pd">
          <div className="grid grid-cols-2 gap-4">
            {/* Make SectionHeader span across both columns */}
            <SectionHeader
              customClass="col-span-2 text-center"
              text={tabs.find((tab) => tab.name === activeTab)?.name}
            />

            {/* Tabs */}
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`py-2 px-4 text-center ${
                  activeTab === tab.name
                    ? "border-b-2 text-white border-blue-500 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}

            {/* Content - Make it span both columns */}
            <div className="col-span-2 p-4 rounded-b-lg">
              <p className="text-white">
                {tabs.find((tab) => tab.name === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
