export default function About({ isHide = false }) {
  return (
    <>
      <header style={{ display: isHide ? 'none' : 'block' }}>
        <h2 className="h2 article-title" style={{ color: 'white' }}>About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hello! My name is Yudi Gunawan, I am a Front End Developer who focuses on web
          development, with experience in building interactive and responsive web applications using
          Javascript, React js, Node js, antd, bootsrap etc.
        </p>

        <p>
          🎓 Education:

          Bachelor's degree in Informatics Engineering from Institut Teknologi Sumatera (ITERA).

          💻 Professional Background:

          🚀 Front End Developer: Currently working as a Front-End Developer with a specialization in ReactJS at PT. Nutech Integrasi since Juli 2023. I focus on building dynamic and responsive web applications.

          📅 Experience: My journey as a Front-End Developer at PT. Cerdaskan Bangsa has allowed me to delve deep into ReactJS and ExpressJS, honing my skills in JavaScript programming and enriching my understanding of web development.
        </p>
      </section>

    </>
  )
}