
import { NextPage, GetServerSideProps } from "next"

import services from "@/services/index.service"
import cardsBody from "@/shared/interfaces/cards"

import dynamic from "next/dynamic"
import layoutLoader from "./helpers/dynamic/layoutLoader"

const Layout = layoutLoader
const Home = dynamic(() => import("@/components/screens/Home/Home"), {})

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