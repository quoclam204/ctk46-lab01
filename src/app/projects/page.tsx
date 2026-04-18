import Link from "next/link";
import { projects } from "@/src/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 flex flex-col bg-white
                       hover:shadow-lg hover:-translate-y-1
                       transition-all duration-300"
          >
            {/* Title + Status */}
            <div className="flex items-center justify-between mb-3">
              <Link href={`/projects/${project.id}`}>
                <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
              </Link>

              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${
                  project.status === "Hoàn thành"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-auto mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link chi tiết */}
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-600 text-sm hover:underline"
            >
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
