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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const router = useRouter();

    const handleSignUp = async () => {
        try {
            if (password !== password2) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: `${email}@ksa.hs.kr`,
                        username: username,
                        password: password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to Sign Up");
            }

            const data = await response;
            console.log("SignUp successful:", data.status);

            const response1 = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/email-verifications`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        email: `${email}@ksa.hs.kr`,
                    }),
                }
            );

            if (!response1.ok) {
                throw new Error("Failed to Sign Up");
            }

            const data1 = await response;
            console.log("Login successful:", data1.status);

            router.push("/signup/email-verification");
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
            <p className="text-[24px] font-black">회원가입</p>
            <p className="text-[18px] font-semibold">
                크사이메일로 회원가입할 수 있습니다.
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
                label="이름"
                placeholder="이름을 입력해주세요."
                value={username}
                onClear={() => setUsername("")}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
            />
            <LabeledInputBox
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onClear={() => setPassword("")}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
            />
            <LabeledInputBox
                label="비밀번호 확인"
                placeholder="비밀번호를 한번 더 입력해주세요."
                value={password2}
                onClear={() => setPassword2("")}
                onChange={(event) => setPassword2(event.target.value)}
                type="password"
            />
            <AuthButton onClick={handleSignUp} mode="orange">
                회원가입
            </AuthButton>
            <MutedText>
                이미 계정이 있으신가요?{" "}
                <Link href="/signup" className="underline">
                    로그인하러 가기
                </Link>
            </MutedText>
        </main>
    );
}
