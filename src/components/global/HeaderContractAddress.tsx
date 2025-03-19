import { PiCopyDuotone } from "react-icons/pi";
import { zeroAddress } from "viem";
import useDarkContract from "@/abi/Dark";
import Tooltip from "./Tooltip";

export default function HeaderContractAddress() {
  const DarkContract = useDarkContract();
  const DarkContractAdd = DarkContract.address;
  return (
    <div className="relative flex items-center justify-center gap-[8px] py-2 px-1 mt-[8px] w-full box-border">
      <p className="font-bold break-words max-w-[80%]">
        $DARK CONTRACT ADDRESS: {DarkContractAdd || "Address not found"}
      </p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(DarkContractAdd || zeroAddress);
        }}
      >
        <Tooltip
          trigger={<PiCopyDuotone className="text-[24px]" />}
          positionClassName="absolute sm:top-[64px] sm:right-[32px] md:top-[40px] md:right-[32px]"
          action="click"
        >
          Address Copied!
        </Tooltip>
      </button>
    </div>
  );
}
