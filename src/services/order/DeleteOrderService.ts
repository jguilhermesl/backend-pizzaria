import { prisma } from '@prisma/client';
import prismaClient from "../../prisma"

class DeleteOrderService{
	async execute(order_id: string){

		const order = await prismaClient.order.delete({
			where: {
				id: order_id
			}
		})

		return order;
	}
}

export { DeleteOrderService };