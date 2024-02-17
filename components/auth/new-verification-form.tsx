"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import BeatLoader from "react-spinners/BeatLoader";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

type NewVerificationFormProps = {};

const NewVerificationForm = (props: NewVerificationFormProps) => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return 

    if (!token) {
      setError("Missing Token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch((err) => {
        console.log('err :>> ', err);
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      backButtonHRef="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Confirming your verification"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
