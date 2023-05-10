import { NextPage } from "next"
import dynamic from "next/dynamic"

import layoutLoader from "./helpers/dynamic/layoutLoader"

const Layout = layoutLoader
const Contacts = dynamic(() => import("@/components/screens/Contacts/Contacts"))


const ContactsPage : NextPage = () => {

  return (
    <Layout>
      <Contacts />
    </Layout>
  )

}

export default ContactsPage