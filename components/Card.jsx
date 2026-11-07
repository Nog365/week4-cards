
export default function Card({ project }) {
  const categoryColors = {
    "Web App": "bg-[#21345B]",
    "Mobile App": "bg-[#087D4A]",
    Dashboard: "bg-[#86168B]",
    Productivity: "bg-[#824027]",
    Marketing: "bg-[#A00000]",
    Nonprofit: "bg-[#758638]",
  };

  return (
    <div className="flex min-h-44 flex-col items-center justify-between rounded-xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-base font-bold text-black">
        {project.title}
      </h3>

      <p className="text-sm font-semibold text-gray-800">
        {project.client}
      </p>

      <span
        className={`rounded-full px-5 py-2 text-xs font-semibold text-white ${
          categoryColors[project.category] || "bg-gray-600"
        }`}
      >
        {project.category}
      </span>
    </div>
  );
}
