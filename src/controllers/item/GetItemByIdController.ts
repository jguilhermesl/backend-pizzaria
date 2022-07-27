import { Request, Response } from "express";
import { GetItemByIdService } from '../../services/item/GetItemByIdService'

class GetItemByIdController{
	async handle(req: Request, res: Response){
		const { id: item_id } =  req.params 

		const getItemById = new GetItemByIdService();
		const item = await getItemById.execute(item_id);
		
		return res.json(item);
	} 
}

export { GetItemByIdController }