
//You have create Routes with the Router()
const express = require('express');
//const {namedImport1,namedImport2,.....}
const { adminCustomerController, adminOrderController } = require('../../controllers/admin/adminController');

const adminRoute = express.Router();

//app.get(RouteName,HandlerFunction);

// JS HOF

adminRoute.get('/get_customers',adminCustomerController)
adminRoute.get('/get_orders',adminOrderController)

//Named export

module.exports = {adminRoute:adminRoute  }


