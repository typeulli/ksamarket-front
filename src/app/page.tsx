"use client"
import { AuthLink } from "@/components/atoms/AuthButton";

export default function Home() {
    return <main className="flex flex-col p-[24px] gap-[16px] justify-center items-center h-screen w-full">
        <p className="text-[24px] font-black">크사장터에 오신것을 환영합니다</p>
        <AuthLink href="/login" mode="orange" >로그인</AuthLink>
        <AuthLink href="/register" mode="blue" >회원가입</AuthLink>
    </main>
}