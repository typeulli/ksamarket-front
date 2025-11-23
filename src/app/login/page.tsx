"use client";

import AuthButton from "@/components/atoms/AuthButton";
import MutedText from "@/components/atoms/MutedText";
import LabeledInputBox from "@/components/molecules/LabeledInputBox";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/token`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: `${email}@ksa.hs.kr`,
                        password: password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to log in");
            }

            const data = await response;
            console.log("Login successful:", data.status);
            router.push("/app/home");
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

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
                    router.push("/app");
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
            <p className="text-[24px] font-black">로그인</p>
            <p className="text-[18px] font-semibold">
                크사이메일로 로그인할 수 있습니다.
            </p>
            <LabeledInputBox
                label="이메일"
                placeholder="이메일을 입력해주세요."
                value={email}
                onClear={() => setEmail("")}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
            >
                @ksa.hs.kr
            </LabeledInputBox>
            <LabeledInputBox
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onClear={() => setPassword("")}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
            />
            <AuthButton onClick={handleLogin} mode="orange">
                로그인
            </AuthButton>
            <MutedText>
                아직 계정이 없으신가요?{" "}
                <Link href="/signup" className="underline">
                    회원가입하러 가기
                </Link>
            </MutedText>
        </main>
    );
}
