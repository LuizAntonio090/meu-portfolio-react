import { useState } from 'react';
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, GraduationCap,
  BriefcaseBusiness, ExternalLink, Database, Layers3, Monitor, Sparkles
} from 'lucide-react';

const skills = [
  { name: 'Java', group: 'Desenvolvimento' },
  { name: 'Spring Boot', group: 'Desenvolvimento' },
  { name: 'JavaScript', group: 'Desenvolvimento' },
  { name: 'HTML5', group: 'Desenvolvimento' },
  { name: 'CSS3', group: 'Desenvolvimento' },
  { name: 'Python', group: 'Desenvolvimento' },
  { name: 'React', group: 'Desenvolvimento' },
  { name: 'SQL / MySQL', group: 'Dados' },
  { name: 'MongoDB', group: 'Dados' },
  { name: 'Power BI', group: 'Dados' },
  { name: 'Git & GitHub', group: 'Ferramentas' },
  { name: 'AWS', group: 'Cloud' },
];

const projects = [
  {
    number: '01',
    title: 'EduGuru',
    type: 'Projeto acadêmico · Plataforma educacional',
    description: 'Plataforma web que busca centralizar a jornada de estudos de universitários por meio de quizzes, acompanhamento de desempenho, pontuação e recomendações de conteúdo.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Educação'],
    icon: GraduationCap,
    link: 'https://github.com/tttrisos/EduGuru',
  },
  {
    number: '02',
    title: 'Previsão de desempenho acadêmico',
    type: 'Projeto acadêmico · Inteligência Artificial',
    description: 'Experimento de análise e previsão de notas com base em horas de estudo, explorando conceitos de dados e aprendizado de máquina com TensorFlow.js.',
    tags: ['JavaScript', 'TensorFlow.js', 'Dados'],
    icon: Database,
  },
  {
    number: '03',
    title: 'Aplicações e APIs com Java',
    type: 'Estudos · Desenvolvimento back-end',
    description: 'Prática de desenvolvimento back-end com Java e Spring Boot, incluindo APIs REST, integração de serviços, validações e persistência de dados.',
    tags: ['Java', 'Spring Boot', 'APIs REST', 'SQL'],
    icon: Code2,
  },
];

const navItems = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Habilidades', '#habilidades'],
  ['Projetos', '#projetos'],
  ['Contato', '#contato'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu}>LC<span>.</span></a>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> PORTFÓLIO PESSOAL</div>
            <h1>Olá, eu sou<br /><span>Luiz Corrêa.</span></h1>
            <p className="hero-lead">Estudante de Sistemas de Informação, interessado em tecnologia e no desenvolvimento de soluções que conectam pessoas e ideias.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">Conheça meus projetos <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#sobre">Sobre mim</a>
            </div>
            <div className="hero-meta">
              <span><GraduationCap size={16} /> Sistemas de Informação · UMC</span>
              <span><Sparkles size={16} /> Em constante aprendizado</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Cartão visual de apresentação">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top"><span>HELLO, WORLD!</span><Code2 size={18} /></div>
              <div className="avatar-mark">LC<span>.</span></div>
              <div className="profile-card-name">Luiz Corrêa</div>
              <div className="profile-card-role">Information Systems Student</div>
              <div className="profile-card-bottom"><span>BUILDING IDEAS</span><span>2026</span></div>
            </div>
            <div className="floating-chip chip-code"><Code2 size={16} /> Desenvolvedor em formação</div>
            <div className="floating-chip chip-data"><Layers3 size={16} /> Tecnologia & dados</div>
          </div>
          <a className="scroll-hint" href="#sobre">ROLE PARA EXPLORAR <span>↓</span></a>
        </section>

        <section className="section about-section" id="sobre">
          <div className="section-heading">
            <span className="section-kicker">01 / SOBRE</span>
            <h2>Um pouco sobre <span>mim.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-intro">
              <p className="large-copy">Sou estudante de <strong>Sistemas de Informação na Universidade de Mogi das Cruzes (UMC)</strong> e tenho interesse em desenvolvimento de software, tecnologia e análise de dados.</p>
            </div>
            <div className="about-details">
              <p>Durante minha formação, venho desenvolvendo projetos acadêmicos e ampliando meus conhecimentos em programação, banco de dados, desenvolvimento web e ferramentas de tecnologia.</p>
              <p>Gosto de aprender na prática, explorar novas ferramentas e transformar ideias em aplicações úteis. Meu objetivo é continuar evoluindo tecnicamente e contribuir para projetos reais.</p>
              <div className="detail-cards">
                <div className="detail-card"><GraduationCap size={20} /><span>Formação</span><strong>Sistemas de Informação</strong><small>UMC · Em andamento</small></div>
                <div className="detail-card"><Monitor size={20} /><span>Foco de estudos</span><strong>Desenvolvimento e dados</strong><small>Projetos acadêmicos e pessoais</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="habilidades">
          <div className="section-heading">
            <span className="section-kicker">02 / HABILIDADES</span>
            <h2>Tecnologias que <span>exploro.</span></h2>
            <p className="section-description">Conhecimentos desenvolvidos durante minha formação e em estudos complementares.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-note"><BriefcaseBusiness size={25} /><h3>Aprendizado contínuo</h3><p>Minha formação combina fundamentos de programação, construção de aplicações, bancos de dados e ferramentas de análise.</p></div>
            <div className="skills-list">
              {['Desenvolvimento', 'Dados', 'Ferramentas', 'Cloud'].map(group => (
                <div className="skill-group" key={group}>
                  <h3>{group}</h3>
                  <div className="skill-tags">{skills.filter(s => s.group === group).map(skill => <span key={skill.name}>{skill.name}</span>)}</div>
                </div>
              ))}
              <div className="skill-group">
                <h3>Idiomas</h3>
                <div className="skill-tags"><span>Português · Nativo</span><span>Inglês · Avançado</span></div>
              </div>
            </div>
          </div>
          <div className="courses-strip"><span>CURSOS COMPLEMENTARES</span><strong>AWS · SENAI</strong><i /> <strong>Power BI · SENAI</strong></div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading">
            <span className="section-kicker">03 / PROJETOS</span>
            <h2>Ideias que viram <span>projetos.</span></h2>
            <p className="section-description">Alguns trabalhos e estudos desenvolvidos ao longo da minha jornada acadêmica.</p>
          </div>
          <div className="projects-grid">
            {projects.map(project => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-top"><span>{project.number} / 03</span><Icon size={24} /></div>
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Ver no GitHub <ExternalLink size={15} /></a>}
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section section" id="contato">
          <div className="contact-panel">
            <span className="section-kicker">04 / CONTATO</span>
            <h2>Vamos construir<br /><span>algo juntos?</span></h2>
            <p>Estou aberto a trocar experiências, aprender e conhecer novas oportunidades na área de tecnologia.</p>
            <a className="button button-primary" href="https://github.com/LuizAntonio090" target="_blank" rel="noreferrer"><Github size={17} /> Acesse meu GitHub <ArrowUpRight size={16} /></a>
            <div className="contact-socials">
              <a href="https://github.com/LuizAntonio090" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/in/luiz-antonio-24a3a7316" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:luizsilvacorrea0@gmail.com" aria-label="E-mail"><Mail /></a>
            </div>
            <p className="edit-note">Antes de publicar, revise seus links de contato antes de publicar.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#inicio">LC<span>.</span></a>
        <span>© 2026 Luiz Corrêa · Desenvolvido com React</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}

export default App;
