
import { GetServerSideProps, NextPage } from "next"
import dynamic from "next/dynamic"
import layoutLoader from "./helpers/dynamic/layoutLoader"
import services from "@/services/index.service"
import userBody from "@/shared/interfaces/user"

const About = dynamic(() => import("@/components/screens/About/About"))
const Layout = layoutLoader


export const getServerSideProps : GetServerSideProps = async ({ query } ) => {

  const user = query

  if ((!user)) {
    return {
      redirect : {
        destination : "/about",
        permanent : true
      }
    }
  }

  return {
    props : {
      user
    }
  }
}

const AboutPage : NextPage<{ user : userBody }> = ({ user }) => {

  return (
    <Layout>
      <About user={user}/>
    </Layout>
  )

}

export default AboutPage