import mongoose, {Schema, Document} from "mongoose"

export interface ITask extends Document {
    taskTitle: string;
    description: string;
    dueDate: Date;
    update: "Urgent" | "Important" | "Work" | "Personal";
    completed: boolean;
    createdAt: Date;
    updatedAt: Date
}

const TaskSchema = new Schema<ITask>(
    {
     taskTitle: {
        type: String,
        required: [true, "Task Title cannot be empty"]
     },

     description: {
        type: String,
        required: [true, "Description is required"]
     },
     
     dueDate: {
        type: Date,
        required:[true, "Daue date is required"]
     },

     update:{
        type: String,
        enum:  ["Urgent", "Important", "Work", "Personal"],
        required: [true, "This field cannot empty"]
     },

     completed: {
        type: Boolean,
        default: false,
     },
    },
    {
        timestamps: true
    }
)
const Task = mongoose.model<ITask>("Task", TaskSchema);
export default Task