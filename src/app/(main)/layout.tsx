// import PremiumModal from "@/components/premium/PremiumModal";
// import { getUserSubscriptionLevel } from "@/lib/subscription";
// import { auth } from "@clerk/nextjs/server";
import Navbar from "./Navbar";
// import SubscriptionLevelProvider from "./SubscriptionLevelProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const { userId } = await auth();

//   if (!userId) {
//     return null;
//   }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
}
