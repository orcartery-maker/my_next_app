export const metadata = { title: "Projects | Gerald" };

const projects = [
  { id: 1, name: "Tide Tracker", description: "A simple page that shows the tide times for my hometown." },
  { id: 2, name: "Lumi Notes", description: "A small notes app for jotting down ideas during class." },
  { id: 3, name: "Pandan Pantry", description: "A recipe collection of my favorite local dishes." },
];

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </main>
  );
}