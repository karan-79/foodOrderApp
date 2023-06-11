import axios from "axios";

type APIOrder = {
  userId: string;
  cartItems: { mealId: string; amount: number }[];
};

export const postOrder = (order: APIOrder) => {
  return axios.post<string>("v1/foods", order).then((res) => res.data);
};

export const getOrders = (userId) => {
  return axios.get<>("v1/orders");
};

type APIOrders = {
  orderIds: string[];
};
