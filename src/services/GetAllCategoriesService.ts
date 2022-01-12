import { getCustomRepository } from "typeorm";
import { IPaginateCategories } from "../interfaces/paginate";
import CategoriesRepository from "../repositories/CategoriesRepository";

export class GetAllCategoriesService {
  async execute(): Promise<IPaginateCategories> {
    const repository = getCustomRepository(CategoriesRepository);

    const categories = await repository.createQueryBuilder().paginate();

    return categories as IPaginateCategories;
  }
}
