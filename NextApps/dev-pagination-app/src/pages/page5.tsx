import { FC } from "react"
import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/layout/Layout"), {})
const Page5 = dynamic(() => import("@/components/screens/Page5/Page5"), {})

const page5 : FC = () => {
  return (
    <Layout>
      <Page5 /> 
    </Layout>
  )
}

export default page5