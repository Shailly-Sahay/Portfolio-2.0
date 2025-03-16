import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const tabs = [
    { name: "About Me", content: "This is content for Tab 1" },
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

        <div className="flex flex-col section-pd">
          <div>
            {tabs.map((tab) => (
              <>
                <button
                  key={tab.name}
                  className={`flex-1 py-2 px-4 text-center ${
                    activeTab === tab.name
                      ? "border-b-2 border-blue-500 font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              </>
            ))}
          </div>

          <div className="p-4 rounded-b-lg">
            <SectionHeader
              text={tabs.find((tab) => tab.name === activeTab)?.name}
            />
            <p className="text-white">
              {" "}
              {tabs.find((tab) => tab.name === activeTab)?.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
