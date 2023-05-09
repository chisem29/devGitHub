import { NextPage } from "next"

import Contacts from "@/components/screens/Contacts/Contacts"
import Layout from "@/components/layout/Layout"

const ContactsPage : NextPage = () => {

  return (
    <Layout>
      <Contacts />
    </Layout>
  )

}

export default ContactsPage