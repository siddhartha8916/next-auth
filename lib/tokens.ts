import { v4 as uuidv4 } from "uuid";
import crypto from 'crypto'
import { db } from "./db";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  // Expire in 1 Hour - Count Number of ms in 1 hour
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken?.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      expires,
      token,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  // Expire in 1 Hour - Count Number of ms in 1 hour
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);
  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken?.id,
      },
    });
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      expires,
      token,
    },
  });

  return passwordResetToken;
};

export const generateTwoFactorToken = async(email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString()
  // TODO: Later change to 15 mins
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: existingToken?.id,
      },
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      expires,
      token,
    },
  });

  return twoFactorToken;

}
