import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const candidates = await prisma.user.findMany({
      where: { role: 'learner' },
      include: {
        skills: true,
        projects: true,
      },
      orderBy: { hireabilityIndex: 'desc' }
    });
    
    return NextResponse.json(candidates);
  } catch (error: any) {
    console.error("Fetch Candidates Error:", error);
    return NextResponse.json({ error: 'Failed to fetch candidates' }, { status: 500 });
  }
}
