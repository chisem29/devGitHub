
import { NextPage, GetServerSideProps } from "next"

import services from "@/services/index.service"
import cardsBody from "@/shared/interfaces/cards"

import dynamicLoader from "../pages/helpers/dynamicLoader"

const Layout = dynamicLoader({ path : import("@/components/layout/Layout"), ssr : true}) as any
const Home = dynamicLoader({ path : import("@/components/screens/Home/Home"), ssr : true}) as any

export const getServerSideProps : GetServerSideProps = async () => {

  const data = await services.getAllCards()

  if (!data) {
    throw new Error("Something went wrong...")
  }

  return {
    props : { data },
  }

}

const HomePage : NextPage<{
  data : cardsBody<string>
}> = ({ 
  data : { cards } 
}) => {

  return ( 
    <Layout>
      <Home cards={cards} /> 
    </Layout>
  )
  
}

export default HomePage