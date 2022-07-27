import { Request, Response } from "express";
import { GetByCategoryService } from '../../services/product/GetByCategoryService'

class GetByCategoryController {
	async handle(req: Request, res: Response){
		const category_id  = req.query.category_id as string;

		const getByCategory = new GetByCategoryService();

		const products = await getByCategory.execute({
			category_id
		});

		return res.json(products)
	}
}

export { GetByCategoryController }