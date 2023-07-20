import DetailCard from "../components/card/detailCard";
import NoCard from "../components/card/noCard";
import YesCard from "../components/card/yesCard";

export default function Page() {
  return (
    <div className="flex justify-center my-10">
      <DetailCard />
      <div>
        <YesCard />
        <NoCard />
      </div>
    </div>
  );
}
