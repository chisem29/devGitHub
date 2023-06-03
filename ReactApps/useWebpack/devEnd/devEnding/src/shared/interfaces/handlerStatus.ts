
interface handlerStatusBody<T=boolean> {
  isError : T,
  isSuccess : T,
  isLoading : T
}

export default handlerStatusBody