// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService {
//   public readonly prismaClient: PrismaClient;

//   constructor() {
//     this.prismaClient = new PrismaClient();
//   }
// }

// // coneect method have type any
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  get client(): PrismaClient {
    return this.prisma;
  }
}
