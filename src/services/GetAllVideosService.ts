import { Video } from "../entities/Video";
import { getCustomRepository } from "typeorm";
import VideosRepository from "../repositories/VideosRepository";
import { IPaginateVideos } from "../interfaces/paginate";

export class GetAllVideosService {
  async execute(): Promise<IPaginateVideos> {
    const repository = getCustomRepository(VideosRepository);

    const videos = await repository
      .createQueryBuilder({
        relations: ["category"],
      } as any)
      .paginate();

    return videos as IPaginateVideos;
  }
}
