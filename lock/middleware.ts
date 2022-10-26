import type {Request, Response, NextFunction} from 'express';
import {Types} from 'mongoose';
import LockCollection from './collection';

/**
 * Checks if a freet with lockId is req.params exists
 */
const isLockExists = async (req: Request, res: Response, next: NextFunction) => {
  const validFormat = Types.ObjectId.isValid(req.params.lockId);
  const lock = validFormat ? await LockCollection.findOne(req.params.lockId) : '';
  if (!lock) {
    res.status(404).json({
      error: {
        storeItemNotFound: `Lock with ID ${req.params.lockId} does not exist.`
      }
    });
    return;
  }

  next();
};


/**
 * Checks if the current user is the author of the freet whose freetId is in req.params
 */
const isValidLockModifier = async (req: Request, res: Response, next: NextFunction) => {
  const lock = await LockCollection.findOne(req.params.storeItemId);
  const userId = lock.authorId._id;
  if (req.session.userId !== userId.toString()) {
    res.status(403).json({
      error: 'Cannot modify other users\' store items.'
    });
    return;
  }

  next();
};

export {
  isLockExists,
  isValidLockModifier
};
