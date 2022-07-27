import { Request, Response } from "express";
import { AddItemAtOrderService } from "../../services/item/AddItemAtOrderService";

class AddItemAtOrderController{
	async handle(req: Request, res: Response) {
		const { amount, order_id, product_id } = req.body

		const addItemAtOrder = new AddItemAtOrderService();
		const item = await addItemAtOrder.execute({
			amount, 
			order_id, 
			product_id
		})

		return res.json(item)
	}
}

export { AddItemAtOrderController }