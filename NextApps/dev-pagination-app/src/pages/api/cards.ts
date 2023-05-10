// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cards from "@/data/cards.json"
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
}; 

export default async function handler() {
  /*res.status(200).json(JSON.parse(JSON.stringify(cards)))
  res.status(404).destroy()*/

  return NextResponse.json(JSON.parse(JSON.stringify(cards)))
}
