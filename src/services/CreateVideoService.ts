import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Error | Video> {
    const repository = getRepository(Video);
    const repositoryCategory = getRepository(Category);

    if (!(await repositoryCategory.findOne(category_id))) {
      return new Error("Category does not exists");
    }

    const video = repository.create({
      name,
      description,
      duration,
      category_id,
    });

    await repository.save(video);

    return video;
  }
}
