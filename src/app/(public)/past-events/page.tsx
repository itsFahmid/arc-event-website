export const dynamic = "force-dynamic";
import PastEventsPage from "@/components/pages/PastEventsPage";
import { prisma } from "@/lib/prisma";

export default function Page() {
  return <PastEventsPage />;
}
