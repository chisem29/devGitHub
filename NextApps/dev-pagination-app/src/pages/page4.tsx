
import { NextPage } from "next"
import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/layout/Layout"), {})
const Page4 = dynamic(() => import("@/components/screens/Page4/Page4"), {})

const page4 : NextPage = () => {
  return (
    <Layout>
      <Page4 /> 
    </Layout>
  )
}

export default page4