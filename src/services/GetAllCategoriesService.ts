import { getCustomRepository } from "typeorm";
import { Category } from "../entities/Category";
import CategoriesRepository from "../repositories/CategoriesRepository";

interface IPaginateCategories {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Category[];
}
export class GetAllCategoriesService {
  async execute(): Promise<IPaginateCategories> {
    const repository = getCustomRepository(CategoriesRepository);

    const categories = await repository.createQueryBuilder().paginate();

    return categories as IPaginateCategories;
  }
}
