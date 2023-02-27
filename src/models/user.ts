import * as argon2 from "argon2";
import { prisma } from "~/utils/db.server";

type CreateUserProps = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  roleNames?: string[];
};

export async function createUser({
  username,
  password,
  firstName,
  lastName,
  roleNames,
}: CreateUserProps) {
  const passwordHash = await argon2.hash(password);

  return await prisma.user.create({
    data: {
      username,
      passwordHash,
      firstName,
      lastName,
      roles: {
        connect: roleNames?.map((roleName) => ({ name: roleName })) || [
          { name: "ROLE_USER" },
        ],
      },
    },
    include: {
      roles: true,
    },
  });
}

export async function usernameInUse(username: string) {
  return !!(await getUserByUsername(username));
}

export async function getUserByUsername(username: string) {
  return await prisma.user.findUnique({
    where: {
      username
    },
    include: {
      roles: true
    }
  })
}

export async function getSession(token: string) {
  const session = await prisma.userSession.findUnique({
    where: {
      token
    },
    include: {
      user: {
        include: {
          roles: true
        }
      }
    }
  });
  if (session?.user) {
    session.user.passwordHash = "";
  }
  return session;
}

export async function getSignedInUser(tokenOrRequestEventLoader: any) {
  const token = typeof tokenOrRequestEventLoader !== "string" ?
    tokenOrRequestEventLoader.cookie.get("session_token")?.value :
    tokenOrRequestEventLoader;

  if (!token) {
    return;
  }

  const session = await getSession(token);
  if (session) {
    return session.user;
  }
}
