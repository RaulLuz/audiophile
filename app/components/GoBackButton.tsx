import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  
  return (
    <button
      onClick={() => router.back()}
      className="mb-[56px] mt-[79px] text-[15px] leading-[25px] font-medium text-black/[.5]"
    >
      Go back
    </button>
  );
};

export default GoBackButton;
