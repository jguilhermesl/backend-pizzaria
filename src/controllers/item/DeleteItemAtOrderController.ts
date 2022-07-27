import { Request, Response } from "express";
import { DeleteItemAtOrderService } from "../../services/item/DeleteItemAtOrderService";

class DeleteItemAtOrderController{
	async handle(req: Request, res: Response) {
		const item_id = req.query.item_id as string;

		const deleteItemAtOrder = new DeleteItemAtOrderService();
		const item = await deleteItemAtOrder.execute(item_id)

		return res.json(item)
	}
}

export { DeleteItemAtOrderController }