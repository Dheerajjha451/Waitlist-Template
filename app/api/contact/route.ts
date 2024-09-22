import { connectToMongo } from "../../../lib/mongo.lib";
import ContactModel from "@/models/contact.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, description, twitter, newsletter, linkedin, contactDetail } = await request.json();
        await connectToMongo();
        await ContactModel.create({ name, email, description, twitter, newsletter, linkedin, contactDetail });
        await mongoose.connection.close();
        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 });
    } catch (err) {
        console.error(err);
        await mongoose.connection.close();
        return NextResponse.json({ message: "Failed to send message" }, { status: 400 });
    }
}
