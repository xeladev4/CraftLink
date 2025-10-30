"use client";

import { useCallback, useState } from "react";
import { useAccount, useChainId, useSignMessage } from "@/lib/thirdweb-hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { isSupportedChain } from "@/constants/chain";
import { useLoading } from "../useLoading";

export const useRegisterArtisan = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { signMessageAsync } = useSignMessage();
  const router = useRouter();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const RELAYER_URL = process.env.RELAYER_URL;
  const [error, setError] = useState<string | null>(null);

  const registerAsArtisan = useCallback(
    async (ipfsUrl: string) => {
      if (!isConnected || !address) {
        toast.warning("Please connect your wallet first.");
        return false;
      }
      if (!isSupportedChain(chainId)) {
        toast.warning("Unsupported network. Please switch to the correct network.");
        return false;
      }
      if (!ipfsUrl) {
        toast.error("IPFS hash is required");
        return false;
      }

      startLoading();
      try {
        if (!RELAYER_URL) {
          throw new Error("Relayer URL is not defined");
        }

        const nonceResponse = await fetch(`${RELAYER_URL}/nonce/${address}`);
        const { nonce } = await nonceResponse.json();

        const functionName = "registerAsArtisan";
        const params = { ipfsUrl };
        const gaslessMessage = JSON.stringify({ functionName, user: address, params, nonce });
        const gaslessSignature = await signMessageAsync(gaslessMessage);

        const response = await fetch(`${RELAYER_URL}/gasless-transaction`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            functionName,
            user: address,
            params,
            signature: gaslessSignature,
            nonce,
          }),
        });

        const result = await response.json();
        if (!result.success) {
          setError(result.message);
          return false;
        }
        return true;
      } catch (error: unknown) {
        if ((error as Error).message.includes("User rejected")) {
          toast.info("Signature request cancelled");
          return false;
        } else {
          toast.error("Error during artisan registration");
          console.error(error);
          return false;
        }
      } finally {
        stopLoading();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [address, isConnected, chainId, signMessageAsync, router]
  );

  return { registerAsArtisan, isLoading, error };
};