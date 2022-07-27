import { Request, Response } from "express";
import prismaClient from "../../prisma";

export class DeleteProductService{
	async execute(product_id: string ) {

		const product = await prismaClient.product.delete({
			where: {
				id: product_id
			}
		})

		return product;

		return
	}
}