// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/products/database.json';
import { IProductsData } from '../../../lib/products/types';

interface IApiProductsRequest extends NextApiRequest {}

export type IApiProductsResponseData = IProductsData[];

export function getProducts(){
  return database;
}

export default function handler(
  req: IApiProductsRequest,
  res: NextApiResponse<IApiProductsResponseData>
) {
  if (req.method === 'GET') {
    const results = getProducts();
    res.status(200).json(results);
  } else {
    res.status(400).json([]);
  }
}
