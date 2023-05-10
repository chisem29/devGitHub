
import axios from "axios"
import cardsBody from "@/shared/interfaces/cards"
import userBody from "@/shared/interfaces/user"

axios.defaults.baseURL = "http://localhost:3000/"

export default {
  async getAllCards() {

    const { data } = await axios<cardsBody<string>>({ method : "GET", url : "api/cards"})

    return data
  },
  async getUser() {

    const { data } = await axios<userBody>({ method : "POST", url : "api/auth"})

    return data

  }
}