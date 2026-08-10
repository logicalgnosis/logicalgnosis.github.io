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

      <style>
        {`
          .menu-tools-wide {
            display: flex;
            align-items: center;
            margin-left: auto;
          }

          .menu-tools-narrow {
            display: none;
          }

          /* Slightly reduce menu text as the available width decreases */

          @media (max-width: 1200px) {
            .top-menu {
              font-size: 16px !important;
            }
          }

          @media (max-width: 1050px) {
            .top-menu {
              font-size: 15px !important;
            }
          }

          @media (max-width: 900px) {
            .top-menu {
              font-size: 14px !important;
            }
          }

          /* Move Search + Theme to a separate centered row */

          @media (max-width: 1100px) {
            .menu-tools-wide {
              display: none;
            }

            .menu-tools-narrow {
              display: flex;
              flex-basis: 100%;
              width: 100%;
              align-items: center;
              justify-content: center;
              margin-top: 10px;
            }
          }
        `}
      </style>

      <nav style="display:flex; flex-wrap:wrap; align-items:center;">

        <div class="menu-links" style="display:flex; flex-wrap:wrap; align-items:center;">

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

        </div>


        {/* Search + Theme — wide screen */}

        <div class="menu-tools-wide">

          <span style="display:inline-block;">
            <SearchComponent {...props} />
          </span>

          <span style="display:inline-block; margin-left:12px;">
            <DarkModeComponent {...props} />
          </span>

        </div>


        {/* Search + Theme — narrow screen */}

        <div class="menu-tools-narrow">

          <span style="display:inline-block;">
            <SearchComponent {...props} />
          </span>

          <span style="display:inline-block; margin-left:12px;">
            <DarkModeComponent {...props} />
          </span>

        </div>

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

