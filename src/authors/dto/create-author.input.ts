import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  isActive: boolean;
}
