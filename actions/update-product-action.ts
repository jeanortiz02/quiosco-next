'use server'
import { prisma } from '@/src/lib/prisma';
import { ProductSchema } from '../src/schema/index';


export async function updateProduct( data: unknown, id: number) {
    const result = ProductSchema.safeParse(data);

    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.product.update({
        where:{
            id
        },
        data: result.data
    })
}