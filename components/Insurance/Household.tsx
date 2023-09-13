import { InsuranceType, Member } from "../../lib/types";
import { useState } from "react";
import HouseholdMember from "../Insurance/HouseholdMember";
import { faker } from '@faker-js/faker';

const initData: Member[] = [
  {
    id: Math.random().toString(16).slice(2),
    covered: true,
    name: "Jerome Bell",
    nickname: "Rome",
    primarySubscriber: true,
    insuranceType: InsuranceType.primary,
    subscriberId: ""
  },
  {
    id: Math.random().toString(16).slice(2),
    covered: true,
    name: "Stacy Bell",
    nickname: "Stacy",
    primarySubscriber: false,
    insuranceType: InsuranceType.primary,
    subscriberId: ""
  },
  {
    id: Math.random().toString(16).slice(2),
    covered: false,
    name: "Rebecca Bell",
    nickname: "Becca",
    primarySubscriber: false,
    insuranceType: "",
    subscriberId: ""
  },
  {
    id: Math.random().toString(16).slice(2),
    covered: false,
    name: "Zaccharia Ryder Bell",
    nickname: "Ryder",
    primarySubscriber: false,
    insuranceType: "",
    subscriberId: ""
  }
]

export default function Household() {

  // Set initial state
  const [members, setMembers] = useState<Member[] | null>(initData)
  const [primarySubscriber, setPrimarySubscriber] = useState<string>("")

  // Set the insurance type
  const setInsuranceType = (memberId: number, insuranceType: InsuranceType) => {
    // Create a temp array from members
    let temp: any = []
    if (members) {
      temp = [...members]
    }
    if (temp) {
      // Update data
      const thisMember = temp.find((o: Member) => o.id === memberId)
      if (thisMember) thisMember.insuranceType = insuranceType
    }
    setMembers(temp)
  }

  const setID = (memberId: number, id: string) => {
    // Create temp array from members
    let temp: any = []
    if (members) {
      temp = [...members]
    }
    if (temp) {
      // Update data
      const thisMember = temp.find((o: Member) => o.id === memberId)
      if (thisMember) thisMember.subscriberId = id
    }
    setMembers(temp)
  }

  const setCovered = (memberId: number, covered: boolean) => {
    // Create temp array from members
    let temp: any = []
    if (members) {
      temp = [...members]
    }
    if (temp) {
      // Update data
      const thisMember = temp.find((o: Member) => o.id === memberId)
      if (thisMember) thisMember.covered = covered
    }
    setMembers(temp)
  }

  const setPrimarySubscriberHandler = (memberId: string) => {
    setPrimarySubscriber(memberId)
  }

  // Add a new member using faker data
  const addMember = () => {
    const fName = faker.person.firstName();

    const newMember = {
      id: Math.random().toString(16).slice(2),
      covered: false,
      name: `${fName} Bell`,
      nickname: fName,
      primarySubscriber: false,
      insuranceType: "",
      subscriberId: ""
    }

    let temp: any = []
    if (members) {
      temp = [...members]
    }
    if (temp) {
      // Push new member
      temp.push(newMember)
      // Add to member state
      setMembers(temp)
    }
    
  }

  return (
    <>
      <div className="grid grid-cols-[65px_175px_65px_142px_80px] gap-2 mb-2">
        <div className="col-label">
          <div className="flex items-center text-left">
            <div>Covered</div>
            <div className="ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="#9DA7BE">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-label">Name</div>
        <div className="col-label">Subscriber</div>
        <div className="col-label">Insurance</div>
        <div className="col-label">ID</div>

        {members?.map((member) => {
          return (
            <HouseholdMember 
              key={`member-${member.id}`}
              member={member}
              primarySubscriber={primarySubscriber}
              setInsuranceType={setInsuranceType}
              setID={setID}
              setCovered={setCovered}
              setPrimarySubscriberHandler={setPrimarySubscriberHandler}
            />
          )
        })}
      </div>
      <div className="text-right">
        <button 
          className="text-xs text-primary"
          onClick={() => addMember()}
        >
          +Add new member
        </button>
      </div>
    </>
  )
}
