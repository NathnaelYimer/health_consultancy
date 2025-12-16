import { NextResponse } from 'next/server'
import { buildSearchIndex } from '@/lib/data'

export async function GET() {
  const index = buildSearchIndex()
  return NextResponse.json(index)
}
