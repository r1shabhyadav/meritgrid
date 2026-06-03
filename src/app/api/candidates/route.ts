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

    // Map to a minimal, JSON-serializable shape expected by the frontend
    const payload = candidates.map(u => ({
      id: u.id,
      name: u.name ?? '',
      email: u.email,
      hireabilityIndex: u.hireabilityIndex ?? 1000,
      location: u.location ?? '',
      skills: (u.skills || []).map(s => ({ name: s.name, proficiency: s.proficiency })),
      projects: (u.projects || []).map(p => ({ title: p.title, score: p.score ?? 0 })),
    }));

    return NextResponse.json(payload);
  } catch (error: any) {
    console.error('Fetch Candidates Error:', error);
    return NextResponse.json({ error: 'Failed to fetch candidates' }, { status: 500 });
  }
}
