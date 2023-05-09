
import axios from "axios"
import cardsBody from "@/shared/interfaces/cards"

axios.defaults.baseURL = "http://localhost:3000/"

export default {
  async getAllCards() {

    const { data } = await axios<cardsBody<string>>({ method : "GET", url : "api/cards"})

    return data
  }
}