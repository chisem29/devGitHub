import dynamic from "next/dynamic"

export default dynamic(
  () => import("@/components/layout/Layout"), 
  {
    ssr : true,
    loading : () => <h1 className="text-center text-2xl font-bold font-serif"> Loading </h1>
  }
)