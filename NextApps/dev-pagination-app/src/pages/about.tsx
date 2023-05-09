
import { NextPage } from "next"
import dynamicLoader from "./helpers/dynamicLoader"

const About = dynamicLoader({ path : import("@/components/screens/About/About") }) as any
const Layout = dynamicLoader({ path : import("@/components/layout/Layout") }) as any

const AboutPage : NextPage = () => {

  return (
    <Layout>
      <About />
    </Layout>
  )

}

export default AboutPage