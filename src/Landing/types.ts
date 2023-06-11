type Open = {
  __tag: "Open";
  orderId: "string";
};
type Closed = {
  __tag: "Closed";
};

export type OrdersDialogState = Open | Closed;

export const isOpenState = (state: OrdersDialogState) => state.__tag === "Open";
