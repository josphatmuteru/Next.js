import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinList() {
  const cabins = await getCabins();
  return (
    <div>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
