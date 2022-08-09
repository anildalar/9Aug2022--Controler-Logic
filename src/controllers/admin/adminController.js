let adminCustomerLogic = (req,res)=>{
    //We will get this data form MongoDB
    
    let customerData = {
        name:"Anil",
        surname:"dollor",
    };
    
    res.status(200).json(customerData);
}

let adminOrderLogic = (req,res)=>{
    //We will get this data form MongoDB
    
    let orderData = {
        orderno:"100",
        orderItem:"Pizza",
    };
    
    res.status(200).json(orderData);
}
//Named Export

//2. exports.something = somelogic
exports.adminCustomerController = adminCustomerLogic;
exports.adminOrderController = adminOrderLogic;