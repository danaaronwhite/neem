export enum InsuranceType {
  primary = "Primary",
  secondary = "Secondary"
}

export type Member = {
  id: string;
  covered: boolean;
  name: string;
  nickname: string | null;
  primarySubscriber: boolean;
  insuranceType: InsuranceType;
  subscriberId: string;
}