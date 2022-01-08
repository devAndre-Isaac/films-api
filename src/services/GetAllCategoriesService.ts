import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
  async execute() {
    const repository = getRepository(Category);

    const categories = await repository.find();

    return categories;
  }
}
