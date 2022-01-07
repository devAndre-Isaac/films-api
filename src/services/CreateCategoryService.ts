import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repository = getRepository(Category);

    if (await repository.findOne({ name })) {
      return new Error("Category already exists!");
    }

    const category = repository.create({
      name,
      description,
    });

    await repository.save(category);

    return category;
  }
}
