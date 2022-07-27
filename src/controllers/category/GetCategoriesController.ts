import { Request, Response } from 'express';
import { GetCategoriesService } from '../../services/category/GetCategoriesService'

class GetCategoriesController{
	async handle(req: Request, res: Response) {
		const getCategoriesService = new GetCategoriesService();
		const categories = await getCategoriesService.execute();

		return res.json(categories)
	}
}

export { GetCategoriesController };