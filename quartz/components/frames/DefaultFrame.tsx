import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"
import TopMenuConstructor from "../TopMenu"
import HeroBannerConstructor from "../HeroBanner"
import FooterConstructor from "../Footer"

const Header = HeaderConstructor()
const TopMenu = TopMenuConstructor()
const HeroBanner = HeroBannerConstructor()
const Footer = FooterConstructor()

export const DefaultFrame: PageFrame = {
  name: "default",

  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
  }: PageFrameProps) {
    return (
      <>
        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <div class="center">
          <div class="page-header">

            <HeroBanner {...componentData} />

<div
  class="top-navigation"
  style="
    padding-bottom:10px;
    margin-bottom:20px;
  "
>
  <TopMenu {...componentData} />
</div>

            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>

            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>

          </div>

          <Content {...componentData} />

          <hr />

          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>

        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <Footer {...componentData} />
      </>
    )
  },
}