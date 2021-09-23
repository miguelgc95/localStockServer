import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            trim: true,
        },
        keywords: [
            {
                type: String,
                trim: true,
            },
        ],
        imgUrl: {
            type: String,
        },
        businessOwner: [
            {
                type: String,
                ref: 'businessUser',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.model('item', ItemSchema);

export default Item;
