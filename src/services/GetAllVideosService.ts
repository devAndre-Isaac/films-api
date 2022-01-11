import { getRepository } from "typeorm";
import { Video } from "../entities/Video";
import { getCustomRepository } from "typeorm";
import VideosRepository from "../repositories/VideosRepository";

interface IPaginateVideos {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Video[];
}
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
