"use client";

import { thirdwebClient, wallets } from "@/app/client";
import { useEffect, useState } from "react";
import { ConnectButton, darkTheme, useActiveAccount } from "thirdweb/react";
import type { Account } from "thirdweb/wallets";
import { useChainSwitch } from "@/hooks/useChainSwitch";
import { hederaTestnet } from "@/constants/chain";

interface ConnectWalletProps {
  onConnect?: () => void;
  label?: string;
}

const ConnectWallet = ({ onConnect, label = "Connect Wallet" }: ConnectWalletProps) => {
  const [mounted, setMounted] = useState(false);
  const account = useActiveAccount();
  const [prevAccount, setPrevAccount] = useState<Account | undefined>(
    undefined
  );
  const { isOnCorrectChain, switchToHederaTestnet } = useChainSwitch();

  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://craftlinkhq.com";

  const metadata = {
    name: "craftLink",
    description: "The Future of Decentralized Commerce",
    url: origin,
    icons: ["https://assets.reown.com/reown-profile-pic.png"],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (account && !prevAccount && onConnect) {
      onConnect();
    }
    setPrevAccount(account);
  }, [account, prevAccount, onConnect]);

  // Auto-switch to correct chain when wallet connects
  useEffect(() => {
    if (account && !isOnCorrectChain) {
      // Small delay to ensure wallet is fully connected
      const timer = setTimeout(() => {
        switchToHederaTestnet();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [account, isOnCorrectChain, switchToHederaTestnet]);

  if (!mounted) return null;

  return (
    <div>
      <div className="hidden md:flex">
        <ConnectButton
          client={thirdwebClient}
          appMetadata={metadata}
          connectButton={{
            label: label,
          }}
          wallets={wallets}
          connectModal={{ size: "compact" }}
          chain={hederaTestnet}
          chains={[hederaTestnet]}
          theme={darkTheme({
            colors: {
              primaryButtonBg: "#FFD700",
            },
          })}
        />
      </div>
      <div className="md:hidden flex">
        <ConnectButton
          client={thirdwebClient}
          appMetadata={metadata}
          connectButton={{
            label: label,
          }}
          wallets={wallets}
          connectModal={{ size: "compact" }}
          chain={hederaTestnet}
          chains={[hederaTestnet]}
          theme={darkTheme({
            colors: {
              primaryButtonBg: "#FFD700",
            },
          })}
        />
      </div>
    </div>
  );
};

export default ConnectWallet;