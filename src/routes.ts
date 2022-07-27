import { DeleteProductController } from './controllers/product/DeleteProductController';
import { Router, Request, Response, json } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { GetCategoriesController } from './controllers/category/GetCategoriesController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { GetByCategoryController } from './controllers/product/GetByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { GetOrdersController } from './controllers/order/GetOrdersController';
import { GetOrderByIdController } from './controllers/order/GetOrderByIdController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';

import { AddItemAtOrderController } from './controllers/item/AddItemAtOrderController';
import { DeleteItemAtOrderController } from './controllers/item/DeleteItemAtOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';
import { GetItemByIdController } from './controllers/item/GetItemByIdController';
import { GetProductByIdController } from './controllers/product/GetProductByIdController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// ROTAS USERS
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// ROTAS CATEGORIES
router.post('/categories', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new GetCategoriesController().handle)

// ROTAS PRODUCTS
router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/products', isAuthenticated, new GetByCategoryController().handle)
router.get('/products/:id', isAuthenticated, new GetProductByIdController().handle)
router.delete('/products/:id', isAuthenticated, new DeleteProductController().handle)

// ROTAS ORDER
router.post('/orders', isAuthenticated, new CreateOrderController().handle)
router.get('/orders', isAuthenticated, new GetOrdersController().handle)
router.get('/orders/:id', isAuthenticated, new GetOrderByIdController().handle)
router.delete('/orders', isAuthenticated, new DeleteOrderController().handle)
router.put('/orders', isAuthenticated, new SendOrderController().handle)
router.get('/details', isAuthenticated, new DetailOrderController().handle)

// ROTAS ITEM 
router.post('/items', isAuthenticated, new AddItemAtOrderController().handle)
router.delete('/items', isAuthenticated, new DeleteItemAtOrderController().handle)
router.get('/items/:id', isAuthenticated, new GetItemByIdController().handle)

export { router };