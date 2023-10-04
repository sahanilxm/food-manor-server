const { SWIGGY_RESTAURANT_API, SWIGGY_RESTAURANT_MENU_API } = require("./server-config");

const getRestaurants = async (req, res) =>{
    try {
        const {lat, lng} = req.query;
        const URL = `${SWIGGY_RESTAURANT_API}lat=${lat}&lng=${lng}`;
        console.log(URL);
        let response =await fetch(URL, {
            headers:{
                'Access-Control-Allow-Origin':'*',
                'User-Agent':"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                Accept:'application/json; charset=UTF-8',
            }
        });
        if(!response.ok){
            throw error;
        }
        response = await response.json();
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            data:[],
            success:false,
            message:'Something Went Wrong',
        });
    }
};

const getRestaurantMenu = async (req, res) =>{
    try {
        const {lat, lng, restaurantId} = req.query;
        const URL = `${SWIGGY_RESTAURANT_MENU_API}lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;
        let response =await fetch(URL, {
            headers:{
                'Access-Control-Allow-Origin':'*',
                'User-Agent':"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
                Accept:'application/json; charset=UTF-8',
            }
        });
        response = await response.json();
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            data:[],
            success:false,
            message:'Something Went Wrong',
        });
    }
};

module.exports = {
    getRestaurants,
    getRestaurantMenu
}