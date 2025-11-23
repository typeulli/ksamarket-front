"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthLink } from "@/components/atoms/AuthButton";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const checkToken = async () => {
            try {
                // Replace this with your actual token validation logic
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                    }
                );

                if (response.ok) {
                    router.push("/app/home");
                }

                // If token is valid, redirect to /app
            } catch (error) {
                console.error("Token validation failed:", error);
            }
        };

        checkToken();
    }, []);

    return (
        <main className="flex flex-col p-[24px] gap-[16px] justify-center items-center h-screen w-full">
            <p className="text-[24px] font-black">거의 다 되었습니다!</p>
            <p className="text-[18px] font-semibold">
                메일함을 확인하여 이메일 인증을 완료해주세요.
            </p>
            <AuthLink href="/login" mode="orange">
                로그인
            </AuthLink>
        </main>
    );
}
