import faker from "faker";
import { LumpsumService } from "./lumpsumService.js";

export const createLumpsumServiceMocks = ({
  count = 1,
}: { count?: number } = {}) =>
  Array.from({ length: count }, (_, index): LumpsumService => {
    return {
      id: index,
      name: faker.commerce.productName(),
      price: faker.datatype.float({ min: 0.01, max: 9999 }),
      unit: faker.datatype.boolean() ? faker.lorem.word() : null,
      number: faker.datatype.hexaDecimal(),
      active: faker.datatype.boolean(),
      note: faker.datatype.boolean()
        ? faker.lorem.sentences(faker.datatype.number({ min: 1, max: 3 }))
        : null,
    };
  });
