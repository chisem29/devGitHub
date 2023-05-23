import { NextPage } from "next"
import { useRouter } from "next/router"

const ContactsPage : NextPage = () => {

  const { asPath } = useRouter()

  return (
    <>
      {asPath}
    </>
  )

}

export default ContactsPage