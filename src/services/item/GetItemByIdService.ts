import { prisma } from '@prisma/client';
import prismaClient from "../../prisma";

class GetItemByIdService{
	async execute(item_id: string){

		const item = await prismaClient.item.findFirst({
			where: {
				id: item_id
			},
			select:{
				id: true,
				product_id: true, 
				amount: true,
			}
		})

		return item;
	}	
}

export { GetItemByIdService }