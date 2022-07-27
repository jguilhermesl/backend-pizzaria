import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

export class DeleteProductController{
	async handle(req: Request, res: Response) {
		const { id: product_id } = req.params
		console.log(req.params)
		console.log(product_id)

		const deleteProduct = new DeleteProductService();
		const product = await deleteProduct.execute(product_id);

		return res.json(product) 
	}
}