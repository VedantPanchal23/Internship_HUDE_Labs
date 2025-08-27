export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
  {
    name: "cnfpassword",
    label: "Confirm Password",
    placeholder: "Enter confirm password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "cookware", label: "Cookware" },
      { id: "accessories", label: "Accessories" },
      { id: "sets", label: "Sets And Combos" },
      { id: "TablewareandDinnerware", label: "Tableware and Dinnerware" },
      { id: "kitchenware", label: "Kitchenware" },
    ],
  },
  {
    label: "Material",
    name: "material",
    componentType: "select",
    options: [
      { id: "brass", label: "Brass" },
      { id: "copper", label: "Copper" },
      { id: "steel", label: "Steel" },
      { id: "kansa", label: "Kansa" },
    ],
  },
  {
    label: "Size / Capacity",
    name: "size",
    componentType: "input",
    type: "text",
    placeholder: "Enter product size / capacity",
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "cookware",
    label: "Cookware",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  cookware: "Cookware",
  accessories: "Accessories",
  sets: "Sets And Combos",
  TablewareandDinnerware: "Tableware and Dinnerware",
  kitchenware: "Kitchenware",
};

export const materialOptionsMap = {
  brass: "Brass",
  copper: "Copper",
  steel: "Steel",
  kansa: "Kansa",
};

export const filterOptions = {
  category: [
    { id: "cookware", label: "Cookware" },
    { id: "accessories", label: "Accessories" },
    { id: "sets", label: "Sets And Combos" },
    { id: "TablewareandDinnerware", label: "Tableware and Dinnerware" },
    { id: "kitchenware", label: "Kitchenware" },
  ],
  material: [
    { id: "brass", label: "Brass" },
    { id: "copper", label: "Copper" },
    { id: "steel", label: "Steel" },
    { id: "kansa", label: "kansa" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "State",
    name: "state",
    componentType: "input",
    type: "text",
    placeholder: "Enter your state",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
];
