export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng</h1>

      <p className="text-gray-600 mb-8">
        Đây là những kỹ năng tôi đang học tập và phát triển trong quá trình trở
        thành Fullstack Web Developer.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Frontend</h2>
          <ul className="space-y-2 text-gray-600">
            <li>HTML / CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>React.js / Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Backend</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Node.js / Express</li>
            <li>RESTful API</li>
            <li>MongoDB / MySQL</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Công cụ</h2>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "VS Code", "Postman", "Figma"].map((tool) => (
              <span
                key={tool}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
