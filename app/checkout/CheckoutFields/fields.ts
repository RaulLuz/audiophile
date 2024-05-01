export const fields = [
  {
    title: "Billing Details",
    input: [
      {
        label: "Name",
        id: "name",
      },
      {
        label: "Email Address",
        id: "email",
      },
      {
        label: "Phone",
        id: "phone",
      },
    ],
  },
  {
    title: "Shipping Info",
    input: [
      {
        label: "Address",
        id: "address",
      },
      {
        label: "ZIP Code",
        id: "zip-code",
      },
      {
        label: "City",
        id: "city",
      },
      {
        label: "Country",
        id: "country",
      },
    ],
  },
];

export const paymentMethods = [
  {
    name: "e-Money",
    id: "e-money",
  },
  {
    name: "Cash on Delivery",
    id: "cash",
  },
];

export const eMoneyFields = [
  {
    label: "e-Money Number",
    id: "e-money-number",
  },
  {
    label: "e-Money PIN",
    id: "e-money-pin",
  },
];
