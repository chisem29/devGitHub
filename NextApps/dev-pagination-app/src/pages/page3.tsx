
import { NextPage } from "next"
import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/layout/Layout"), {})
const Page3 = dynamic(() => import("@/components/screens/Page3/Page3"), {})

const page3 : NextPage = () => {
  return (
    <Layout>
      <Page3 /> 
    </Layout>
  )
}

export default page3