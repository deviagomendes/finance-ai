import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div>
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transaçao
          <ArrowDownUpIcon/>
        </Button>
      </div>
    </div>
  );
};

export default TransactionsPage;
