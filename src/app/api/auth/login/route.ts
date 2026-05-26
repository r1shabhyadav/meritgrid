import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    // Mock authentication for MVP Demo
    if (email === 'employer@demo.com') {
      return NextResponse.json({ token: 'mock-jwt-token', user: { id: 2, role: 'employer', email } });
    }

    return NextResponse.json({ token: 'mock-jwt-token', user: { id: 1, role: 'learner', email } });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
