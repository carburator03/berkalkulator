import FamilyMemberTabs from './FamilyMemberTabs/FamilyMemberTabs';
import HouseholdSummary from './HouseholdSummary/HouseholdSummary';
import React, { useEffect, useState } from 'react';

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState(() => {
    const data = localStorage.getItem('members');
    return data
      ? JSON.parse(data)
      : [
          {
            name: 'Feri',
            salary: 600000,
            young: true,
            married: false,
            personnel: false,
            family: true,
            dependent: 1,
            dependent2: 0,
            net: 0,
          },
          {
            name: 'Jani',
            salary: '550000',
            young: false,
            married: true,
            personnel: false,
            family: true,
            dependent: 2,
            dependent2: 1,
            net: 0,
          },
        ];
  });

  useEffect(() => {
    const data = localStorage.getItem('members');
    if (data) setMembers(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  return (
    <>
      <div className='flex justify-center w-5/6 m-auto gap-3'>
        <div className='flex gap-5 justify-center flex-1 border-4 bg-cardBg rounded-2xl border-primary'>
          <FamilyMemberTabs members={members} setMembers={setMembers} />
        </div>
        <HouseholdSummary members={members} />
      </div>
    </>
  );
};

export default HouseholdSalaryCalculator;
