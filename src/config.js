require("dotenv").config();
module.exports = {
  api: {
    port: process.env.PORT || 4000,
    autentic: process.env.AUTENTIC || 255444552222222,
  },
  lunaMarket: {
    keybank: process.env.LUNA_KEYBANK || '1234567890',
    destino: process.env.LUNA_ESTINO || '1234567890',
  },
};
