import axios from "axios"

import sneaker from "../shared/interfaces/sneaker"

axios.defaults.baseURL = "http://localhost:3002"

export default {
  async getSneakers() {

    const { data } = await axios<Array<sneaker>>({ method : "GET", url : "/sneakers" })

    return await data
  },
  async getSneakerById(id : string) {

    const { data } = await axios<sneaker>({ method : "GET", url : `/sneakers/${id}`})

    return await data
  }
}