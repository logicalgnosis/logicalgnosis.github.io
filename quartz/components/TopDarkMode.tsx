import { QuartzComponent, QuartzComponentConstructor } from "./types"
import { Darkmode } from "@quartz-community/darkmode"

const DarkModeComponent = Darkmode()

const TopDarkMode: QuartzComponent = (props) => {
  return (
    <div class="top-darkmode">
      <DarkModeComponent {...props} />
    </div>
  )
}

TopDarkMode.css = `
.top-darkmode {
  margin-left: 8px;
}
`

export default (() => TopDarkMode) satisfies QuartzComponentConstructor