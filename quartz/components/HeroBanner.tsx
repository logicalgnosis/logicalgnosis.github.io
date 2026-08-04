import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeroBanner: QuartzComponent = () => {
return ( <div
   style="
     display:flex;
     align-items:center;
     justify-content:center;
     gap:70px;
     margin-top:5px;
     margin-bottom:35px;
   "
 > <img
     src="/static/LogoL.png"
     style="width:175px;height:auto;"
     alt="Left Symbol"
   />

  <div
    style="
      text-align:center;
    "
  >
    <div
      style="
        font-size:1.9rem;
        font-weight:700;
        letter-spacing:.10em;
      "
    >
      Meta-Para-Ontology
    </div>

    <div
      style="
        margin-top:8px;
        font-size:0.7rem;
        letter-spacing:.05em;
      "
    >
      ✦✦✦
    </div>

    <div
      style="
        margin-top:4px;
        font-size:1.9rem;
        font-weight:700;
        letter-spacing:.10em;
      "
    >
      Logical Gnosis
    </div>
  </div>

  <img
    src="/static/LogoR.png"
    style="width:175px;height:auto;"
    alt="Right Symbol"
  />
</div>


)
}

export default (() => HeroBanner) satisfies QuartzComponentConstructor
