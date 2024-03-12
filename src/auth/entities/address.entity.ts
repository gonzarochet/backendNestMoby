
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AddressDocument = Address & Document;

@Schema()
export class Address {

    id?:string

    @Prop()
    street:   string;

    @Prop()
    location: string;

    @Prop()
    city:     string;

    @Prop()
    country:  string;

    @Prop()
    cp:       string;
}


export const AddressSchema = SchemaFactory.createForClass(Address)