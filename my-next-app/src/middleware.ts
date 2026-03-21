import { NextResponse } from 'next/server';

/* Define your Public Routes */
const publicRoutes = ['/', '/signin', '/register'];

export function middleware(request) {
    const { nextUrl } = request;
    
    const token = request.cookies.get('token')?.value;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    /* If the user is NOT logged in and tries to access a private route */
    if (!token && !isPublicRoute) {
        // Redirect them to the sign-in page
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    /* If the user IS logged in and tries to access /signin or /register */
    if (token && (nextUrl.pathname === '/signin' || nextUrl.pathname === '/register')) {
        // Redirect them to the home or dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

/* 4. Matcher Configuration */
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};