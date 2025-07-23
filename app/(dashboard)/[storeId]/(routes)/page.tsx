import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

interface DashboardInterface {
    params: { storeId: string }
}

const DashboardPage: React.FC<DashboardInterface> = async ({
    params
}) => {

    const store = await prisma.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    return (
        <div>
            Active Store - {store?.name}
        </div>
    );
}

export default DashboardPage;