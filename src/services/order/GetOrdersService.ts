import prismaClient from "../../prisma";

class GetOrdersService{
	async execute(){
		const orders = await prismaClient.order.findMany({
			where: {
				draft: false
			},
			select: {
				id: true,
				table: true,
				status: true, 
				draft: true,
				name: true,
				items: true
			}
		})

		return orders
	}	
}

export { GetOrdersService }