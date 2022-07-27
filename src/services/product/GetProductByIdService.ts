import { prisma } from '@prisma/client';
import prismaClient from "../../prisma";

class GetProductByIdService{
	async execute(product_id: string){

		const product = await prismaClient.product.findFirst({
			where: {
				id: product_id
			},
			select:{
				id: true,
				name: true, 
				price: true, 
				description: true,
				banner: true
			}
		})

		return product;
	}	
}

export { GetProductByIdService }