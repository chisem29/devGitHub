
import { NextPage } from "next"

import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/layout/Layout"), {})
const Home = dynamic(() => import("@/components/screens/Home/Home"), {})

const HomePage : NextPage = () => {

  return ( 
    <Layout>
      <Home /> 
    </Layout>
  )
  
}

export default HomePage