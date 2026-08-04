import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { Search } from "@quartz-community/search"

const SearchComponent = Search()

const TopSearch: QuartzComponent = (props) => {
  return (
    <div class="top-search">
      <SearchComponent {...props} />
    </div>
  )
}

TopSearch.css = `

.top-search {
  display:flex;
  align-items:center;
}


.search {
  max-width:40px;
  min-width:40px;
}


.search > .search-button {
  width:40px;
  height:40px;
  padding:0;
  justify-content:center;
}


.search > .search-button p {
  display:none;
}


.search > .search-button svg {
  width:22px;
  height:22px;
  margin:0;
}

`

export default (() => TopSearch) satisfies QuartzComponentConstructor