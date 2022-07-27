import prismaClient from "../../prisma"

interface AddItemAtOrderRequest{
	amount: number, 
	order_id: string,
	product_id: string
}

class AddItemAtOrderService{
	async execute({ amount, order_id, product_id}: AddItemAtOrderRequest){

		const item = await prismaClient.item.create({
			data:{
				amount,
				order_id,
				product_id
			}
		})

		return item;
	}
}
export { AddItemAtOrderService }