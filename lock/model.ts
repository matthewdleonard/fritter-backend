import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';

/**
 * This file defines the properties stored in a Freet
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for Lock on the backend
export type Lock = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: Types.ObjectId;
  type: string;
  browseTimeLeft: Number;
  activityTimeLeft: Number;
  dateModified: Date;
};

export type PopulatedLock = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: User;
  type: string;
  browseTimeLeft: Number;
  activityTimeLeft: Number;
  dateModified: Date;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Freets stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const LockSchema = new Schema<Lock>({
  // The author userId
  authorId: {
    // Use Types.ObjectId outside of the schema
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  //
  type: {
    type: String,
    required: true
  },

  browseTimeLeft: {
    type: Number,
    required: true
  },
  activityTimeLeft: {
    type: Number,
    required: true
  },
  // The date the freet was modified
  dateModified: {
    type: Date,
    required: true
  }
});

const LockModel = model<Lock>('LockItem', LockSchema);
export default LockModel;
