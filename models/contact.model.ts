import { Schema, model, models } from "mongoose";

const contactSchema = new Schema({
    name: String,
    email: String,
    description: String,
    twitter: Boolean,
    newsletter: Boolean,
    linkedin: Boolean,
    contactDetail: String,
}, {
    timestamps: true
});

const ContactModel = models.contact || model("contact", contactSchema);

export default ContactModel;
