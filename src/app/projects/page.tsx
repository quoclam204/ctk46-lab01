import Link from "next/link";
import { projects } from "@/src/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link href={`/projects/${project.id}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
            </Link>
            <p className="text-gray-600">{project.description}</p>
            <Link
              href={`/projects/${project.id}`}
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              Xem chi tiết →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
