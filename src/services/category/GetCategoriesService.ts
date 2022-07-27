import prismaClient from '../../prisma'

class GetCategoriesService{
	async execute() {
		const categories = await prismaClient.category.findMany({
			select: {
				id: true,
				name: true
			}
		})

		return categories
	}
}

export { GetCategoriesService }