import { connect } from 'mongoose';
import './InitModels';

class MongoConnect {
  public async connect(): Promise<void> {
    try {
      await connect(process.env.DB_CONNECT_STRING as string);

      console.log('DB CONNECTED.');
    } catch (error) {
      console.log('DB CONNECTION FAILED.');
    }
  }
}

export default MongoConnect;
