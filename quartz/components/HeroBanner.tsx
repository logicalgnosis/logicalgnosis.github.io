import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HeroBanner: QuartzComponent = () => {
  return (
    <>
      <style>
        {`
          .hero-banner {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 50px;
            margin-top: 0px;
            margin-bottom: 0px;
            background:light-dark(#fefcf9, #2f2c26);
          }

          .hero-banner-logo {
            width: 175px;
            height: auto;
          }

          .hero-banner-center {
            text-align: center;
          }

          .hero-banner-main {
            font-size: 1.9rem;
            font-weight: 700;
            letter-spacing: .10em;
          }

          .hero-banner-divider {
            margin-top: 8px;
            font-size: 0.7rem;
            letter-spacing: .05em;
          }

          .hero-banner-subtitle {
            margin-top: 4px;
            font-size: 1.9rem;
            font-weight: 700;
            letter-spacing: .10em;
          }

          @media (max-width: 900px) {
            .hero-banner {
              gap: 40px;
            }

            .hero-banner-logo {
              width: 135px;
            }

            .hero-banner-main,
            .hero-banner-subtitle {
              font-size: 1.7rem;
            }
          }

          @media (max-width: 600px) {
            .hero-banner {
              gap: 20px;
            }

            .hero-banner-logo {
              width: 95px;
            }

            .hero-banner-main,
            .hero-banner-subtitle {
              font-size: 1.45rem;
              letter-spacing: .07em;
            }

            .hero-banner-divider {
              font-size: 0.6rem;
            }
          }

          @media (max-width: 400px) {
            .hero-banner {
              gap: 12px;
            }

            .hero-banner-logo {
              width: 70px;
            }

            .hero-banner-main,
            .hero-banner-subtitle {
              font-size: 1.25rem;
              letter-spacing: .05em;
            }

            .hero-banner-divider {
              font-size: 0.55rem;
            }
          }
        `}
      </style>

      <div className="hero-banner">

        <img
          src="/static/LogoL.png"
          className="hero-banner-logo"
          alt="Left Symbol"
        />

        <div className="hero-banner-center">

          <div className="hero-banner-main">
            Meta-Para-Ontology
          </div>

          <div className="hero-banner-divider">
            ✦✦✦
          </div>

          <div className="hero-banner-subtitle">
            Logical Gnosis
          </div>

        </div>

        <img
          src="/static/LogoR.png"
          className="hero-banner-logo"
          alt="Right Symbol"
        />

      </div>
    </>
  )
}

export default (() => HeroBanner) satisfies QuartzComponentConstructor

