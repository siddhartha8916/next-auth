import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHRef="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Oops! Something went wrong!"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive w-5 h-5" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
