import './Home.css';

function Home() {
  return (
    <main className='home'>

      <section className='hero'>
        <h1>Unidad Educativa Eloy Velasquez Cevallos</h1>
        <p>Educacion con valores, exelencia y compromiso</p>
      </section>

      <section className='pesentacion'>
        <h2>Formando el Futuro</h2>
        <p>
          Nuestra institución se dedica a brindar una educación integral,
          fomentando el desarrollo académico, humano y social de nuestros estudiantes.
        </p>
      </section>

      <section className="destacados">
        <div className="card">
          <h3>Oferta Académica</h3>
          <p>Programas educativos diseñados para cada etapa del aprendizaje.</p>
        </div>

        <div className="card">
          <h3>Noticias</h3>
          <p>Entérate de las actividades y eventos más recientes.</p>
        </div>

        <div className="card">
          <h3>Comunidad</h3>
          <p>Una comunidad educativa unida y comprometida.</p>
        </div>
      </section>

       <section className="cta">
        <h2>¿Deseas más información?</h2>
        <p>Contáctanos y con gusto atenderemos tus inquietudes.</p>
      </section>
    </main>
  );
}

export default Home;