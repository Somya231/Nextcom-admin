import prismadb from "@/lib/prismadb";

interface DashboardInterface {
    params: { storeId: string }
}

const DashboardPage: React.FC<DashboardInterface> = async ({
    params
}) => {
    
    const { storeId } = await params;

    const store = await prismadb.store.findFirst({
        where: {
            id: storeId
        }
    })

    return (
        <div>
            Active Store - {store?.name}
        </div>
    );
}

export default DashboardPage;