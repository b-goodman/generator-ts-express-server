import { Schema, Document, model, Model } from 'mongoose';

export interface VideoData {
    fileID: string;
    title: string;
    duration: number;
    dateUploaded?: number;
    tags?: string[];
    description?: string;
}


interface VideoDocument extends VideoData, Document {};

interface VideoModel extends Model<VideoDocument> {
    textSearch: (query: string) => Promise<VideoData[]>
}

const videoSchema = new Schema<VideoDocument>({
    fileID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true
    },
    dateUploaded: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    tags: {
        type: [String],
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});

videoSchema.index(
    {
        title: 'text',
        tags: 'text',
        description: 'text'
    },
    {
        weights: {
            title: 10,
            tags: 5,
        },
        name: 'video_search_index'
    },
);

videoSchema.statics.textSearch = async function (query: string): Promise<VideoData[]> {
    return await this.find({ $text: {$search: query} });
}

export default model<VideoDocument, VideoModel>('Video', videoSchema);