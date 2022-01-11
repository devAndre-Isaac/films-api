import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

@EntityRepository(Video)
class VideosRepository extends Repository<Video> {
  public async findByName(name: string): Promise<Video | undefined> {
    const user = await this.findOne({
      where: {
        name,
      },
    });
    return user;
  }
  public async findById(id: string): Promise<Video | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}

export default VideosRepository;
