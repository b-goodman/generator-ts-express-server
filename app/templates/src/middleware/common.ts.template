import { Router, Request } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import fileUpload from "express-fileupload"
import helmet from "helmet";
import morgan from "morgan";

export const handleHelmet = (router: Router) => {
    router.use(helmet());
}

export const handleMorgan = (router: Router) => {
    router.use(morgan("combined"));
}

export const handleCors = (router: Router) =>
    router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.urlencoded({ extended: true }));
    router.use(parser.json());
};

export const handleCompression = (router: Router) => {
    router.use(compression());
};

export const handleFileUpload = (router: Router) => {
    router.use(fileUpload({
        parseNested: true,
        useTempFiles : true,
        tempFileDir : '/tmp/',
        safeFileNames: true,
        createParentPath: true,
        debug: true,
    }));
};


