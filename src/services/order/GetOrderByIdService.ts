import { prisma } from '@prisma/client';
import prismaClient from "../../prisma";

class GetOrderByIdService{
	async execute(order_id: string){

		const order = await prismaClient.order.findFirst({
			where: {
				id: order_id
			},
			select:{
				id: true,
				table: true,
				status: true, 
				draft: true,
				name: true,
				items: true
			}
		})

		return order;
	}	
}

export { GetOrderByIdService }