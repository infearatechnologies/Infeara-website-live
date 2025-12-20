import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
    const response = await updateSession(request);

    // OWASP Secure Headers
    // 1. Content Security Policy (CSP)
    // Note: This is a strict policy. You might need to relax it for specific external scripts (e.g., Analytics, Stripe).
    const supabaseUrl = "https://wtsrqvhtqpvuxkvxoehg.supabase.co";
    const supabaseWss = "wss://wtsrqvhtqpvuxkvxoehg.supabase.co";

    const cspHeader = `
        default-src 'self';
        connect-src 'self' ${supabaseUrl} ${supabaseWss} https://*.supabase.co wss://*.supabase.co *;
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com;
        style-src 'self' 'unsafe-inline';
        img-src * blob: data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    // response.headers.set('Content-Security-Policy', cspHeader);
    // response.headers.set('X-Content-Type-Options', 'nosniff');
    // response.headers.set('X-Frame-Options', 'DENY');
    // response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    // response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    // response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

    return response;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
