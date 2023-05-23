import { NextPage } from "next"
import dynamic from "next/dynamic"

import layoutLoader from "../helpers/dynamic/layoutLoader"

const Layout = layoutLoader
const Supports = dynamic(() => import("@/components/screens/Supports/Supports"))


const ContactsPage : NextPage = () => {

  return (
    <Layout>
      <Supports />
    </Layout>
  )

}

export default ContactsPage