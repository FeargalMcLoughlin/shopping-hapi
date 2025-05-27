export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  shoptypes: {
    _model: "Shoptype",
    supermarket: {
      category: "Supermarket",
    },
    grocery: {
      category: "Grocery",
    },
	hardware: {
      category: "Hardware / DIY",
    },
    outdoor: {
      category: "Outdoor",
    },
  },
  shops: {
    _model: "Shop",
    one: {
      name: "Lidl",
      address: "Tuam, Co. Galway",
      rating: 40,
      method: "mobile",
      creator: "->users.bart",
      shoptype: "->shoptypes.supermarket",
      lat: "52.161290",
      lng: "-7.51540",
    },
    two: {
      name: "Dunnes Stores",
      address: "Wine St., Sligo",
      rating: 90,
      method: "desktop",
      creator: "->users.marge",
      shoptype: "->shoptypes.supermarket",
      lat: "52.261290",
      lng: "-7.231540",
    },
    three: {
      name: "Tesco",
      address: "Silverbridge Shopping Centre, Claremorris, Co. Mayo",
      rating: 43,
      method: "mobile",
      creator: "->users.homer",
      shoptype: "->shoptypes.supermarket",
      lat: "52.361290",
      lng: "-7.241540",
    },
  },
};