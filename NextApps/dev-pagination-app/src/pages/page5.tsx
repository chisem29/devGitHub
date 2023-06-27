import dataBody from "@/shared/interfaces/data"
import { GetServerSideProps, NextPage } from "next"

import dynamic from "next/dynamic"

const Layout = dynamic(() => import("@/components/layout/Layout"), {})
const Page5 = dynamic(() => import("@/components/screens/Page5/Page5"), {})

export const getServerSideProps : GetServerSideProps = async ({ query }) => {

  if (!query) {
    return {
      redirect : {
        permanent : false,
        destination : "/page5"
      }
    }
  }

  return {
    props : {
      data : query
    }
  }
}

const page5 : NextPage<{ data : dataBody}> = ({ data }) => {

  return (
    <Layout>
      <Page5 
        data={data}/> 
    </Layout>
  )

}

export default page5