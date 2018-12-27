import News from "./model/new";
import DailyShops from "./model/dailyShop";
import UpComings from "./model/upComing";
import Challenges from "./model/challenge";
import Fortnite3DModels from "./model/fortnite3DModel";
import SoundBoards from "./model/soundBoard";
import ProTipsVideos from "./model/proTipsVideo";

export default store = {
    news: new News,
    dailyShops: new DailyShops,
    upComings: new UpComings,
    challenges: new Challenges,
    fortnite3DModels: new Fortnite3DModels,
    soundBoards: new SoundBoards,
    proTipsVideos: new ProTipsVideos
}