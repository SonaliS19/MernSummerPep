// const fsPromises = require("fs/promises");

// // const getData = async () => {
// //     const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
// //     let products;
// //     try {
// //         products = JSON.parse(text);
// //     } catch {
// //         products = [];
// //     }
// //     return products;
// // };

// const getDataMiddleware = async(req,res, next)=>{
//   const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
//     let products;
//     try {
//         products = JSON.parse(text);
//     } catch {
//         products = [];
//     }
//     return products;
//     next();
// }

// // //VALIDATE ID
// // const isIdValid= async(req,res,next)=>{
// //   const products = await getDataMiddleware(req,res,next);
// //   const id = req.params.id;
// //   if(products.find((product)=>product.id === parseInt(id))){
// //     next();
// //     }else{
// //       res.status(404).send({message:"Product not found"});
// //     }
// // }


// //middleware consisit three args (req,res,next) //Middleware chaining
// const validateForTitleAndPrice = (req,res,next)=>{
//   const body = req.body;
//   if (!body.title || !body.price) {
//     res.json({
//       status: "fail",
//       message: "Title and price are required",
//     });
//     return;
//   }
//   next();
// }
// const getProducts = async (req, res) => {
//     // let products = await getData();
//     let products = req.products;
//     res.json({
//         status: "success",
//         data: {
//             products: products,
//         },
//     });
// };

// const createProduct = async (req, res) => {
//     const body = req.body;
//     // if (!body.title || !body.price) {
//     //     res.json({
//     //         status: "fail",
//     //         message: "Title and Price is required",
//     //     });
//     //     return;
//     // }

//     // const products = await getData();

//     let products = req.products;
//     let lastId = 0;
//     if (products.length != 0) {
//         lastId = products[products.length - 1].id;
//     }
//     body.id = lastId + 1;
//     products.push(body);
//     await fsPromises.writeFile("./data.json", JSON.stringify(products));

//     res.status(201);
//     res.json({
//         status: "success",
//         data: {
//             product: body,
//         },
//     });
// };

// const replaceProduct = async (req, res) => {
//     const params = req.params;
//     const body = req.body;
//     // if (!body.title || !body.price) {
//     //     res.json({
//     //         status: "fail",
//     //         message: "Title and Price is required",
//     //     });
//     //     return;
//     // }

//     // const products = await getData();
//     let products = req.products;

//     const prIdx = products.findIndex((elem) => {
//         if (elem.id == params.id) return true;
//         return false;
//     });
//     if (prIdx === -1) {
//         res.status(400);
//         res.json({
//             status: "fail",
//             message: "Invalid product id",
//         });
//         return;
//     }

//     body.id = products[prIdx].id;
//     products[prIdx] = body;
//     await fsPromises.writeFile("./data.json", JSON.stringify(products));

//     res.send({
//         status: "success",
//         data: {
//             product: products[prIdx],
//         },
//     });
// };

// const deleteProduct = async (req, res) => {
//     const params = req.params;
//     // const products = await getData();
//     let products = req.products;
//     const prIdx = products.findIndex((elem) => {
//         if (elem.id == params.id) return true;
//         return false;
//     });
//     if (prIdx === -1) {
//         res.status(400);
//         res.json({
//             status: "fail",
//             message: "Invalid product id",
//         });
//         return;
//     }

//     products.splice(prIdx, 1);
//     await fsPromises.writeFile("./data.json", JSON.stringify(products));

//     res.status(204);
//     res.send({
//         status: "success",
//         data: {
//             product: null,
//         },
//     });
// };

// const updateProduct = async (req, res) => {
//     const params = req.params;
//     const body = req.body;
//     // const products = await getData();
//     let products = req.products;
//     const prIdx = products.findIndex((elem) => {
//         if (elem.id == params.id) return true;
//         return false;
//     });
//     if (prIdx === -1) {
//         res.status(400);
//         res.json({
//             status: "fail",
//             message: "Invalid product id",
//         });
//         return;
//     }

//     const newOBJ = {
//         ...products[prIdx],
//         ...body,
//     };

//     products[prIdx] = newOBJ;
//     await fsPromises.writeFile("./data.json", JSON.stringify(products));

//     res.send({
//         status: "success",
//         data: {
//             product: products[prIdx],
//         },
//     });
// };

// module.exports = {
//     getProducts,
//     createProduct,
//     replaceProduct,
//     deleteProduct,
//     updateProduct,
// };






//-------------------------------------------------------------------------------------------------------------------------------------------------------







const fsPromises = require("fs/promises");

const validateForTitleAndPrice = (req, res, next) => {
    const body = req.body;
    if (!body.title || !body.price) {
        res.json({
            status: "fail",
            message: "!! Title and Price is required",
        });
        return;
    }
    next();
};

const getDataMiddleware = async (req, res, next) => {
    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let products;
    try {
        products = JSON.parse(text);
    } catch {
        products = [];
    }
    req.products = products;
    next();
};

const validateID = (req, res, next) => {
    const params = req.params;
    const { products } = req;

    const prIdx = products.findIndex((elem) => {
        if (elem.id == params.id) return true;
        return false;
    });
    if (prIdx === -1) {
        res.status(400);
        res.json({
            status: "fail",
            message: "!! Invalid product id",
        });
        return;
    }
    req.productId = prIdx;
    next();
};

const getData = async () => {
    const text = await fsPromises.readFile("./data.json", { encoding: "utf8" });
    let products;
    try {
        products = JSON.parse(text);
    } catch {
        products = [];
    }
    return products;
};

const getProducts = async (req, res) => {
    let products = req.products;
    res.json({
        status: "success",
        data: {
            products: products,
        },
    });
};

const createProduct = async (req, res) => {
    const body = req.body;
    const products = req.products;
    let lastId = 0;
    if (products.length != 0) {
        lastId = products[products.length - 1].id;
    }
    body.id = lastId + 1;
    products.push(body);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.status(201);
    res.json({
        status: "success",
        data: {
            product: body,
        },
    });
};

const replaceProduct = async (req, res) => {
    const body = req.body;
    const products = req.products;
    const prIdx = req.productId;

    body.id = products[prIdx].id;
    products[prIdx] = body;
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.send({
        status: "success",
        data: {
            product: products[prIdx],
        },
    });
};

const deleteProduct = async (req, res) => {
    const products = req.products;
    const prIdx = req.productId;

    products.splice(prIdx, 1);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.status(204);
    res.send({
        status: "success",
        data: {
            product: null,
        },
    });
};

const updateProduct = async (req, res) => {
    const body = req.body;
    const products = req.products;
    const prIdx = req.productId;

    const newOBJ = {
        ...products[prIdx],
        ...body,
    };

    products[prIdx] = newOBJ;
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.send({
        status: "success",
        data: {
            product: products[prIdx],
        },
    });
};

module.exports = {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitleAndPrice,
    getDataMiddleware,
    validateID,
};