import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeroBanner: QuartzComponent = () => {
  return (
    <div
      style="
        width:100%;
        margin:0;
        padding:0;
        overflow:hidden;
      "
    >
      <img
        src="/static/logicalgnosishead.jpg"
        alt="Meta-Para-Ontology — Logical Gnosis"
        style="
          display:block;
          width:100%;
          height:auto;
        "
      />
    </div>
  )
}

export default (() => HeroBanner) satisfies QuartzComponentConstructor
