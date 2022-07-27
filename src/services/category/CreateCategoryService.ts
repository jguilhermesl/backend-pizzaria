import { prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prismaClient from '../../prisma';

export class CreateCategoryService{
	async execute(name_category: string) {

		if(name_category === '') {
			throw new Error("Nome da categoria inválido.")
		}

		const category = await prismaClient.category.create({
			data: {
				name: name_category
			},
			select: {
				id: true,  
				name: true
			}
		})


		return category;
	}
}