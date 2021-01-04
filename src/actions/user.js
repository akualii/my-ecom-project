import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";
export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}
export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Ashley Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 1.3,
        orderNumber: "24343sdfkjh72",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Haylee Kualii",
          shippingAddress: "1337 West State Street",
        },
      },
      {
        _id: 2,
        total: 1.3,
        orderNumber: "B0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Regan Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 3,
        total: 16.4,
        orderNumber: "ADFasdlfkjwe",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Aven Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 4,
        total: 19.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Tayvin Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 5,
        total: 19.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Paige Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 6,
        total: 19.4,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Nixon Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 7,
        total: 3.2,
        orderNumber: "5UFISHDFJASUSHI298",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Preslee Kualii",
          shippingAddress: "348 Yo State Street",
        },
      },
    ],
  };
}
