import { NextPage } from "next"
import dynamicLoader from "./helpers/dynamicLoader"

const Layout = dynamicLoader({ path : import("@/components/layout/Layout")}) as any
const Contacts = dynamicLoader({ path : import("@/components/screens/Contacts/Contacts")}) as any 

const ContactsPage : NextPage = () => {

  return (
    <Layout>
      <Contacts />
    </Layout>
  )

}

export default ContactsPage