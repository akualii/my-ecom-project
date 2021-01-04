import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.44,
        orderNumber: "B0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Ashley Kualii",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 22.19,
        orderNumber: "A0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Haylee Kualii",
          shippingAddress: "2476 West State Street",
        },
      },
      {
        _id: 2,
        total: 100.0,
        orderNumber: "0C048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Regan Kualii",
          shippingAddress: "2141 West State Street",
        },
      },
      {
        _id: 3,
        total: 65.25,
        orderNumber: "F0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Aven Kualii",
          shippingAddress: "622 West State Street",
        },
      },
      {
        _id: 4,
        total: 22.25,
        orderNumber: "G0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Tayvin Kualii",
          shippingAddress: "876 West State Street",
        },
      },
      {
        _id: 5,
        total: 11.1,
        orderNumber: "H0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Paige Kualii",
          shippingAddress: "411 West State Street",
        },
      },
      {
        _id: 6,
        total: 120.15,
        orderNumber: "I0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Nixon Kualii",
          shippingAddress: "7890 West State Street",
        },
      },
      {
        _id: 7,
        total: 77.77,
        orderNumber: "J0048248343",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Preslee Kualii",
          shippingAddress: "9876 West State Street",
        },
      },
    ],
  };
}
