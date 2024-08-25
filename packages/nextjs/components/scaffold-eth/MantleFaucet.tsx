import Image from "next/image";
import mantleLogo from "~~/public/mantle-logo.svg";

export const MantleFaucet = () => {
  const openMantlefaucets = () => {
    window.open("https://docs-v2.mantle.xyz/users/how-to/faucet#faucets", "_blank");
  };

  return (
    <div className={"ml-1"} data-tip="Grab funds from the Mantle Faucet">
      <button className="btn btn-secondary btn-sm px-2 rounded-full" onClick={() => openMantlefaucets()}>
        <Image alt="Mantle Logo" src={mantleLogo.src} width={20} height={20} />
      </button>
    </div>
  );
};
