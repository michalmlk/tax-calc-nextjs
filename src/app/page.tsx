import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
    const user = await currentUser();

    if (!user?.id) {
        return NextResponse.redirect('/sign-in');
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    );
}
