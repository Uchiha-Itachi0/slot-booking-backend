import { Request, Response, NextFunction } from 'express'
export default (error: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(error.stack);
    res.status(500).json({message: "Internal server error. We are looking into it.", error: error.message});
}