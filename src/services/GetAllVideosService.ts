import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetAllVideosService {
  async execute() {
    const repository = getRepository(Video);

    const videos = await repository.find({
      relations: ["category"],
    });

    return videos;
  }
}
