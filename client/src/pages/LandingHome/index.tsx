import { Layout } from '../../components/organisms/Layout'
import { Hero } from '../../components/organisms/Hero'
import CardInfo from '../../components/molecules/CardInfo'

export const LandingHome = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <CardInfo fluid={true} color="primary" >
          En los países desarrollados una persona produce, como media, 1
          kilogramo de basura por día. En los países en vías de desarrollo se
          produce entre 400 y 700 gramos por habitante al día.
        </CardInfo>
      </Layout>
    </div>
  )
}
