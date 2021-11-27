import { Schema, model, Document, Types } from 'mongoose';

interface IUser extends Document {
  name: string;
  username: string;
  password: string;
  kanbanId: Types.ObjectId | undefined;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  kanbanId: { type: Types.ObjectId, ref: 'Kanban' },
});

const User = model('User', UserSchema);

export { IUser };
export default User;
