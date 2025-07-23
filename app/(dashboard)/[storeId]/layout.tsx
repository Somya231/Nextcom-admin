import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { storeId: string }
}) {
    const { userId } = await auth();

    if (!userId) {
        redirect('/sign-in')
    }

    const store = prisma.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if (!store) {
        redirect('/');
    }

    return (
        <>
            <div>This will be future navbar.</div>
            {children}
        </>
    )

}