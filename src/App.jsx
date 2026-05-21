export default function Portfolio() {
  const projects = [
    {
      title: 'Simulaciones de Física Computacional',
      description:
        'Desarrollo de simulaciones numéricas, visualización científica y modelado físico usando Python.',
      tech: ['Python', 'NumPy', 'Matplotlib', 'SciPy'],
    },
    {
      title: 'LeetCode & Algoritmos',
      description:
        'Resolución de problemas algorítmicos enfocados en estructuras de datos, optimización y lógica computacional.',
      tech: ['Python', 'Algorithms', 'Data Structures'],
    },
    {
      title: 'Automatización Telecom',
      description:
        'Herramientas internas para automatización de procesos IMS/EPS/HLR, procesamiento de datos y generación de reportes.',
      tech: ['Python', 'Pandas', 'Regex', 'Automation'],
    },
    {
      title: 'Análisis de Datos e IA',
      description:
        'Proyectos de análisis de datos, redes neuronales e inteligencia artificial aplicada.',
      tech: ['Pandas', 'TensorFlow', 'PyTorch', 'Machine Learning'],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">Sergio Iglesias</h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>
            <a href="#projects" className="hover:text-white transition">
              Proyectos
            </a>
            <a href="#skills" className="hover:text-white transition">
              Tecnologías
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 mb-3 text-sm uppercase tracking-[0.3em]">
              Computational Physics · Backend Engineering
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Desarrollo software científico, backend e inteligencia artificial.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Graduado de Física enfocado en computación científica, backend, automatización e inteligencia artificial.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/sergioiglesias2002"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition"
              >
                LinkedIn
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-white/20 rounded-2xl hover:bg-white/10 transition"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-[2rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 shadow-2xl flex items-center justify-center text-7xl font-bold">
              SI
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-10">Sobre mí</h3>

          <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed text-lg">
            <p>
              Soy graduado de Física con enfoque en desarrollo científico y computacional. Disfruto construir herramientas complejas usando Python, visualización de datos, simulaciones y automatización de sistemas.
            </p>

            <p>
              Actualmente desarrollo proyectos relacionados con backend, análisis de datos, inteligencia artificial y automatización aplicada a telecomunicaciones y sistemas científicos.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Tecnologías</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Python',
              'Django',
              'FastAPI',
              'JavaScript',
              'TensorFlow',
              'PyTorch',
              'HTML',
              'CSS',
              'SQL',
              'Git',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-6 text-center text-lg hover:-translate-y-1 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Proyectos</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition"
              >
                <div className="h-44 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700 mb-6" />

                <h4 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h4>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-6">
            Ciencia, software e ingeniería.
          </h3>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Interesado en oportunidades relacionadas con backend engineering, inteligencia artificial, computación científica y desarrollo de software.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:tuemail@correo.com"
              className="px-6 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition"
            >
              Enviar correo
            </a>

            <a
              href="https://www.linkedin.com/in/sergioiglesias2002"
              target="_blank"
              className="px-6 py-3 border border-white/20 rounded-2xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Sergio Iglesias — Portfolio.
      </footer>
    </div>
  )
}
