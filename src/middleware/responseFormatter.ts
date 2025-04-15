import { Request, Response, NextFunction } from 'express';

export function responseFormatter(req: Request, res: Response, next: NextFunction): void {
  const originalJson = res.json.bind(res);

  res.json = function (body: any): Response {
    if (res.statusCode >= 200 && res.statusCode < 300) {
        const formattedBody = {
            message: 'Success',
            data: body,
        };
        return originalJson(formattedBody);
    }
    return originalJson(body);
  };

    next();
}