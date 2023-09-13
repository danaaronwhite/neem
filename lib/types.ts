export enum InsuranceType {
  primary = "Primary",
  secondary = "Secondary"
}

export type Member = {
  id: any;
  covered: boolean;
  name: string;
  nickname: string | null;
  primarySubscriber: boolean;
  insuranceType: InsuranceType | string;
  subscriberId: string;
}