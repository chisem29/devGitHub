import { NextPage } from "next";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/components/layout/Layout"), {});
const Page2 = dynamic(() => import("@/components/screens/Page2/Page2"), {});

const page2 : NextPage = () => {
  return (
    <Layout>
      <Page2 />
    </Layout>
  );
};

export default page2;
