
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Address, AddressSchema } from './address.entity';


import mongoose from "mongoose";


export type UserDocument = User & Document; 

@Schema()
export class User {


    _id?: string;

    @Prop({unique: false, required: true})
    email: string;

    @Prop({required: true})
    name: string;

    @Prop({unique: true, required: true})
    nickname :string; 

    @Prop()
    pictureProfile: string; 

    @Prop({required: true})
    phone: string

    @Prop({minlength: 6, required: true})
    password?: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop({type: [String],default: ['user']}) // tengo que decirle cómo queiero que se almacene ese objeto 
    roles: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address',required: true })
    address: string;
}


export const UserSchema = SchemaFactory.createForClass(User)
 