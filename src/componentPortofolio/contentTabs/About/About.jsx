export default function About({isHide = false}) {
  return (
    <>
      <header style={{display: isHide ? 'none' : 'block'}}>
        <h2 className="h2 article-title" style={{ color: 'white' }}>About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hello! My name is Yudi Gunawan, I am a Front End Developer who focuses on web
          development, with experience in building interactive and responsive web applications using
          Javascript, React js, Node js, antd, bootsrap etc.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

    </>
  )
}