const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    SWIGGY_RESTAURANT_API : process.env.SWIGGY_RESTAURANT_API,
    SWIGGY_RESTAURANT_MENU_API: process.env.SWIGGY_RESTAURANT_MENU_API
}