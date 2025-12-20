"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push("/admin");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side: Form */}
            <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 bg-background relative">
                <div className="absolute top-8 left-8 sm:left-16 lg:left-24 xl:left-32">
                    <div className="flex items-center gap-2 font-bold text-xl text-foreground">
                        <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">I</div>
                        Infeara
                    </div>
                </div>

                <div className="w-full max-w-sm mx-auto mt-20 lg:mt-0">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">Hello!</h1>
                        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">Have we met before?</h2>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-600 dark:text-slate-400">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@email.com"
                                className="h-12 bg-slate-50 border-slate-200 focus:ring-orange-500 focus:border-orange-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-600 dark:text-slate-400">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="h-12 bg-slate-50 border-slate-200 focus:ring-orange-500 focus:border-orange-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <div className="text-sm text-red-500 font-medium bg-red-50 p-3 rounded-md flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4" />
                                {error}
                            </div>
                        )}

                        <Button type="submit" className="w-full h-12 text-base font-semibold bg-slate-300 hover:bg-slate-400 text-slate-800" disabled={loading}>
                            {loading ? "LOGGING IN..." : "LOG IN"}
                        </Button>

                        <div className="flex items-center justify-between pt-4">
                            <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline">
                                Forgot my password
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Side: Quote */}
            <div className="hidden lg:flex flex-col items-center justify-center bg-slate-900 relative overflow-hidden p-12 text-white">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-2xl text-center space-y-8">
                    <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                        <div className="h-10 w-10 bg-orange-500 rounded-lg"></div>
                    </div>
                    <blockquote className="text-6xl font-bold leading-tight tracking-tight">
                        "The best way to predict the future is to create it."
                    </blockquote>
                    <cite className="block text-2xl text-slate-400 not-italic font-medium">
                        — Peter Drucker
                    </cite>
                </div>
            </div>
        </div>
    );
}
