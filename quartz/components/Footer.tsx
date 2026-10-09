import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Footer: QuartzComponent = () => {
  const iconStyle = "width:24px; height:24px; vertical-align:-4px; margin-right:5px;"

  return (
    <footer
      style="
        text-align:center;
        margin-top:40px;
        margin-bottom:20px;
        font-size:0.9rem;
        line-height:1.8;
        opacity:0.8;
      "
    >
      <div style="margin-bottom:12px; font-size:1.1rem;">
        <a
          href="https://logicalgnosis.discourse.group/"
          target="_blank"
          rel="noopener noreferrer"
          style="margin:0 10px; font-weight:600; text-decoration:none;"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style={iconStyle}>
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z" />
            <path d="M8 10h8M8 14h5" />
          </svg>
          Forum
        </a>
        <span>·</span>
        <a
          href="https://www.youtube.com/@MetaParaOntology"
          target="_blank"
          rel="noopener noreferrer"
          style="margin:0 10px; font-weight:600; text-decoration:none;"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
          </svg>
          YouTube
        </a>
        <span>·</span>
        <a
          href="https://ko-fi.com/logicalgnosis"
          target="_blank"
          rel="noopener noreferrer"
          style="margin:0 10px; font-weight:600; text-decoration:none;"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style={iconStyle}>
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
          Support
        </a>
      </div>

      <div>Meta-Para-Ontology · Logical Gnosis</div>
      <div>Built on Quartz</div>
      <div>© 2026</div>
    </footer>
  )
}

export default (() => Footer) satisfies QuartzComponentConstructor