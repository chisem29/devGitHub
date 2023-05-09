import dynamic, { DynamicOptions } from "next/dynamic"

export default ({ path, ...options } : {path : any} & DynamicOptions ) => dynamic(() => path, options)