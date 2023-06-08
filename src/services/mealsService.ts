import axios from "axios";

type APIMeal = {
  id: string;
  name: string;
  description: string;
  price: string;
};
export const getAvailableMeals = () => {
  return axios.get<APIMeal[]>("v1/foods").then((res) => res.data);
};
