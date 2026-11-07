
import Card from "../components/Card";
import projects from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-[#21345B] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <h1 className="text-xl font-bold">
            LAURUS DESIGN
          </h1>

          <nav className="flex gap-6 text-sm">
            <a href="#projects">Team</a>
            <a href="#projects">Places</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16 text-center"
      >
        <h2 className="mb-6 text-2xl font-bold text-black">
          THE FUTURE OF WEB DESIGN - AI
        </h2>

        <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-900">
          AI acts as a creative partner rather than just a
          basic tool—automating layout adjustments,
          generating custom components, and tailoring
          content or recommendations in real time based
          on user behavior.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block rounded-full bg-[#21345B] px-12 py-3 font-semibold text-white transition hover:bg-[#344D7A]"
        >
          Learn More
        </a>
      </section>

      {/* Project Cards */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 pb-16"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold text-black">
          Explore Our Recent Projects
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#21345B] px-6 py-6 text-center text-sm text-white">
        <p>
          © 2026 LauriusDesign. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
