import { Request, Response } from "express";
import { GetOrdersService } from '../../services/order/GetOrdersService'

class GetOrdersController{
	async handle(req: Request, res: Response){

		const getOrders = new GetOrdersService();
		const orders = await getOrders.execute();

		return res.json(orders);
	} 
}

export { GetOrdersController }