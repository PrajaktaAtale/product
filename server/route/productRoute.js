const express = require("express");

const ProductModel = require("../model/producModel")

const router = express.Router();

//Route 1 : create a product

router.post("/createProduct", async (req, res)=>{
    try{
        let product = await ProductModel.create(req.body)
        res.status(200).json({
            success:true, product
        })
    }catch(err){
      console.log(error);
      res.status(500).json({
        message:"Internal server error"
      })
    }
})

//Route 2 : get a product

router.get("/getProduct", async(req,res) =>{
    try{
        let product = await ProductModel.find()
        res.status(200).json({
            success:true, product
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

module.exports = router