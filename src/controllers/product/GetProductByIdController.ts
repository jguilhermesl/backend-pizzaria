import { Request, Response } from "express";
import { GetProductByIdService } from '../../services/product/GetProductByIdService'

class GetProductByIdController{
	async handle(req: Request, res: Response){
		const { id: product_id } =  req.params 

		const getProductById = new GetProductByIdService();
		const product = await getProductById.execute(product_id);
		
		return res.json(product);
	} 
}

export { GetProductByIdController }