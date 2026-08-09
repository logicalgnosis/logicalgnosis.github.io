import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { Search } from "@quartz-community/search"
import { Darkmode } from "@quartz-community/darkmode"

const SearchComponent = Search()
const DarkModeComponent = Darkmode()

const TopMenu: QuartzComponent = (props) => {
  return (
     <div
       class="top-menu"
       style="font-size:17px; color:#65502C; background:light-dark(#ede6d5, #2f2c26);"
     >


      <nav>

        <a href="/" style="display:inline-block;margin-right:8px;margin-left:8px;">
          Home
        </a>

        <span class="menu-divider">|</span>

        <a href="/logical-gnosis/" style="display:inline-block;margin-right:8px;margin-left:8px;">
          Logical Gnosis
        </a>

        <span class="menu-divider">|</span>

        <a href="/meta-para-ontology/" style="display:inline-block;margin-right:8px;margin-left:8px;">
          Meta-Para-Ontology
        </a>

        <span class="menu-divider">|</span>

        <a href="/polymetaphysical-cartography/" style="display:inline-block;margin-right:8px;margin-left:8px;">
          Polymetaphysics
        </a>

        <span class="menu-divider">|</span>

        <a href="/media/" style="display:inline-block;margin-right:8px;margin-left:8px;">
          Media
        </a>

        <span class="menu-divider">|</span>

        <a href="/about/" style="display:inline-block;margin-right:8px;margin-left:8px;">
          About
        </a>

        <span style="display:inline-block;">
          <SearchComponent {...props} />
        </span>

        <span style="display:inline-block; margin-left:12px;">
          <DarkModeComponent {...props} />
        </span>

      </nav>

    </div>
  )
}


TopMenu.css = `

.top-menu {
  display:flex;
  align-items:center;

  font-size:1.3rem;
}

.top-menu a {
  font-size:inherit;
}

`


export default (() => TopMenu) satisfies QuartzComponentConstructor
