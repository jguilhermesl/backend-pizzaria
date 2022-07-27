import { Request, Response } from "express";
import { GetOrderByIdService } from '../../services/order/GetOrderByIdService'

class GetOrderByIdController{
	async handle(req: Request, res: Response){
		const { id: order_id } =  req.params 

		const getOrderById = new GetOrderByIdService();
		const order = await getOrderById.execute(order_id);
		
		return res.json(order);
	} 
}

export { GetOrderByIdController }