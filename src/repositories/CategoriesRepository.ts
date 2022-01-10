import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async findByName(name: string): Promise<Category | undefined> {
    const user = await this.findOne({
      where: {
        name,
      },
    });
    return user;
  }
  public async findById(id: string): Promise<Category | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}

export default CategoriesRepository;
