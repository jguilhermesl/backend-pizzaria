import prismaClient from "../../prisma";

interface CreateOrderRequest{
	table: number, 
	name?: string
}

class CreateOrderService{
	async execute({ table, name}: CreateOrderRequest){

		if(!table){
			throw new Error("Mesa inválida.")
		}
		
		const order = await prismaClient.order.create({
			data: {
				table,
				name
			}
		})

		return order;
	}	
}

export { CreateOrderService }