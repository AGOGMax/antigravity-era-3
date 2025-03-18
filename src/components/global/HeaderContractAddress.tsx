import { PiCopyDuotone } from "react-icons/pi";
import { zeroAddress } from "viem";
import useHeaderStats from "./useHeaderStats";
import { TooltipOnClick } from "./Tooltip";

export default function HeaderContractAddress() {
  const { DarkContract } = useHeaderStats();
  return (
    <div className="relative flex items-center gap-[8px] py-2 px-1 mt-[8px]">
      <p className="font-bold">
        $DARK CONTRACT ADDRESS: {DarkContract.address}
      </p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(
            DarkContract.address ? DarkContract.address : zeroAddress,
          );
        }}
      >
        <TooltipOnClick
          trigger={<PiCopyDuotone className="text-[24px]" />}
          positionClassName="absolute sm:top-[64px] sm:right-[8px] md:top-[40px] md:right-[-48px]"
        >
          Address Copied!
        </TooltipOnClick>
      </button>
    </div>
  );
}
