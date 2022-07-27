import prismaClient from "../../prisma";

interface GetByCategoryRequest{
	category_id: string;
}

class GetByCategoryService{
	async execute({category_id}: GetByCategoryRequest){

		const productsFound = await prismaClient.product.findMany({
			where: {
				category_id: category_id
			}
		})

		return productsFound;
	}
}

export { GetByCategoryService };