import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/projects"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.description}</p>
        <div className="prose max-w-none text-gray-700 whitespace-pre-line">
          {project.content}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
