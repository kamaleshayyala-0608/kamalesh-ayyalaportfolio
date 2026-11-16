import { useReveal } from '../hooks/useReveal';

function RagArt() {
  return (
    <div className="project-art art-rag">
      <div className="art-grid"></div>
      <div className="rag-window">
        <div className="window-bar">
          <i></i>
          <i></i>
          <i></i>
          <span>DOCUMENT INTELLIGENCE</span>
        </div>
        <div className="rag-node node-one">PDF documents</div>
        <div className="rag-node node-two">Semantic search</div>
        <div className="rag-node node-three">Answer + verify</div>
        <div className="rag-connect connect-one"></div>
        <div className="rag-connect connect-two"></div>
        <div className="rag-core">
          RAG<span>✳</span>
        </div>
      </div>
      <span className="art-label">GENERATIVE AI</span>
    </div>
  );
}

function TicketArt() {
  return (
    <div className="project-art art-ticket">
      <div className="ticket-board">
        <div className="ticket-top">
          <span>WORKFLOW / OVERVIEW</span>
          <span className="tiny-pill">LIVE FLOW</span>
        </div>
        <div className="ticket-stat">
          <b>Ticket workflow</b>
          <span>Assignment → Resolution</span>
        </div>
        <div className="flow-steps">
          <span>New</span>
          <i>→</i>
          <span>Assigned</span>
          <i>→</i>
          <span>Resolved</span>
        </div>
        <div className="ticket-bars">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
      <span className="art-label">FULL STACK</span>
    </div>
  );
}

function VisionArt() {
  return (
    <div className="project-art art-vision">
      <div className="vision-frame">
        <div className="bottle bottle-one">
          <span>WATER</span>
        </div>
        <div className="bottle bottle-two">
          <span>BRAND</span>
        </div>
        <div className="detect-box box-one">
          <small>OBJECT 01</small>
        </div>
        <div className="detect-box box-two">
          <small>OBJECT 02</small>
        </div>
        <div className="vision-scan"></div>
        <span className="vision-status">DETECTION ACTIVE</span>
      </div>
      <span className="art-label">COMPUTER VISION</span>
    </div>
  );
}

function PlantArt() {
  return (
    <div className="project-art art-plant">
      <div className="plant-ui">
        <div className="plant-leaf">✿</div>
        <div className="plant-ui-lines">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="plant-chip">PLANT HEALTH AI</div>
        <div className="plant-score">
          <span>Image analysis</span>
          <b>ML</b>
        </div>
      </div>
      <span className="art-label">MACHINE LEARNING</span>
    </div>
  );
}

function HrArt() {
  return (
    <div className="project-art art-hr">
      <div className="hr-ui">
        <div className="hr-sidebar">
          <span>H</span>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="hr-content">
          <span>PEOPLE OPERATIONS</span>
          <b>HR Portal</b>
          <div className="hr-people">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="hr-lines">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
      <span className="art-label">WEB DEVELOPMENT</span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const ref = useReveal();

  const renderArt = () => {
    if (project.artClass === 'art-rag') return <RagArt />;
    if (project.artClass === 'art-ticket') return <TicketArt />;
    if (project.artClass === 'art-vision') return <VisionArt />;
    if (project.artClass === 'art-plant') return <PlantArt />;
    if (project.artClass === 'art-hr') return <HrArt />;
    return null;
  };

  const cardClass = project.featured ? 'project-card project-featured reveal' : 'project-card reveal';

  return (
    <article className={cardClass} ref={ref}>
      {renderArt()}
      <div className="project-info">
        <div className="project-meta">
          {project.meta.map((m, idx) => (
            <span key={idx}>
              {m}
              {idx < project.meta.length - 1 ? <span className="project-dot"></span> : null}
            </span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
          {project.link.label} <span>↗</span>
        </a>
      </div>
    </article>
  );
}
