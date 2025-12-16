import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>Habilidades</h2>
      <p>Aqui estão algumas das minhas principais habilidades técnicas e interpessoais:</p>

      <div className="skills-container">

        <div className="skills-box">
          <h3>Front-end</h3>
          <ul>
            <li><i className="devicon-html5-plain colored"></i> HTML5</li>
            <li><i className="devicon-css3-plain colored"></i> CSS3</li>
            <li><i className="devicon-react-original colored"></i> React</li>
            <li><i className="devicon-bootstrap-plain colored"></i> Bootstrap</li>
          </ul>
        </div>

        <div className="skills-box">
          <h3>Back-end</h3>
          <ul>
            <li><i className="devicon-mysql-plain colored"></i> MySQL</li>
            <li><i className="devicon-nodejs-plain-wordmark colored"></i> Node.js (em estudo)</li>
          </ul>
        </div>

        <div className="skills-box">
          <h3>Ferramentas</h3>
          <ul>
            <li><i className="devicon-git-plain colored"></i> Git & GitHub</li>
            <li><i className="fa-solid fa-code"></i> VSCode</li>
            <li><i className="devicon-figma-plain colored"></i> Figma</li>
          </ul>
        </div>

        <div className="skills-box">
          <h3>Soft Skills</h3>
          <ul>
            <li><i className="fa-solid fa-lightbulb"></i> Resolução de Problemas</li>
            <li><i className="fa-solid fa-people-group"></i> Trabalho em Equipe</li>
            <li><i className="fa-solid fa-bolt"></i> Aprendizado Rápido</li>
            <li><i className="fa-solid fa-comments"></i> Comunicação</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
