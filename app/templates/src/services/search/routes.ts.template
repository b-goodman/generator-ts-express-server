import { Request, Response } from "express";
import { checkSearchParams } from "../../middleware/checks";
import { searchVideos } from "./handlers";

export default [
    {
        path: "/search",
        method: "get",
        handler: [
            checkSearchParams,
            async (req: Request, res: Response) => {
                const videos = await searchVideos(req.query.q)
                res.send(videos);
            }
        ]
    }
];