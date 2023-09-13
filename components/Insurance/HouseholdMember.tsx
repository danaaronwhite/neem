import { Member, InsuranceType } from "../../lib/types";
import classNames from "classNames";
import { ChangeEvent, SetStateAction, useEffect } from "react";

type Props = {
  member: Member,
  primarySubscriber: string,
  setInsuranceType: any,
  setID: SetStateAction<any>,
  setCovered: SetStateAction<any>,
  setPrimarySubscriberHandler: SetStateAction<any>,
}

export default function HouseholdMember({ member, primarySubscriber, setInsuranceType, setID, setCovered, setPrimarySubscriberHandler }: Props) {

  useEffect(() => {
    console.log(member.covered)
  }, [member.covered])

  return (
    <>
      <div className="flex items-center justify-center text-center">
        <input 
          type="checkbox" 
          className="checkbox checkbox-sm border-gray border-2 checked:checkbox-primary checked:bg-check checked:bg-center rounded-none" 
          checked={member.covered} 
          onChange={() => setCovered(member.id, !member.covered)} 
        />
      </div>
      <div className="col-label flex items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path 
                fillRule="evenodd" 
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          <div className="mr-2 text-sm truncate max-w-[90px]">{member.name}</div>
          <div className="text-sm text-gray">{member.nickname && `(${member.nickname})`}</div>
        </div>
      </div>
      <div className="flex items-center text-center justify-center">
        <input 
          type="radio" 
          className="radio radio-xs border-gray radio-primary" 
          checked={member.id === primarySubscriber} 
          onChange={() => setPrimarySubscriberHandler(member.id, !member.primarySubscriber)} 
        />
      </div>
      <div className="col-label">
        <select 
          className={classNames("border border-select-border rounded appearance-none bg-ddArrow bg-no-repeat bg-[center_right_14px] py-3 px-4 min-w-[140px] mr-2", !member.insuranceType && "bg-select-border")}
          value={member.insuranceType}
          onChange={(e) => setInsuranceType(member.id, e.target.value)}
        >
          <option value="">...</option>
          <option value={InsuranceType.primary}>{InsuranceType.primary}</option>
          <option value={InsuranceType.secondary}>{InsuranceType.secondary}</option>
        </select>
      </div>
      <div className="col-label">
        <input 
          type="text" 
          className={classNames("border border-select-border rounded appearance-none py-3 px-4 w-[96px] focus:border-select-border", !member.id && "bg-select-border")}
          value={member.subscriberId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setID(member.id, e.target.value)}
          placeholder="Ins. ID/SSN"
        />
      </div>
    </>
  )
}