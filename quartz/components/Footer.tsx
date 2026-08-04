import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Footer: QuartzComponent = () => {
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
      <div>Meta-Para-Ontology · Logical Gnosis</div>
      <div>Built on Quartz</div>
      <div>© 2026</div>
    </footer>
  )
}

export default (() => Footer) satisfies QuartzComponentConstructor