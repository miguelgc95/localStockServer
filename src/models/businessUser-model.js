import mongoose from 'mongoose';
import validator from 'validator';

const BusinessUserSchema = mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'The email is required'],
            trim: true,
            unique: true,
            validate: {
                validator: value => validator.isEmail(value),
                message: props => `The email ${props.value} is not valid`,
            },
        },
        imgUrl: {
            type: String,
        },
        ubication: {
            type: String,
            trim: true,
        },
        schedule: {
            type: String,
            trim: true,
        },
        keywords: [
            {
                type: String,
                trim: true,
            },
        ],
        items: [
            {
                type: String,
                ref: 'item',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const BusinessUser = mongoose.model('businessUser', BusinessUserSchema);

export default BusinessUser;
